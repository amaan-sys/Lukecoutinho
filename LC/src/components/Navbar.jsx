import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navConfig = [
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '/about/story' },
        { label: 'Vision & Mission', href: '/about/vision' },
        { label: 'The Team', href: '/about/team' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { label: 'Wellness Program', href: '/programs/wellness' },
        { label: 'Weight Management', href: '/programs/weight' },
        { label: 'Chronic Disease', href: '/programs/chronic' },
        { label: 'Mental Health', href: '/programs/mental' },
      ],
    },
    {
      title: 'Workshops',
      links: [
        { label: 'Live Sessions', href: '/workshops/live' },
        { label: 'Corporate Wellness', href: '/workshops/corporate' },
        { label: 'Past Workshops', href: '/workshops/archive' },
      ],
    },
    {
      title: 'Learn With Luke',
      links: [
        { label: 'Masterclasses', href: '/learn/masterclass' },
        { label: "Luke's Blog", href: '/learn/blog' },
        { label: 'E-Books', href: '/learn/books' },
      ],
    },
    {
      title: 'Podcast',
      links: [
        { label: 'Spotify', href: '/podcast/spotify' },
        { label: 'YouTube Episodes', href: '/podcast/youtube' },
        { label: 'Show Notes', href: '/podcast/notes' },
      ],
    },
    {
      title: 'Healthier Bharat',
      links: [
        { label: 'Our Initiatives', href: '/bharat/initiatives' },
        { label: 'Partner With Us', href: '/bharat/partner' },
        { label: 'Impact Reports', href: '/bharat/reports' },
      ],
    },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-[100] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-orange-100">
                <span className="text-white font-black text-xl italic">L</span>
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-800">
                Luke<span className="text-orange-500">coutinho</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a href="/" className="relative group px-4 py-2 text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors">
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>

            {navConfig.map((item) => (
              <div key={item.title} className="relative group">
                <button className="flex items-center px-4 py-2 text-sm font-bold text-slate-600 group-hover:text-orange-500 transition-colors rounded-lg hover:bg-slate-50 outline-none">
                  {item.title}
                  <ChevronDown size={14} className="ml-1 opacity-50 transition-transform duration-300 group-hover:rotate-180 group-hover:text-orange-500" />
                </button>
                
                <div className="absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-[110] p-2">
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-4 py-2 mb-1 border-b border-slate-50">{item.title}</div>
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group/item flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold text-slate-600 hover:bg-orange-500 hover:text-white transition-all duration-200"
                    >
                      {link.label}
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <a href="/careers" className="relative group px-4 py-2 text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors">
              Careers
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            
            <a href="/contact" className="ml-4 px-7 py-3 bg-orange-500 text-white text-sm font-bold rounded-xl hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-orange-100 active:scale-95">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(true)} 
              className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-500 transition-all"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        
        <div className={`absolute right-0 top-0 h-[800] w-[65%] max-w-full bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
          
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm italic">L</span>
              </div>
              <span className="font-bold text-slate-800 tracking-tight">Menu</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto bg-white py-4 px-4 space-y-1">
            <a href="/" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-4 text-base font-bold text-slate-800 rounded-xl hover:bg-slate-50 transition-colors">
              Home
            </a>
            
            {navConfig.map((item, idx) => (
              <div key={item.title}>
                <button 
                  onClick={() => setMobileMenuOpen(mobileMenuOpen === idx ? null : idx)}
                  className={`flex justify-between items-center w-full px-4 py-4 text-base font-bold transition-all rounded-xl ${mobileMenuOpen === idx ? 'bg-orange-50 text-orange-600' : 'text-slate-800 hover:bg-slate-50'}`}
                >
                  {item.title}
                  <ChevronDown size={18} className={`transition-transform duration-300 ${mobileMenuOpen === idx ? 'rotate-180' : 'text-slate-400'}`} />
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${mobileMenuOpen === idx ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-slate-50/80 rounded-xl py-1 mx-2">
                    {item.links.map(link => (
                      <a 
                        key={link.label} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-5 py-3 text-[14px] text-slate-600 font-semibold hover:text-orange-600 transition-colors"
                      >
                        <ArrowRight size={14} className="mr-3 text-orange-400 opacity-50" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <a href="/careers" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-4 text-base font-bold text-slate-800 rounded-xl hover:bg-slate-50 transition-colors">
              Careers
            </a>
          </div>

          <div className="p-6 border-t border-slate-100">
            <a 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-4 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-100 hover:bg-slate-900 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;