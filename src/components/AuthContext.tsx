import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGoogleLogin, googleLogout, TokenResponse } from '@react-oauth/google';
import axios from 'axios';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  picture: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Google login hook
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      setIsLoading(true);
      setError(null);
      setToken(tokenResponse.access_token);
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        setUser({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          picture: res.data.picture,
        });
      } catch (err: any) {
        setError('Failed to fetch user info');
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => {
      setError('Google login failed');
      setIsLoading(false);
    },
    flow: 'implicit',
  });

  // Logout function
  const logout = () => {
    googleLogout();
    setUser(null);
    setToken(null);
    setError(null);
  };

  // Persist user in localStorage (optional, for refresh)
  useEffect(() => {
    if (user && token) {
      localStorage.setItem('auth_user', JSON.stringify(user));
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_user');
      localStorage.removeItem('auth_token');
    }
  }, [user, token]);

  // Restore user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    const storedToken = localStorage.getItem('auth_token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 