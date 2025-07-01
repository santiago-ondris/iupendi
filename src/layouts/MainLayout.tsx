// src/layouts/MainLayout.tsx
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header fijo para hero */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo Verde */}
            <div className="flex items-center">
              <span className="text-3xl font-bold text-[#7252A5]" style={{ fontFamily: 'Codec Pro, sans-serif' }}>
                IUPENDI DIGITAL
              </span>
            </div>
            
            {/* Menu Button */}
            <button className="text-gray-800 text-lg font-medium flex items-center gap-2">
              <span style={{ fontFamily: 'Codec Pro, sans-serif' }}>menu</span>
              <div className="flex flex-col gap-1">
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;