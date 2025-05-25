
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const TopBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const isMobile = useIsMobile();

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  ];

  return (
    <div className="glass-nav p-3 sm:p-4 flex items-center justify-between sticky top-0 z-50 animate-slide-in-right">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="glass-card px-2 py-1 sm:px-4 sm:py-2 animate-bounce-in">
          <span className="text-pizza-orange font-semibold text-xs sm:text-sm">🍕 Pizza Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
          <input
            type="text"
            placeholder={isMobile ? "Search..." : "Search orders..."}
            className={`glass px-2 py-1 sm:px-4 sm:py-2 pl-8 sm:pl-10 rounded-lg text-white placeholder-gray-400 focus-ring transition-all duration-300 ${
              isSearchFocused ? 'w-28 sm:w-64 bg-white/20' : 'w-24 sm:w-48'
            }`}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <span className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs sm:text-base">
            🔍
          </span>
        </div>

        <div className="flex gap-1 sm:gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-1 sm:p-2 hover:scale-110 hover:text-pizza-orange transition-all duration-300 focus-ring"
              aria-label={social.name}
            >
              <span className="text-sm sm:text-lg">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
