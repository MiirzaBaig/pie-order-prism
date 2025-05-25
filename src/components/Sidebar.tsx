
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Pizza, User, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/orders', label: 'Orders', icon: Pizza },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button - Fixed positioned */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 glass-button p-2 text-white hover:text-pizza-orange focus-ring md:hidden"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Sidebar */}
        <div 
          className={`fixed top-0 left-0 h-full w-64 z-50 glass-nav transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8 mt-2">
              <h1 className="text-lg font-bold bg-gradient-to-r from-pizza-orange to-pizza-sauce bg-clip-text text-transparent">
                Pizza Dashboard
              </h1>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="glass-button p-2 text-white hover:text-pizza-orange focus-ring"
                aria-label="Close Menu"
              >
                <X size={16} />
              </button>
            </div>
            
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group hover-lift focus-ring ${
                      isActive
                        ? 'glass pizza-gradient text-white shadow-lg'
                        : 'hover:glass hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium group-hover:text-pizza-orange transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar
  return (
    <div className={`glass-nav h-screen sticky top-0 transition-all duration-300 hidden md:block ${
      isCollapsed ? 'w-16' : 'w-64'
    } animate-slide-in-left`}>
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <h1 className="text-lg font-bold bg-gradient-to-r from-pizza-orange to-pizza-sauce bg-clip-text text-transparent">
              Pizza Dashboard
            </h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="glass-button p-2 text-white hover:text-pizza-orange focus-ring"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group hover-lift focus-ring ${
                  isActive
                    ? 'glass pizza-gradient text-white shadow-lg'
                    : 'hover:glass hover:bg-white/10'
                }`}
                title={isCollapsed ? item.label : ''}
              >
                <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
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
