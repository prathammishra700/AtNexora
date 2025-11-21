import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300">
          (123) 456-7890
        </div>

        <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300 bg-gradient-to-r from-transparent to-purple-900/20 border-purple-500/30">
          HELLO@ATNEXORA.COM
        </div>
      </div>
      <div className="text-center mt-12 text-xs text-gray-600">
        © {new Date().getFullYear()} AtNexora Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;