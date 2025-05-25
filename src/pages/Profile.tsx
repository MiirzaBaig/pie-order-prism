import Layout from '@/components/Layout';
import { useAuth } from '@/components/AuthContext';

const Profile = () => {
  const { user, isLoading, error } = useAuth();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="glass-card p-8 text-center animate-pulse-glow">Loading your profile...</div>
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
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="glass-card p-8 text-center">You are not logged in.</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pizza-orange to-pizza-sauce bg-clip-text text-transparent">
            Hello, {user.name}! 👋
          </h1>
          <p className="text-lg text-gray-300">
            Welcome back to your pizza dashboard
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="text-center">
              <img
                src={user.picture}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pizza-orange shadow-lg animate-pulse-glow"
              />
              <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
              <p className="text-pizza-orange font-medium">Google User</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Email</span>
                <span className="text-white">{user.email}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">ID</span>
                <span className="text-white">{user.id}</span>
              </div>
            </div>

            <div className="pt-6 text-center">
              <p className="text-gray-300 mb-4">
                🍕 Your profile info is powered by Google OAuth. Enjoy your stay!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
