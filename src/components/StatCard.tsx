
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
  delay?: number;
}

const StatCard = ({ title, value, icon, color, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="glass-card hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color} animate-float`}>
          {icon}
        </div>
        <div className="text-right">
          <div className="text-2xl lg:text-3xl font-bold text-white animate-counter">
            {value.toLocaleString()}
          </div>
          <div className="text-gray-400 font-medium">{title}</div>
        </div>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full animate-pulse-glow`}
          style={{ width: `${Math.min((value / 100) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default StatCard;
