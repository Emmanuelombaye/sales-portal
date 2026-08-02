import React, { useState } from "react";
import { Link } from "react-router";
import { 
  Search, Stethoscope, HeartHandshake, User, MapPin, 
  ChevronLeft, ChevronRight, Phone, ChevronDown
} from "lucide-react";

export function LandingPage() {
  const [zipCode, setZipCode] = useState("");
  const [showPortalDropdown, setShowPortalDropdown] = useState(false);

  const services = [
    {
      title: "Primary care",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      colorBg: "bg-[#0075FF]/90"
    },
    {
      title: "Mental health",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      colorBg: "bg-[#7B3FE4]/90"
    },
    {
      title: "Weight loss",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      colorBg: "bg-[#00BBA7]/90"
    },
    {
      title: "Women's health",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      colorBg: "bg-[#C026D3]/90"
    }
  ];

  return (
    <div className="ascend-page min-h-screen">
      
      {/* Top alert bar — matches Ascend Medical */}
      <div className="ascend-alert">
        Interested in Medical Weight Loss?{" "}
        <Link to="/patient">
          <strong>Learn More</strong> <strong>&gt;</strong>
        </Link>
      </div>

      {/* Header — logo nests into hero cutout */}
      <header className="ascend-header">
        <div className="ascend-header-inner">
          <div className="ascend-logo-col">
            <p className="ascend-logo">
              <Link to="/" className="block">
                <img
                  className="ascend-logo-img w-full h-auto max-w-[273px] object-contain rounded-xl"
                  src="https://peakbodypeptides.com/wp-content/uploads/2026/03/cropped-WhatsApp-Image-2026-03-07-at-04.38.48-192x192.jpeg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/PeakHealthLogo.png";
                  }}
                  width={273}
                  height={150}
                  alt="Peak Health"
                />
              </Link>
            </p>
          </div>

          <nav className="ascend-nav">
            <a href="#services">Services</a>
            <a href="#locations">Locations</a>
            <button type="button">
              Providers <ChevronDown className="w-4 h-4" />
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPortalDropdown(!showPortalDropdown)}
              >
                More <ChevronDown className="w-4 h-4" />
              </button>
              {showPortalDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50">
                  <Link
                    to="/patient"
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#6a369e] flex items-center justify-between"
                  >
                    <span>Patient Portal</span>
                  </Link>
                  <Link
                    to="/doctor"
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#6a369e] flex items-center justify-between"
                  >
                    <span>Doctor EHR</span>
                  </Link>
                  <Link
                    to="/admin"
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#6a369e] flex items-center justify-between"
                  >
                    <span>Executive Admin</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="ascend-header-ctas">
            <Link to="/patient" className="ascend-pill">
              Book Appointment
            </Link>
            <a href="tel:8882505708" className="ascend-pill">
              (888) 250-5708
            </a>
          </div>
        </div>
      </header>

      {/* Hero — exact Ascend layout: media + nested white cutouts */}
      <section className="ascend-hero" aria-label="Home hero">
        <div className="ascend-hero-grid">
          <div className="ascend-media">
            <img
              src="https://transform.octanecdn.com/crop/1600x900/https://octanecdn.com/ascendmedicalcom/ascendmedicalcom_905244786.jpeg"
              alt="A pediatrician discusses health with a mother and her daughter on a cozy couch."
              width={1600}
              height={900}
              loading="eager"
            />
          </div>

          <h1 className="ascend-hero-title">
            All the care you need.
            <br />
            All in one place.
          </h1>

          <div className="ascend-hero-card">
            <p className="ascend-hero-subtitle">
              Virtual and in-person care,
              <br />
              all billed through insurance.
            </p>
            <div className="ascend-hero-mobile-cta" aria-hidden="true">
              <Link to="/patient" className="ascend-pill">
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 2: OUR SERVICES (Matching Screenshot 2) ----------------- */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16 space-y-8 font-['Poppins',sans-serif]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black text-[#002244]">Our services</h2>
          </div>
          <p className="text-sm font-semibold text-[#002244] max-w-lg">
            Whole-person care, a team-based approach to address every aspect of your health.
          </p>
        </div>

        {/* 4 Cards Grid with Bottom Wave Cutouts */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((serv, idx) => (
              <Link 
                key={idx} 
                to="/patient"
                className="rounded-[28px] overflow-hidden bg-white shadow-md hover:-translate-y-2 transition duration-300 group relative h-80 flex flex-col justify-between"
              >
                <img 
                  src={serv.img} 
                  alt={serv.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Vibrant Colored Overlay Block matching Ascend Medical */}
                <div className={`absolute bottom-0 left-0 right-0 h-[45%] ${serv.colorBg} rounded-b-[28px] p-4 flex items-center justify-center backdrop-blur-[2px] transition duration-300`}>
                  <h3 className="text-2xl font-black text-white text-center font-['Poppins',sans-serif] tracking-tight drop-shadow-sm">
                    {serv.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Orange Carousel Arrow Controls */}
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

      {/* ----------------- SECTION 3: 3 PILLARS & INSURANCES (Matching Screenshot 3) ----------------- */}
      <section className="max-w-7xl mx-auto px-4 py-8 space-y-12 font-['Poppins',sans-serif]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Accessible (Blue) */}
          <div className="bg-[#2d72b8] text-white p-8 rounded-[32px] space-y-4 shadow-lg relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
              <Stethoscope className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black">Accessible</h3>
            <p className="text-sm leading-relaxed font-medium opacity-95">
              Same day appointments from the comfort of your home, office, or wherever you are.
            </p>
          </div>

          {/* Card 2: Affordable (Cyan) */}
          <div className="bg-[#00a3e0] text-white p-8 rounded-[32px] space-y-4 shadow-lg relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black">Affordable</h3>
            <p className="text-sm leading-relaxed font-medium opacity-95">
              No expensive membership fees, just in-network quality care.
            </p>
          </div>

          {/* Card 3: Approachable (Purple) */}
          <div className="bg-[#7b4bb2] text-white p-8 rounded-[32px] space-y-4 shadow-lg relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
              <User className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black">Approachable</h3>
            <p className="text-sm leading-relaxed font-medium opacity-95">
              Healthcare should feel human. We make it personal, friendly, and easy to connect with.
            </p>
          </div>

        </div>

        {/* In-Network Insurance Logos Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-[28px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <h4 className="text-lg font-black text-[#2d72b8] shrink-0">
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

      {/* ----------------- SECTION 4: OUR LOCATIONS (Matching Screenshot 4) ----------------- */}
      <section id="locations" className="max-w-7xl mx-auto px-4 py-8 font-['Poppins',sans-serif]">
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
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-11 pr-4 py-3 rounded-full font-bold text-sm outline-none shadow-inner font-['Poppins',sans-serif]"
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
                  <h4 className="font-black text-white text-base">Whole Person Care, Old Fourth Ward</h4>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">VIEW &gt;</span>
                </div>
                <p className="text-xs text-sky-100 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  619 Rankin St NE, Atlanta, GA 30308
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-2 hover:bg-white/25 transition">
                <div className="flex justify-between items-start">
                  <h4 className="font-black text-white text-base">Whole Person Care, Duluth</h4>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">VIEW &gt;</span>
                </div>
                <p className="text-xs text-sky-100 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  3660 Howell Ferry Rd NW, Bldg B, Duluth, GA 30096
                </p>
              </div>

            </div>

            {/* Right Map Placeholder */}
            <div className="lg:col-span-7 bg-[#002244] rounded-2xl p-6 border border-white/20 relative min-h-[260px] flex flex-col justify-between">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
                <span className="px-3 py-1 rounded-full bg-white text-[#002244]">All Locations</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Whole Person Care</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Counseling</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Psychiatry</span>
              </div>

              <div className="my-8 text-center space-y-2">
                <MapPin className="w-10 h-10 text-cyan-400 mx-auto animate-bounce" />
                <p className="font-black text-white text-sm">Interactive Metro Atlanta Clinic Map</p>
                <p className="text-xs text-slate-300 font-medium">Atlanta, GA &bull; Duluth, GA &bull; Nationwide Virtual Telehealth</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- ASCEND FOOTER ----------------- */}
      <footer className="bg-[#002244] text-white py-12 border-t border-slate-800 text-xs mt-12 font-['Poppins',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-[#ff6b1a]" viewBox="0 0 100 100" fill="currentColor">
                <path d="M20,75 C40,40 65,25 90,20 C70,45 50,60 20,75 Z" />
              </svg>
              <span className="ascend-logo-text font-black text-2xl tracking-tight text-[#7b4bb2]">
                ASCEND
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs font-medium">
              Ascend Medical provides 24/7 virtual telehealth, in-home primary care, mental health counseling, and in-network insurance coverage.
            </p>
          </div>

          <div>
            <h4 className="font-black text-white text-sm mb-3">Our Services</h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li><a href="#services" className="hover:text-amber-300">Primary care</a></li>
              <li><a href="#services" className="hover:text-amber-300">Mental health</a></li>
              <li><a href="#services" className="hover:text-amber-300">Weight loss</a></li>
              <li><a href="#services" className="hover:text-amber-300">Women's health</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-sm mb-3">Locations</h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Old Fourth Ward (Atlanta, GA)</li>
              <li className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Duluth (Duluth, GA)</li>
              <li className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> 50-State Virtual Care</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-sm mb-3">Contact Us</h4>
            <p className="text-slate-300 flex items-center gap-1 font-mono font-bold text-sm text-amber-300">
              <Phone className="w-4 h-4 text-[#ff6b1a]" />
              (888) 250-5708
            </p>
            <p className="text-slate-300 mt-1 font-medium">Care & Membership Support</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] font-medium">
          <p>&copy; {new Date().getFullYear()} Ascend Medical. All rights reserved.</p>
          <p className="font-mono text-slate-400">peakhealthos.com &bull; Telehealth OS</p>
        </div>
      </footer>

    </div>
  );
}
