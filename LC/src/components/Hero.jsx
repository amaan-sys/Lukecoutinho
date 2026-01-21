import React from 'react';
import { Play, Calendar, ArrowRight, ShieldCheck, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-orange-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 pb-20 lg:pt-5 lg:pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Transforming Lives Globally
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              We help <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                you thrive
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Our holistic approach goes beyond the ordinary to empower individuals to reshape their lifestyles through science-backed integrative medicine.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-xl shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book a Consult
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 font-bold rounded-2xl border-2 border-slate-100 hover:border-orange-200 hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <Play size={14} className="fill-slate-800 group-hover:fill-orange-600 ml-0.5" />
                </div>
                Watch More
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-slate-400" />
                <span className="text-sm font-semibold text-slate-500">10k+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-orange-400 fill-orange-400" />
                <span className="text-sm font-semibold text-slate-500">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="flex-1 relative w-full max-w-xl">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                alt="Lifestyle Medicine" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Floating Medicine Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl flex items-center gap-4 border border-white/50 shadow-xl animate-bounce-slow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-tighter">Certified Care</p>
                  <p className="text-sm font-bold text-slate-800">Integrative & Lifestyle Medicine</p>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
              ))}
            </div>
          </div>

        </div>
      </div>
      
      
    </div>
  );
};

export default Hero;