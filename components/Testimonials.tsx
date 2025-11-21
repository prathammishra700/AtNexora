import React from 'react';

const testimonials = [
  {
    quote: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations.",
    author: "Sacha Dubois",
    role: "Social Media Influencer"
  },
  {
    quote: "AtNexora has completely revolutionized our content workflow. The AI suggestions are terrifyingly accurate.",
    author: "Itsuki Takahashi",
    role: "KNJ Label Founder"
  },
  {
    quote: "I've saved 20 hours a week on caption writing alone. This is the future of digital marketing agencies.",
    author: "Vanna Trinh",
    role: "The Plew President"
  },
  {
    quote: "The integrated campaign manager combined with generative scripts is a game changer for small teams.",
    author: "Irena Kim",
    role: "Content Creator"
  },
  {
    quote: "We scaled our agency from 5 to 50 clients without hiring more writers thanks to this toolkit.",
    author: "Sarina Gwan",
    role: "Agency Lead"
  },
  {
    quote: "Finally, an AI tool that understands brand voice nuances. Highly recommended.",
    author: "Arkin Bhatt",
    role: "CMO"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-black relative overflow-hidden">
       {/* Abstract Shape in Background */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
                What our <span className="text-gradient">clients</span> say
            </h2>
             {/* 3D Donut Shape Simulation CSS */}
             <div className="hidden md:block relative w-32 h-32">
                <div className="absolute inset-0 rounded-full border-[16px] border-purple-600/30 blur-md transform rotate-45"></div>
                <div className="absolute inset-2 rounded-full border-[8px] border-blue-500/50 blur-sm transform -rotate-12"></div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors">
              <p className="text-gray-300 mb-8 leading-relaxed">"{item.quote}"</p>
              <div>
                <h4 className="text-lg font-bold text-white">{item.author}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;