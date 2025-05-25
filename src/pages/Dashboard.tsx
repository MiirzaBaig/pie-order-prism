
import Layout from '@/components/Layout';
import StatCard from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { title: 'Total Orders', value: 1247, icon: '📊', color: 'bg-gradient-to-r from-pizza-orange to-pizza-sauce', delay: 100 },
    { title: 'Pending', value: 23, icon: '⏳', color: 'bg-gradient-to-r from-yellow-500 to-orange-500', delay: 200 },
    { title: 'Delivered', value: 1156, icon: '✅', color: 'bg-gradient-to-r from-green-500 to-emerald-500', delay: 300 },
    { title: 'Revenue', value: 28450, icon: '💰', color: 'bg-gradient-to-r from-purple-500 to-pink-500', delay: 400 },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-pizza-orange via-pizza-sauce to-pizza-cheese bg-clip-text text-transparent animate-bounce-in">
              🍕 Pizza Dashboard
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Track and manage your pizza orders with style and efficiency
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Link to="/orders">
              <Button className="glass-button pizza-gradient text-white text-lg px-8 py-4 hover:scale-105 focus-ring">
                View All Orders 🍕
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={<span className="text-2xl">{stat.icon}</span>}
              color={stat.color}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Welcome Message */}
        <div className="glass-card text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Welcome to Your Pizza Empire! 🍕👑</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Manage your pizza orders, track deliveries, and grow your business with our beautiful and intuitive dashboard. 
              From dough to delivery, we've got you covered!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/orders">
                <Button className="glass-button bg-pizza-orange hover:bg-pizza-sauce text-white focus-ring">
                  📋 Manage Orders
                </Button>
              </Link>
              <Link to="/profile">
                <Button className="glass-button bg-pizza-basil hover:bg-pizza-green text-white focus-ring">
                  👤 View Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="text-center space-y-4">
              <div className="text-4xl animate-float">🆕</div>
              <h3 className="text-xl font-bold text-white">New Orders</h3>
              <p className="text-gray-400">Check the latest pizza orders from hungry customers</p>
            </div>
          </div>
          
          <div className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <div className="text-center space-y-4">
              <div className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🚚</div>
              <h3 className="text-xl font-bold text-white">Deliveries</h3>
              <p className="text-gray-400">Track pizzas on their way to satisfied customers</p>
            </div>
          </div>
          
          <div className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <div className="text-center space-y-4">
              <div className="text-4xl animate-float" style={{ animationDelay: '2s' }}>📈</div>
              <h3 className="text-xl font-bold text-white">Analytics</h3>
              <p className="text-gray-400">Monitor your pizza business performance</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
