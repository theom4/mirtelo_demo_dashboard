import React from 'react';
import { Transaction } from '../types';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

interface RecentActivityProps {
  transactions: Transaction[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ transactions }) => {
  const getIcon = (type: string) => {
    switch (type) {
        case 'paypal': return (
            <div className="w-10 h-10 rounded-full bg-[#00457C] flex items-center justify-center text-white font-bold text-sm">
                P
            </div>
        );
        case 'wise': return (
            <div className="w-10 h-10 rounded-full bg-[#9AD343] flex items-center justify-center text-[#1E2130]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2L2 22h20L12 2zm0 3.5L17 19H7l5-13.5z"/></svg>
            </div>
        );
        case 'atlassian': return (
            <div className="w-10 h-10 rounded-full bg-[#0052CC] flex items-center justify-center text-white">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2l-5 5 5 5 5-5-5-5zM7 12l-5 5 5 5 5-5-5-5z"/></svg>
            </div>
        );
        default: return <div className="w-10 h-10 bg-gray-700 rounded-full"></div>;
    }
  }

  return (
    <div className="bg-dark-card rounded-[2rem] p-6 h-full">
       <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">Letzte Aktivitäten</h3>
        <div className="flex items-center gap-2 bg-[#272935] px-3 py-1.5 rounded-xl border border-white/5 cursor-pointer">
            <span className="text-xs font-medium text-gray-300">2025</span>
            <ChevronDown className="w-3 h-3 text-gray-300" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
            <thead>
                <tr className="text-left text-xs text-gray-500 border-b border-white/5">
                    <th className="pb-3 font-medium">Name</th>
                    <th className="pb-3 font-medium">Datum</th>
                    <th className="pb-3 font-medium text-right">Betrag</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((t) => (
                    <tr key={t.id} className="group hover:bg-white/5 transition-colors">
                        <td className="py-4 flex items-center gap-3">
                            {getIcon(t.icon)}
                            <div>
                                <p className="font-semibold text-sm text-white">{t.name}</p>
                                <p className="text-xs text-gray-500">**** **** **** 3454</p>
                            </div>
                        </td>
                        <td className="py-4 text-sm text-gray-400">{t.date}</td>
                        <td className={`py-4 text-right font-medium text-sm ${t.type === 'income' ? 'text-white' : 'text-white'}`}>
                            {t.type === 'income' ? '+' : '-'}${Math.abs(t.amount)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;