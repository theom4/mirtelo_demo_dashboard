import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BalanceCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1E40AF] via-[#111827] to-[#0F111A] p-9 text-white h-full flex flex-col shadow-2xl shadow-blue-900/30 group border border-white/10">
      {/* Dynamic Background Glows */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-500 rounded-full blur-[110px] opacity-10 group-hover:opacity-25 transition-opacity duration-1000"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-400 rounded-full blur-[90px] opacity-10"></div>
      
      <div className="flex justify-between items-start z-10 relative">
        <div>
            <h3 className="text-blue-100/60 text-[11px] font-extrabold mb-2 tracking-[0.15em] uppercase">Aktuelles Guthaben</h3>
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3.5 py-1.5 rounded-full text-[10px] font-black backdrop-blur-2xl border border-green-500/20">
                <ArrowUpRight className="w-3 h-3 stroke-[3px]" />
                <span>+16.82%</span>
            </div>
        </div>
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 group/btn">
            <span className="text-[11px] font-bold text-blue-100">September 2025</span>
            <svg className="w-3 h-3 text-blue-100 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center relative py-4">
        <h1 className="text-5xl font-black tracking-tighter drop-shadow-2xl">
          <span className="opacity-40 text-4xl mr-1">$</span>
          45,090.<span className="opacity-40 text-4xl">80</span>
        </h1>
      </div>

      <div className="z-10 mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border border-white/10 flex items-center justify-center text-[8px] font-bold">USD</div>
                  <div className="w-6 h-6 rounded-full bg-cyan-500 border border-white/10 flex items-center justify-center text-[8px] font-bold">BTC</div>
              </div>
              <span className="text-[10px] font-bold text-blue-200/40 uppercase tracking-widest">Multi-Currency Wallet</span>
          </div>
          <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.1em] px-3 py-1 bg-brand-accent/10 rounded-lg border border-brand-accent/20">Verifiziert</span>
      </div>
    </div>
  );
};

export default BalanceCard;