import React from 'react';
import { Phone, MapPin, ShieldCheck } from 'lucide-react';

export const AscendFooter: React.FC = () => {
  return (
    <footer className="bg-[#002244] text-white py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#ff6b1a]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20,75 C40,40 65,25 90,20 C70,45 50,60 20,75 Z" />
            </svg>
            <span className="font-extrabold text-2xl tracking-tight text-[#7b4bb2]">
              ASCEND
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed text-xs">
            Ascend Medical provides 24/7 virtual telehealth, in-home primary care, mental health counseling, and in-network insurance coverage.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-extrabold text-white text-sm mb-3">Our Services</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#" className="hover:text-amber-300">Primary care</a></li>
            <li><a href="#" className="hover:text-amber-300">Mental health</a></li>
            <li><a href="#" className="hover:text-amber-300">Weight loss</a></li>
            <li><a href="#" className="hover:text-amber-300">Women's health</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-extrabold text-white text-sm mb-3">Locations</h4>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Old Fourth Ward (Atlanta, GA)</li>
            <li className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Duluth (Duluth, GA)</li>
            <li className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> 50-State Virtual Care</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-extrabold text-white text-sm mb-3">Contact Us</h4>
          <p className="text-slate-300 flex items-center gap-1 font-mono font-bold text-sm text-amber-300">
            <Phone className="w-4 h-4 text-[#ff6b1a]" />
            (888) 250-5708
          </p>
          <p className="text-slate-300 mt-1">Care & Membership Support</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
        <p>&copy; {new Date().getFullYear()} Ascend Medical. All rights reserved.</p>
        <p className="font-mono text-slate-400">peakhealthos.com &bull; Telehealth OS</p>
      </div>
    </footer>
  );
};
