import React from 'react';
import { MoreHorizontal, ChevronDown } from 'lucide-react';

const CurrencyCards: React.FC = () => {
  return (
    <div className="bg-dark-card rounded-[2rem] p-6 h-full flex flex-col">
       <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">Währungen</h3>
        <div className="flex items-center gap-2 bg-[#272935] px-3 py-1.5 rounded-xl border border-white/5 cursor-pointer">
            <span className="text-xs font-medium text-gray-300">2025</span>
            <ChevronDown className="w-3 h-3 text-gray-300" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* USD Card */}
        <div className="bg-[#1E2130] rounded-3xl p-5 flex flex-col justify-between relative group hover:ring-1 hover:ring-brand-blue/50 transition-all">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <span className="text-xs font-bold text-gray-800">🇺🇸</span>
                    </div>
                    <span className="font-bold text-white">USD</span>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            
            <div className="mt-4">
                <h4 className="text-2xl font-bold text-white mb-1">$ 45,090.80</h4>
                <p className="text-xs text-gray-400">Limit: 10k $ pro Monat</p>
            </div>

            <div className="mt-4">
                 <span className="text-green-500 text-sm font-medium bg-green-500/10 px-3 py-1 rounded-lg">Aktiv</span>
            </div>
        </div>

        {/* EUR Card */}
        <div className="bg-[#1E2130] rounded-3xl p-5 flex flex-col justify-between relative group hover:ring-1 hover:ring-brand-blue/50 transition-all">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <span className="text-xs font-bold text-gray-800">🇩🇪</span>
                    </div>
                    <span className="font-bold text-white">EUR</span>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            
            <div className="mt-4">
                <h4 className="text-2xl font-bold text-white mb-1">€ 29,123.35</h4>
                <p className="text-xs text-gray-400">Limit: 10k $ pro Monat</p>
            </div>

            <div className="mt-4">
                 <span className="text-red-400 text-sm font-medium bg-red-400/10 px-3 py-1 rounded-lg">Inaktiv</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCards;