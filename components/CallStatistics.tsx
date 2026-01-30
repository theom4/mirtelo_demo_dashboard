
import React from 'react';
import { Phone, PhoneIncoming, PhoneOutgoing, Wallet } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CallStatistics: React.FC = () => {
  const conversionRate = 68;
  const gaugeData = [
    { name: 'Score', value: conversionRate },
    { name: 'Rest', value: 100 - conversionRate },
  ];

  const StatCard = ({ title, value, icon, trend, colorClass = "text-brand-blue" }: { title: string, value: string, icon: React.ReactNode, trend?: string, colorClass?: string }) => (
    <div className="bg-dark-card rounded-[2.2rem] p-6 flex flex-col justify-between h-44 relative overflow-hidden group hover:bg-[#1C1E2D] border border-white/5 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-black/40">
      {/* Background Decorative Icon */}
      <div className={`absolute -top-2 -right-2 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 scale-150 ${colorClass}`}>
         {/* Fix: Casting icon to React.ReactElement<any> to allow the 'size' property when cloning the lucide icon */}
         {React.cloneElement(icon as React.ReactElement<any>, { size: 80 })}
      </div>
      
      <div className="z-10 relative">
        <div className={`w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center mb-4 ${colorClass} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <h3 className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1">{title}</h3>
        <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">{value}</span>
            {trend && (
                <span className={`text-xs px-2 py-0.5 rounded-lg mb-1 font-bold ${trend.startsWith('+') ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                    {trend}
                </span>
            )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      <StatCard 
        title="Gesamtanrufe" 
        value="12.450" 
        icon={<Phone className="w-5 h-5" />} 
        trend="+12%"
      />
      
      <div className="bg-dark-card rounded-[2.2rem] p-6 flex flex-col items-center justify-between h-44 relative border border-white/5 hover:bg-[#1C1E2D] transition-all duration-500 group">
         <h3 className="text-gray-500 text-[11px] font-bold uppercase tracking-widest w-full text-left z-10">Konversionsrate</h3>
         <div className="relative w-full h-full flex items-end justify-center pb-2 scale-110">
            <ResponsiveContainer width="100%" height="130%">
                <PieChart>
                    <Pie
                        data={gaugeData}
                        cx="50%"
                        cy="80%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius="65%"
                        outerRadius="90%"
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    >
                        <Cell key="score" fill="#2D60FF" className="drop-shadow-[0_0_8px_rgba(45,96,255,0.5)]" />
                        <Cell key="rest" fill="#1E2130" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute bottom-1 flex flex-col items-center">
                <span className="text-3xl font-extrabold text-white leading-none">{conversionRate}<span className="text-lg opacity-40">%</span></span>
            </div>
         </div>
      </div>

      <StatCard 
        title="Eingehend" 
        value="8.240" 
        icon={<PhoneIncoming className="w-5 h-5" />} 
        trend="+5%"
        colorClass="text-cyan-400"
      />
      
      <StatCard 
        title="Ausgehend" 
        value="4.210" 
        icon={<PhoneOutgoing className="w-5 h-5" />} 
        colorClass="text-purple-400"
      />
      
      <StatCard 
        title="Ø Kosten" 
        value="€ 1,45" 
        icon={<Wallet className="w-5 h-5" />} 
        trend="-2%"
        colorClass="text-emerald-400"
      />
    </div>
  );
};

export default CallStatistics;
