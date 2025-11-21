import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AiDemo from './components/AiDemo';
import Auth from './components/Auth';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple state-based routing: 'home' | 'tools' | 'features' | 'auth'
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'tools':
        return <AiDemo />;
      case 'features':
        return <Features />;
      case 'auth':
        return <Auth onNavigate={setCurrentPage} />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {/* Key prop triggers animation on change */}
        <div key={currentPage} className="page-enter">
          {renderPage()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;