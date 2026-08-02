import React, { useState } from 'react';
import { useTelehealth } from '../../context/TelehealthContext';
import { UserRole } from '../../types/telehealth';
import { Phone, ChevronDown, Calendar, Shield, Sparkles } from 'lucide-react';

export const AscendHeader: React.FC<{ activeView: string; setActiveView: (v: string) => void }> = ({ activeView, setActiveView }) => {
  const { 
    currentRole, 
    setCurrentRole, 
    setIsConsultationOpen,
    setIsBookingOpen,
    setIsBrandCustomizerOpen
  } = useTelehealth();

  const [showPortalDropdown, setShowPortalDropdown] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setCurrentRole(role);
    setActiveView(role);
    setShowPortalDropdown(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      
      {/* Top Banner (Dark Navy) */}
      <div className="bg-[#002244] text-white text-xs font-semibold text-center py-2 px-4 cursor-pointer hover:bg-[#001a33] transition flex items-center justify-center gap-1">
        <span>Interested in Medical Weight Loss?</span>
        <span className="underline font-bold text-sky-300">Learn More &gt;</span>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        
        {/* Ascend Logo */}
        <div 
          onClick={() => setActiveView('home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* Ascend Orange Wing Symbol */}
          <svg className="w-10 h-10 text-[#ff6b1a]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M20,75 C40,40 65,25 90,20 C70,45 50,60 20,75 Z" />
            <path d="M35,60 C50,35 70,22 88,15 C72,35 55,48 35,60 Z" opacity="0.8" />
          </svg>
          <span className="font-extrabold text-3xl tracking-tight text-[#6a369e]">
            ASCEND
          </span>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#002244]">
          <button 
            onClick={() => setActiveView('home')}
            className={`hover:text-[#ff6b1a] transition ${activeView === 'home' ? 'text-[#ff6b1a]' : ''}`}
          >
            Services
          </button>
          
          <button 
            onClick={() => setActiveView('home')}
            className="hover:text-[#ff6b1a] transition"
          >
            Locations
          </button>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#ff6b1a] transition">
              <span>Providers</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowPortalDropdown(!showPortalDropdown)}
              className="flex items-center gap-1 hover:text-[#ff6b1a] transition text-[#6a369e] font-extrabold"
            >
              <span>Portals Suite</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Portal Switcher Dropdown */}
            {showPortalDropdown && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-fadeIn">
                <button 
                  onClick={() => handleRoleSelect('patient')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#6a369e] flex items-center justify-between"
                >
                  <span>👤 Patient Portal</span>
                  <span className="text-[10px] text-emerald-600">Active</span>
                </button>
                <button 
                  onClick={() => handleRoleSelect('doctor')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#6a369e] flex items-center justify-between"
                >
                  <span>🩺 Doctor EHR</span>
                  <span className="text-[10px] text-sky-600">Active</span>
                </button>
                <button 
                  onClick={() => handleRoleSelect('brand')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#6a369e] flex items-center justify-between"
                >
                  <span>🏢 Brand Partners</span>
                  <span className="text-[10px] text-purple-600">Active</span>
                </button>
                <button 
                  onClick={() => handleRoleSelect('admin')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#6a369e] flex items-center justify-between"
                >
                  <span>🛡️ Executive Admin</span>
                  <span className="text-[10px] text-indigo-600">Active</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="ascend-btn-orange text-xs font-bold py-2.5 px-6"
          >
            BOOK APPOINTMENT
          </button>

          <a 
            href="tel:8882505708" 
            className="ascend-btn-orange text-xs font-bold py-2.5 px-6 hidden sm:inline-flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(888) 250-5708</span>
          </a>
        </div>

      </div>
    </header>
  );
};
