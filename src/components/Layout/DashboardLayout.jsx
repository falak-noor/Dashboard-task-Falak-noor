import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

export const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
    
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      
      <div className="lg:pl-64 flex flex-col flex-1 min-h-screen transition-all duration-200">
      
        <Header onOpenSidebar={() => setSidebarOpen(true)} />

       
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

     
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
