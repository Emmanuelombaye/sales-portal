import React, { useState } from 'react';
import { useTelehealth } from '../../context/TelehealthContext';
import { 
  Search, Stethoscope, HeartHandshake, User, MapPin, 
  ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Shield
} from 'lucide-react';

export const AscendHomePage: React.FC<{ onNavigatePortal: (portal: string) => void }> = ({ onNavigatePortal }) => {
  const { setIsBookingOpen, setIsConsultationOpen } = useTelehealth();
  const [zipCode, setZipCode] = useState('');

  const services = [
    {
      title: "Primary care",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
      waveColor: "from-sky-500/80 to-blue-600/90"
    },
    {
      title: "Mental health",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      waveColor: "from-purple-500/80 to-indigo-600/90"
    },
    {
      title: "Weight loss",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
      waveColor: "from-teal-500/80 to-emerald-600/90"
    },
    {
      title: "Women's health",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      waveColor: "from-fuchsia-500/80 to-purple-600/90"
    }
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#f3f9fc]">
      
      {/* SECTION 1: HERO (Replicating Screenshot 1) */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-[#eaf6fc] via-[#f0f9fd] to-[#e4f3fa] p-4 sm:p-8 min-h-[480px] border border-slate-200/80 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Headline Notched Card */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-12 rounded-[32px] shadow-lg border border-slate-100 space-y-6 relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002244] tracking-tight leading-[1.1]">
                All the care you need. <br />
                <span className="text-[#6a369e]">All in one place.</span>
              </h1>

              <div className="bg-[#f0f7fd] p-5 rounded-2xl border border-sky-100 space-y-3">
                <p className="text-sm font-bold text-[#002244]">
                  Virtual and in-person care, all billed through insurance.
                </p>
                <p className="text-xs text-slate-600">
                  Ascend Medical connects you with 24/7 video visits, in-home bloodwork draws, and personalized primary care with zero hidden fees.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="ascend-btn-orange text-sm font-bold py-3.5 px-8"
                >
                  BOOK APPOINTMENT
                </button>
                <button 
                  onClick={() => onNavigatePortal('patient')}
                  className="px-6 py-3.5 rounded-full bg-[#6a369e] text-white font-bold text-sm hover:bg-[#582a88] transition shadow-md"
                >
                  ENTER PATIENT PORTAL
                </button>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-[32px] overflow-hidden shadow-xl border-4 border-white h-[420px]">
                <img 
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80" 
                  alt="Doctor consulting patient" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Floating Badge */}
              <div className="absolute -bottom-4 -right-2 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:block max-w-xs">
                <p className="text-xs font-extrabold text-[#6a369e] uppercase tracking-wider">In-Network Care</p>
                <p className="text-xs text-slate-700 font-medium mt-1">Virtual & In-Person primary care billed directly to your insurance provider.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICES CAROUSEL (Replicating Screenshot 2) */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-[#002244]">Our services</h2>
          </div>
          <p className="text-sm font-medium text-[#002244] max-w-lg">
            Whole-person care, a team-based approach to address every aspect of your health.
          </p>
        </div>

        {/* 4 Cards Grid with Curved Wave Cutouts */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((serv, idx) => (
              <div 
                key={idx} 
                onClick={() => setIsBookingOpen(true)}
                className="ascend-service-card cursor-pointer group relative h-80 flex flex-col justify-between"
              >
                <img 
                  src={serv.img} 
                  alt={serv.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Curved Gradient Wave Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${serv.waveColor} rounded-b-[28px] p-4 flex items-end justify-center`}>
                  <h3 className="text-xl font-extrabold text-white text-center drop-shadow-md">
                    {serv.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Orange Carousel Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="w-12 h-12 rounded-full bg-[#ff6b1a] text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#ff6b1a] text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3 PILLARS & INSURANCES (Replicating Screenshot 3) */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Accessible (Blue Card) */}
          <div className="bg-[#2d72b8] text-white p-8 rounded-[32px] space-y-4 shadow-lg relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
              <Stethoscope className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black">Accessible</h3>
            <p className="text-sm leading-relaxed opacity-95">
              Same day appointments from the comfort of your home, office, or wherever you are.
            </p>
          </div>

          {/* Card 2: Affordable (Cyan Card) */}
          <div className="bg-[#00a3e0] text-white p-8 rounded-[32px] space-y-4 shadow-lg relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black">Affordable</h3>
            <p className="text-sm leading-relaxed opacity-95">
              No expensive membership fees, just in-network quality care.
            </p>
          </div>

          {/* Card 3: Approachable (Purple Card) */}
          <div className="bg-[#7b4bb2] text-white p-8 rounded-[32px] space-y-4 shadow-lg relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
              <User className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black">Approachable</h3>
            <p className="text-sm leading-relaxed opacity-95">
              Healthcare should feel human. We make it personal, friendly, and easy to connect with.
            </p>
          </div>

        </div>

        {/* In-Network Insurance Logos Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-[28px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <h4 className="text-lg font-extrabold text-[#2d72b8] shrink-0">
            In-network insurances
          </h4>

          <div className="flex flex-wrap items-center justify-around gap-6 w-full text-slate-700 font-extrabold text-sm font-mono">
            <span className="text-[#002244] tracking-tight">Anthem. BlueCross BlueShield</span>
            <span className="text-[#7b4bb2]">aetna®</span>
            <span className="text-emerald-600">Humana.</span>
            <span className="text-sky-600">Cigna.</span>
            <span className="text-blue-900">Medicare</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR LOCATIONS (Replicating Screenshot 4) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#2d72b8] rounded-[36px] p-8 sm:p-12 text-white space-y-8 shadow-xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="bg-white/10 px-6 py-2 rounded-full inline-block">
              <h2 className="text-3xl font-black">Our locations</h2>
            </div>

            <div className="relative max-w-md w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input 
                type="text"
                placeholder="Enter ZIP to Search Locations"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-11 pr-4 py-3 rounded-full font-bold text-sm outline-none shadow-inner"
              />
            </div>
          </div>

          <p className="text-xs text-sky-100 font-semibold">
            Ascend is growing! Click here to view <strong className="underline cursor-pointer text-amber-300">our locations coming soon</strong>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Locations List */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-2 hover:bg-white/25 transition">
                <div className="flex justify-between items-start">
                  <h4 className="font-extrabold text-white text-base">Whole Person Care, Old Fourth Ward</h4>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">VIEW &gt;</span>
                </div>
                <p className="text-xs text-sky-100 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  619 Rankin St NE, Atlanta, GA 30308
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-2 hover:bg-white/25 transition">
                <div className="flex justify-between items-start">
                  <h4 className="font-extrabold text-white text-base">Whole Person Care, Duluth</h4>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">VIEW &gt;</span>
                </div>
                <p className="text-xs text-sky-100 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  3660 Howell Ferry Rd NW, Bldg B, Duluth, GA 30096
                </p>
              </div>

            </div>

            {/* Right Map Placeholder Card */}
            <div className="lg:col-span-7 bg-[#002244] rounded-2xl p-6 border border-white/20 relative min-h-[260px] flex flex-col justify-between">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
                <span className="px-3 py-1 rounded-full bg-white text-[#002244]">All Locations</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Whole Person Care</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Counseling</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Psychiatry</span>
              </div>

              <div className="my-8 text-center space-y-2">
                <MapPin className="w-10 h-10 text-cyan-400 mx-auto animate-bounce" />
                <p className="font-bold text-white text-sm">Interactive Metro Atlanta Clinic Map</p>
                <p className="text-xs text-slate-300">Atlanta, GA &bull; Duluth, GA &bull; Nationwide Virtual Telehealth</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
