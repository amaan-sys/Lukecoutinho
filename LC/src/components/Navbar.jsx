import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Search, Globe, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      title: 'Learn',
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
      ],
    },
    {
      title: 'Bharat',
      links: [
        { label: 'Our Initiatives', href: '/bharat/initiatives' },
        { label: 'Partner With Us', href: '/bharat/partner' },
      ],
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-sans ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg h-16' : 'bg-white h-20'
      }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-orange-200">
                <span className="text-white font-black text-xl italic">L</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900">
                Luke<span className="text-orange-500">coutinho</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-0.5">
            <Link to="/" className="px-2.5 py-2 text-[16px] font-bold text-slate-700 hover:text-orange-500 transition-all rounded-lg hover:bg-slate-50">
              Home
            </Link>

            {navConfig.map((item) => (
              <div key={item.title} className="relative group">
                <button className="flex items-center px-2.5 py-2 text-[16px] font-bold text-slate-700 group-hover:text-orange-500 transition-all rounded-lg hover:bg-slate-50 outline-none whitespace-nowrap">
                  {item.title}
                  <ChevronDown size={16} className="ml-1 opacity-40 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100" />
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-[110] p-1.5 overflow-hidden">
                  <div className="bg-slate-50/50 rounded-xl">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="group/item flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-bold text-slate-600 hover:bg-orange-500 hover:text-white transition-all duration-200 mb-0.5 last:mb-0"
                      >
                        {link.label}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link to="/careers" className="px-2.5 py-2 text-[16px] font-bold text-slate-700 hover:text-orange-500 transition-all rounded-lg hover:bg-slate-50">
              Careers
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1">
            <div className="hidden sm:flex items-center space-x-0.5 border-r border-slate-100 pr-2 mr-1">
              <button className="p-2 text-slate-600 hover:bg-slate-50 hover:text-orange-500 rounded-xl transition-all" aria-label="Search">
                <Search size={18} />
              </button>
              <button className="p-2 text-slate-600 hover:bg-slate-50 hover:text-orange-500 rounded-xl transition-all" aria-label="Profile">
                <User size={18} />
              </button>
            </div>

            <Link
              to="/contact"
              className="hidden md:flex bg-slate-900 text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-slate-100 active:scale-95 whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-50 text-slate-800 hover:bg-orange-50 hover:text-orange-500 transition-all border border-transparent"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[200] xl:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] sm:w-[400px] bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

          <div className="p-5 flex justify-between items-center border-b border-slate-50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm italic">L</span>
              </div>
              <span className="font-bold text-slate-900 tracking-tight">Navigation</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-slate-800 transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1.5">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3.5 text-base font-bold text-slate-900 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                Home
              </a>

              {navConfig.map((item, idx) => (
                <div key={item.title} className="mb-1">
                  <button
                    onClick={() => setMobileMenuOpen(mobileMenuOpen === idx ? null : idx)}
                    className={`flex justify-between items-center w-full px-4 py-3.5 text-base font-bold transition-all rounded-2xl ${mobileMenuOpen === idx ? 'bg-orange-50 text-orange-600' : 'text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    {item.title}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileMenuOpen === idx ? 'rotate-180' : 'text-slate-400'}`} />
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${mobileMenuOpen === idx ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-slate-50/50 rounded-2xl py-1 mx-2">
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

              <a
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3.5 text-base font-bold text-slate-900 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                Careers
              </a>
            </div>

            <div className="mt-8 px-4 py-6 bg-slate-50 rounded-3xl">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Links</p>
              <div className="grid grid-cols-2 gap-4">
                <a href="/login" className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <User size={20} className="text-orange-500 mb-2" />
                  <span className="text-xs font-bold text-slate-700">Account</span>
                </a>
                <a href="/search" className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <Search size={20} className="text-orange-500 mb-2" />
                  <span className="text-xs font-bold text-slate-700">Search</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-slate-50">
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-100 hover:bg-slate-900 transition-all active:scale-[0.98]"
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
