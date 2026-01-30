import React from 'react';
import { Transaction } from '../types';
import { ChevronDown, Phone, PhoneIncoming, PhoneOutgoing, Ticket, TrendingUp } from 'lucide-react';

interface RecentActivityProps {
    transactions: Transaction[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ transactions }) => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'paypal': return (
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <PhoneOutgoing className="w-5 h-5" />
                </div>
            );
            case 'wise': return (
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <PhoneIncoming className="w-5 h-5" />
                </div>
            );
            case 'atlassian': return (
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Ticket className="w-5 h-5" />
                </div>
            );
            default: return <div className="w-10 h-10 bg-gray-700 rounded-full"></div>;
        }
    }

    return (
        <div className="bg-dark-card rounded-[2rem] p-6 h-full border border-white/5">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-semibold">Letzte Aktivitäten</h3>
                <div className="flex items-center gap-2 bg-[#272935] px-3 py-1.5 rounded-xl border border-white/5 cursor-pointer hover:bg-[#2F3240] transition-colors">
                    <span className="text-xs font-medium text-gray-300">Heute</span>
                    <ChevronDown className="w-3 h-3 text-gray-300" />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 border-b border-white/5">
                            <th className="pb-3 font-medium">Aktivität</th>
                            <th className="pb-3 font-medium">Datum</th>
                            <th className="pb-3 font-medium text-right">Dauer (Min)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((t) => (
                            <tr key={t.id} className="group hover:bg-white/5 transition-colors">
                                <td className="py-4 flex items-center gap-3">
                                    {getIcon(t.icon)}
                                    <div>
                                        <p className="font-semibold text-sm text-white">{t.name}</p>
                                        <p className="text-xs text-gray-500">{t.category}</p>
                                    </div>
                                </td>
                                <td className="py-4 text-sm text-gray-400">{t.date}</td>
                                <td className={`py-4 text-right font-medium text-sm ${t.type === 'income' ? 'text-green-400' : 'text-gray-300'}`}>
                                    {t.amount} min
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
