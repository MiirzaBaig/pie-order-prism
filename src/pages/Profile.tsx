
import Layout from '@/components/Layout';

const Profile = () => {
  // Mock user data - in real app this would come from authentication
  const user = {
    name: "Pizza Master",
    email: "pizzamaster@example.com",
    role: "Restaurant Manager",
    joinDate: "January 2024"
  };

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
              <div className="w-24 h-24 bg-gradient-to-r from-pizza-orange to-pizza-sauce rounded-full flex items-center justify-center text-4xl mx-auto mb-4 animate-pulse-glow">
                👤
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
              <p className="text-pizza-orange font-medium">{user.role}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Email</span>
                <span className="text-white">{user.email}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Role</span>
                <span className="text-white">{user.role}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Member Since</span>
                <span className="text-white">{user.joinDate}</span>
              </div>
            </div>

            <div className="pt-6 text-center">
              <p className="text-gray-300 mb-4">
                🍕 Ready to implement Google OAuth? This profile will automatically display your Google account information once authentication is set up!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
