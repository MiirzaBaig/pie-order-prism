import Layout from '@/components/Layout';
import OrdersTable from '@/components/OrdersTable';
import { useAuth } from '@/components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Orders = () => {
  const { user, isLoading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="glass-card p-8 text-center animate-pulse-glow">Loading orders...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="glass-card p-8 text-center text-red-400">{error}</div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null; // Redirecting
  }

  return (
    <Layout>
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center space-y-2 sm:space-y-4 animate-fade-in-up px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pizza-orange to-pizza-sauce bg-clip-text text-transparent">
            Pizza Orders Management 🍕
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Monitor, filter, and manage all your pizza orders in one beautiful dashboard
          </p>
        </div>
        
        <div className="glass-card text-center p-8 mb-8 animate-fade-in-up">
          <h1 className="text-2xl font-bold mb-2">Orders</h1>
          <p className="text-gray-300">Here are your latest orders, {user.name}.</p>
        </div>
        
        <OrdersTable />
      </div>
    </Layout>
  );
};

export default Orders;
