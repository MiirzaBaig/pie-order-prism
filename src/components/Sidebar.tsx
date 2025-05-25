
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: '/orders', label: 'Orders', icon: '🍕' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <div className={`glass-nav h-screen sticky top-0 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} animate-slide-in-left`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pizza-orange to-pizza-sauce bg-clip-text text-transparent">
              Pizza Dashboard
            </h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="glass-button p-2 text-white hover:text-pizza-orange focus-ring"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="space-y-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group hover-lift focus-ring ${
                  isActive
                    ? 'glass pizza-gradient text-white shadow-lg'
                    : 'hover:glass hover:bg-white/10'
                }`}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="font-medium group-hover:text-pizza-orange transition-colors duration-300">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
