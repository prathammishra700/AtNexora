import React from 'react';
import { ArrowRight, Zap, LayoutDashboard, Video, FileText, Hash, MousePointer2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen pt-20 pb-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        {/* 3D Floating Element Simulation */}
        <div className="mb-8 flex justify-center">
             {/* CSS-only 3D-like shape */}
            <div className="relative w-24 h-24 animate-float">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-600 rounded-2xl transform rotate-12 opacity-80 blur-sm"></div>
               <div className="absolute inset-0 bg-gradient-to-bl from-purple-500 to-blue-400 rounded-2xl transform -rotate-6 border border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
               </div>
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Create with <br />
          <span className="text-gradient">AtNexora Studio</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
          The All-in-One Free Content Creation Toolkit. 
          Generate video scripts, captions, and videos instantly with AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <button 
            onClick={() => onNavigate('tools')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-purple-500/25"
          >
            Start Creating Free <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('features')}
            className="px-8 py-4 rounded-full glass-card text-white font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            Explore Features
          </button>
        </div>

        {/* Dashboard Preview Section */}
        <div className="relative mx-auto max-w-5xl mb-24 perspective-1000">
             {/* Decorative blurred glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent blur-3xl -z-10" />
            
            <div className="glass-card rounded-2xl border border-white/10 bg-black/60 overflow-hidden shadow-2xl">
                {/* Mock Window Header */}
                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                    <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 max-w-sm bg-black/50 h-8 rounded-lg border border-white/5 flex items-center px-3 text-xs text-gray-500">
                        atnexora.com/dashboard
                    </div>
                </div>

                {/* Mock Dashboard Body */}
                <div className="flex h-[400px] md:h-[500px] text-left">
                    {/* Sidebar */}
                    <div className="w-16 md:w-64 border-r border-white/10 p-4 flex flex-col gap-4 bg-white/5 hidden sm:flex">
                        <div className="h-8 bg-purple-500/20 rounded-lg w-full border border-purple-500/30 flex items-center px-3 gap-3 text-purple-300 text-sm font-medium">
                            <LayoutDashboard className="w-4 h-4" /> <span className="hidden md:inline">Overview</span>
                        </div>
                        <div className="h-8 hover:bg-white/5 rounded-lg w-full flex items-center px-3 gap-3 text-gray-400 text-sm font-medium transition-colors cursor-default">
                            <Video className="w-4 h-4" /> <span className="hidden md:inline">My Videos</span>
                        </div>
                        <div className="h-8 hover:bg-white/5 rounded-lg w-full flex items-center px-3 gap-3 text-gray-400 text-sm font-medium transition-colors cursor-default">
                            <FileText className="w-4 h-4" /> <span className="hidden md:inline">Scripts</span>
                        </div>
                        <div className="mt-auto h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/5 p-3 hidden md:block">
                            <div className="w-full h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
                                <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-purple-500" />
                            </div>
                            <div className="text-[10px] text-gray-400">1,240 / 2,000 credits used</div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 overflow-hidden relative">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h4 className="text-2xl font-bold text-white">Welcome back, Creator</h4>
                                <p className="text-sm text-gray-400">Here's what's happening with your projects today.</p>
                            </div>
                            <div className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-white/10 cursor-pointer hover:bg-gray-200 transition-colors">
                                + New Project
                            </div>
                        </div>

                        {/* Recent Projects Table (Fake) */}
                        <div className="bg-white/5 rounded-xl border border-white/5 p-4">
                            <div className="text-sm font-semibold text-gray-300 mb-4">Recent Projects</div>
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 1 ? 'bg-blue-500/20 text-blue-400' : i === 2 ? 'bg-purple-500/20 text-purple-400' : i === 3 ? 'bg-pink-500/20 text-pink-400' : 'bg-green-500/20 text-green-400'}`}>
                                                {i === 1 ? <Video className="w-4 h-4"/> : i === 2 ? <FileText className="w-4 h-4"/> : i === 3 ? <Hash className="w-4 h-4"/> : <Video className="w-4 h-4"/>}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">Project Alpha {i}</div>
                                                <div className="text-xs text-gray-500">Edited {i} hours ago</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-400 hidden sm:block">Ready</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                         {/* Cursor Overlay for effect */}
                        <div className="absolute bottom-10 right-10 md:right-20 animate-bounce-slow pointer-events-none hidden sm:block">
                             <MousePointer2 className="w-6 h-6 text-white drop-shadow-lg fill-black" />
                             <div className="ml-4 mt-1 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                Real-time Creation
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Quick Tools Section */}
        <div className="max-w-6xl mx-auto text-left">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">Try our <span className="text-gradient">Power Tools</span></h3>
                <button onClick={() => onNavigate('tools')} className="text-sm text-gray-400 hover:text-white flex items-center gap-1 group">
                    View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                <div onClick={() => onNavigate('tools')} className="group cursor-pointer relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:bg-white/5">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/40 transition-colors">
                        <FileText className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">AI Script Writer</h4>
                    <p className="text-gray-400 text-sm mb-4">Generate engaging scripts for TikTok, Reels, and YouTube Shorts in seconds.</p>
                    <div className="flex items-center text-purple-400 text-sm font-medium">
                        Try Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                <div onClick={() => onNavigate('tools')} className="group cursor-pointer relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:bg-white/5">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/40 transition-colors">
                        <Video className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Video Generator</h4>
                    <p className="text-gray-400 text-sm mb-4">Turn text prompts into high-quality video clips using Veo technology.</p>
                     <div className="flex items-center text-blue-400 text-sm font-medium">
                        Try Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                 <div onClick={() => onNavigate('tools')} className="group cursor-pointer relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-pink-500/50 transition-all hover:-translate-y-1 hover:bg-white/5">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500/40 transition-colors">
                        <Hash className="w-6 h-6 text-pink-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Smart Captioner</h4>
                    <p className="text-gray-400 text-sm mb-4">Create viral-ready captions with perfectly matched hashtags and emojis.</p>
                     <div className="flex items-center text-pink-400 text-sm font-medium">
                        Try Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;