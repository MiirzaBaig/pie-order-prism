import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthContext';

const Index = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;
    if (user) {
      navigate('/'); // dashboard
    } else {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  return null;
};

export default Index;
