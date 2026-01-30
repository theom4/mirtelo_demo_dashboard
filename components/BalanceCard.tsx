import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BalanceCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1E40AF] via-[#111827] to-[#0F111A] p-9 text-white h-full flex flex-col shadow-2xl shadow-blue-900/30 group border border-white/10">
      {/* Dynamic Ambient Lighting */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] group-hover:bg-blue-500/25 transition-all duration-1000"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      
      <div className="flex justify-between items-start z-10 relative">
        <div>
            <h3 className="text-blue-100/60 text-[10px] font-black mb-2 tracking-[0.25em] uppercase">Gesamtguthaben</h3>
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3.5 py-1.5 rounded-full text-[10px] font-black backdrop-blur-3xl border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                <ArrowUpRight className="w-3 h-3 stroke-[3px]" />
                <span>+16.82%</span>
            </div>
        </div>
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-2xl px-4 py-2.5 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 group/btn">
            <span className="text-[11px] font-bold text-blue-100">Sep 2025</span>
            <svg className="w-3 h-3 text-blue-100 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center relative py-6">
        <h1 className="text-5xl font-black tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] flex items-baseline">
          <span className="opacity-40 text-3xl mr-1.5 font-bold">$</span>
          45,090.<span className="opacity-40 text-3xl font-bold">80</span>
        </h1>
      </div>

      <div className="z-10 mt-auto flex items-center justify-between border-t border-white/5 pt-5">
          <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#111827] flex items-center justify-center text-[9px] font-black shadow-xl">USD</div>
                  <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-[#111827] flex items-center justify-center text-[9px] font-black shadow-xl">BTC</div>
              </div>
              <span className="text-[9px] font-bold text-blue-200/40 uppercase tracking-[0.2em]">Portfolio Assets</span>
          </div>
          <div className="flex items-center gap-2">
              <span className="text-[9px] font-black text-brand-accent uppercase tracking-[0.15em] px-3.5 py-1.5 bg-brand-accent/5 rounded-xl border border-brand-accent/20 shadow-inner">Verifiziert</span>
          </div>
      </div>
    </div>
  );
};

export default BalanceCard;