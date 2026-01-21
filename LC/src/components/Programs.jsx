import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import wellnessImg from '../assets/wellness.jpg';
import ExclusiveWellness from '../assets/ExclusiveWellness.jpg';
import Guthealth from '../assets/Guthealth.jpg';
import CancerCare from '../assets/CancerCare.jpg';
import PregnancyCare from '../assets/PregnancyCare.webp';
import balancediet from '../assets/balancediet.jpg';
import specialcancerp from '../assets/specialcancerp.jpg';

const Programs = () => {
    const programs = [
        { id: 1, title: "Wellness Program", desc: "All your health goals. One solution. Guided by 150+ years of collective expertise across life stages. This adaptable master program is built around you—whether it’s weight, hormones, condition management, or prevention—crafted to guide you through every stage with clarity and care.", img: wellnessImg, link: "/programs/wellness" },
        { id: 2, title: "Exclusive Wellness Program with Luke", desc: "Looking for an opportunity to work with Luke on your health goals? Experience a truly exclusive healthcare plan designed by Luke Coutinho himself alongside our team of experts. Each step is meticulously tailored to your individual needs, ensuring lasting, meaningful changes that align with your lifestyle.", img: ExclusiveWellness, link: "/programs/exclusive" },
        { id: 3, title: "Gut Care Program", desc: "Looking at rebuilding your gut? Our Gut Care Program is designed to work on creating harmony and balance in your gut microbiome through targeted nutrition, emotional well-being practices, counseling, and lifestyle modifications to support you in every way.", img: Guthealth, link: "/programs/gut" },
        { id: 4, title: "Cancer Care Program with Luke’s Senior Team", desc: "Our Cancer Care Program is designed to offer personalized support for all types and stages of cancer. It taps into your body’s intelligent systems through deep cellular nutrition and targeted lifestyle practices. We aim to manage the side effects of conventional treatments that run parallelly, improving your quality of life, enhancing immunity, and reducing the chances of relapses.", img: CancerCare, link: "/programs/cancer-care" },
        { id: 5, title: "Pregnancy Care Program", desc: "While you nurture a new life, we nurture you. You can join our program in any trimester and the plan will be modified as per the progress, development, and body’s needs. We ensure your cravings are healthily taken care of, manage and prevent pregnancy-related complications, and provide postnatal guidance on lactation and breastfeeding too.", img: PregnancyCare, link: "/programs/pregnancy" },
        { id: 6, title: "Balanced Nutrition for Children", desc: "Discover sustainable ways for your child to eat healthy by understanding the right food choices, how their body functions, and weaning off junk food from their routine. With tailored plans that are as unique as your child, set the foundation for a healthier tomorrow. An early start doesn’t hurt to build an integrative lifestyle!", img: balancediet, link: "/programs/children" },
        { id: 7, title: "Special Cancer Care Programs", desc: "From diagnosis and management to post-cancer rehabilitation, our personalized, holistic, specialized across-stage requirements Cancer Care programs are a passion project close to Luke’s heart that blend expert nutrition with lifestyle coaching.", img: specialcancerp, link: "/programs/special-cancer" },
    ];

    const infinitePrograms = [...programs, ...programs, ...programs];
    const [currentIndex, setCurrentIndex] = useState(programs.length);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        if (currentIndex === programs.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(programs.length);
            }, 700);
        }
        if (currentIndex === programs.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(programs.length * 2 - 1);
            }, 700);
        }
    }, [currentIndex, programs.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-18 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-[2px] bg-orange-500"></div>
                            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Our Expertise</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Flagship Programs, <br />
                            <span className="text-slate-400">Crafted for You</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            We take a 360° approach to your health—mind, body, and spirit—helping you rebuild your lifestyle through personalized one-on-one coaching.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={prevSlide} className="w-14 h-14 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center">
                            <ChevronLeft size={28} />
                        </button>
                        <button onClick={nextSlide} className="w-14 h-14 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center">
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {infinitePrograms.map((prog, idx) => (
                            <div key={`${prog.id}-${idx}`} className="min-w-full px-2">
                                <div className="bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col lg:flex-row h-auto lg:h-[550px]">
                                    
                                    {/* Image Side */}
                                    <div className="lg:w-2/5 h-[300px] lg:h-full relative overflow-hidden">
                                        <img
                                            src={prog.img}
                                            alt={prog.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute top-8 left-8">
                                            <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 shadow-lg">
                                                0{(idx % programs.length) + 1} / Program
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-3/5 p-8 md:p-14 lg:p-20 flex flex-col bg-white">
                                        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                                                {prog.title}
                                            </h3>
                                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                                {prog.desc}
                                            </p>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                                            <a
                                                href={prog.link}
                                                className="group flex items-center gap-4 text-sm font-black text-slate-900 uppercase tracking-[0.2em]"
                                            >
                                                View Program Details
                                                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-slate-900 transition-colors shadow-lg shadow-orange-200">
                                                    <ArrowUpRight size={20} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modern Strip Indicator */}
                <div className="flex justify-center mt-16 gap-4">
                    {programs.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentIndex(idx + programs.length);
                            }}
                            className={`h-1.5 transition-all duration-500 rounded-full ${
                                (currentIndex % programs.length) === idx 
                                ? 'w-20 bg-orange-500' 
                                : 'w-8 bg-slate-200 hover:bg-slate-300'
                            }`}
                        />
                    ))}
                </div>

                {/* NEW SECTION BUTTONS (CENTERED AT BOTTOM) */}
                <div className="mt-10 mb-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-10 py-4 bg-orange-500 text-white font-bold rounded-full text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-orange-100">
                        Consult With Team Luke
                    </button>
                    <button className="px-10 py-4 border-2 border-slate-300 text-slate-500 font-bold rounded-full text-sm uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all">
                        Know More
                    </button>
                </div>

            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
            `}} />
        </section>
    );
};

export default Programs;