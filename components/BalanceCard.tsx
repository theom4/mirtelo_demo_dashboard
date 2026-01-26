import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BalanceCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A37C8] via-[#0d1d75] to-[#0F111A] p-6 text-white h-full flex flex-col shadow-2xl shadow-blue-900/20 group">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
      
      <div className="flex justify-between items-start z-10">
        <div>
            <h3 className="text-blue-200 text-sm font-medium mb-1">Mein Guthaben</h3>
            <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-0.5 rounded-lg text-xs font-semibold backdrop-blur-md">
                <ArrowUpRight className="w-3 h-3" />
                <span>16.8%</span>
            </div>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/5 cursor-pointer hover:bg-white/20 transition-colors">
            <span className="text-xs font-medium">25. Sep</span>
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center">
        <h1 className="text-4xl font-bold">$45,090.80</h1>
      </div>
    </div>
  );
};

export default BalanceCard;