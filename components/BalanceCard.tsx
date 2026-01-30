import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BalanceCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1A37C8] via-[#0d1d75] to-[#0A0C14] p-8 text-white h-full flex flex-col shadow-2xl shadow-blue-900/30 group border border-white/10">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500 rounded-full blur-[80px] opacity-10"></div>
      
      <div className="flex justify-between items-start z-10 relative">
        <div>
            <h3 className="text-blue-100/70 text-sm font-semibold mb-2 tracking-wide uppercase">Mein Guthaben</h3>
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-xl border border-white/10">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+16.8%</span>
            </div>
        </div>
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 group/btn">
            <span className="text-xs font-bold text-blue-100">Sep 2025</span>
            <svg className="w-3.5 h-3.5 text-blue-100 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center relative">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">$45,090.<span className="opacity-60">80</span></h1>
      </div>

      <div className="z-10 mt-4 flex items-center gap-4 text-xs font-medium text-blue-200/50">
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>USD Wallet</span>
          </div>
          <span>•</span>
          <span>Verifiziert</span>
      </div>
    </div>
  );
};

export default BalanceCard;