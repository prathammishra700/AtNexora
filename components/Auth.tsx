import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, User, Command } from 'lucide-react';

interface AuthProps {
  onNavigate: (page: string) => void;
}

const Auth: React.FC<AuthProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-md">
        <div className="glass-card p-8 rounded-3xl shadow-2xl relative border border-white/10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
                <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl transform rotate-45"></div>
                    <Command className="relative text-white w-6 h-6" />
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Join AtNexora'}</h2>
            <p className="text-gray-400 text-sm">
              {isLogin 
                ? 'Enter your credentials to access your workspace.' 
                : 'Create your free account to start generating content.'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate('tools'); }}>
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-400 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-400 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
            >
              {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;