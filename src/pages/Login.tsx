import { useAuth } from '@/components/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user, isLoading, error, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="glass-card p-8 max-w-md w-full text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pizza-orange to-pizza-sauce bg-clip-text text-transparent">
          Sign in to Pizza Dashboard
        </h1>
        <p className="mb-6 text-gray-300">Login with your Google account to continue.</p>
        {error && <div className="mb-4 text-red-400">{error}</div>}
        <button
          onClick={login}
          disabled={isLoading}
          className="glass-button w-full py-2 px-4 rounded-lg text-lg font-semibold bg-pizza-orange hover:bg-pizza-sauce text-white transition-colors focus-ring flex items-center justify-center gap-2"
        >
          <span className="text-xl">🔒</span>
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      </div>
    </div>
  );
};

export default Login; 