import React from 'react';
import { MonitorPlay, PenTool, BarChart3, Share2, Layers, Zap, Globe, Shield, Users } from 'lucide-react';

const features = [
  {
    title: 'Brand Strategy',
    description: 'AI-analyzed market trends to position your brand effectively.',
    icon: <Layers className="w-8 h-8 text-purple-400" />
  },
  {
    title: 'Digital Marketing',
    description: 'Automated ad copy and campaign planning across platforms.',
    icon: <Share2 className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'Content Development',
    description: 'Generative text, image, and script creation tools.',
    icon: <PenTool className="w-8 h-8 text-pink-400" />
  },
  {
    title: 'Graphic Design',
    description: 'Smart templates and layout generation for social assets.',
    icon: <MonitorPlay className="w-8 h-8 text-green-400" />
  },
  {
    title: 'Web Optimization',
    description: 'SEO-focused copy generation for high ranking.',
    icon: <Globe className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Analytics',
    description: 'Predictive performance metrics for your content.',
    icon: <BarChart3 className="w-8 h-8 text-indigo-400" />
  },
  {
    title: 'Instant Generation',
    description: 'Create content in milliseconds with our optimized pipeline.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  },
  {
    title: 'Secure Workspace',
    description: 'Enterprise-grade security for your brand assets.',
    icon: <Shield className="w-8 h-8 text-red-400" />
  },
  {
    title: 'Collaboration',
    description: 'Share projects with your team seamlessly.',
    icon: <Users className="w-8 h-8 text-orange-400" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
           <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase">
             Platform Capabilities
           </div>
           <h2 className="text-4xl md:text-6xl font-bold mb-6">What we <span className="text-gradient">offer</span></h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             Our offerings range from graphic design and branding strategy to website development and video production, all supercharged by AI.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glass-card p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden relative"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center text-sm font-semibold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Explore Solution &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra CTA for features */}
        <div className="mt-20 text-center">
          <div className="glass-card inline-flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
            <div className="text-left">
                <h3 className="text-xl font-bold">Ready to transform your workflow?</h3>
                <p className="text-gray-400">Join thousands of creators using AtNexora today.</p>
            </div>
            <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
                Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;