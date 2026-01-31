import React from 'react';
import { ArrowUpRight, CreditCard, Wifi } from 'lucide-react';

const BalanceCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] mesh-gradient p-8 text-white h-full flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group transition-transform duration-500 hover:scale-[1.02]">
      {/* Dynamic Glass Reflection */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none"></div>
      
      <div className="flex justify-between items-start z-10 relative">
        <div className="space-y-1.5">
            <h3 className="text-blue-100/40 text-[10px] font-black tracking-[0.3em] uppercase">Current Balance</h3>
            <div className="flex items-center gap-2">
                <h1 className="text-4xl font-black tracking-tighter text-glow flex items-baseline">
                    <span className="text-blue-200/40 text-2xl mr-1">$</span>
                    45,090.<span className="text-blue-200/40 text-2xl">80</span>
                </h1>
            </div>
        </div>
        <div className="flex flex-col items-end gap-3">
             <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 px-4 py-1.5 rounded-2xl text-[11px] font-bold border border-green-500/20 backdrop-blur-xl">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3px]" />
                <span>+16.8%</span>
            </div>
            <div className="w-14 h-10 bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 rounded-xl border border-yellow-500/30 flex items-center justify-center backdrop-blur-md overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="w-9 h-7 bg-yellow-400/20 rounded-md relative border border-yellow-400/20">
                    <div className="absolute inset-x-0 top-1/2 h-[1px] bg-yellow-400/40"></div>
                    <div className="absolute inset-y-0 left-1/2 w-[1px] bg-yellow-400/40"></div>
                </div>
            </div>
        </div>
      </div>

      <div className="z-10 mt-auto relative space-y-7">
          <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-blue-200/30 uppercase tracking-[0.2em]">Card Holder</span>
                  <span className="text-base font-bold tracking-widest text-blue-50 drop-shadow-md">ALEX WILLIAMSON</span>
              </div>
              <Wifi className="w-6 h-6 text-white/20 rotate-90" />
          </div>
          
          <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                      <div className="w-9 h-9 rounded-full bg-blue-600/60 border-2 border-white/10 flex items-center justify-center text-[9px] font-black shadow-xl backdrop-blur-md">USD</div>
                      <div className="w-9 h-9 rounded-full bg-cyan-500/60 border-2 border-white/10 flex items-center justify-center text-[9px] font-black shadow-xl backdrop-blur-md">BTC</div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-200/40 uppercase tracking-[0.2em]">Assets</span>
              </div>
              
              <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-red-600/80 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/80 -ml-4 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BalanceCard;