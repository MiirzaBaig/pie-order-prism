
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <div className={`flex-1 flex flex-col min-w-0 ${isMobile ? 'ml-0' : ''}`}>
        <TopBar />
        <main className={`flex-1 p-4 sm:p-6 lg:p-8 overflow-auto ${isMobile ? 'pt-20' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
