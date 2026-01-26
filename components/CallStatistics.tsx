import React from 'react';
import { Phone, PhoneIncoming, PhoneOutgoing, Wallet } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CallStatistics: React.FC = () => {
  const conversionRate = 68;
  const gaugeData = [
    { name: 'Score', value: conversionRate },
    { name: 'Rest', value: 100 - conversionRate },
  ];

  const StatCard = ({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend?: string }) => (
    <div className="bg-dark-card rounded-[2rem] p-5 flex flex-col justify-between h-40 relative overflow-hidden group hover:ring-1 hover:ring-white/5 transition-all">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
         {React.cloneElement(icon as React.ReactElement, { size: 48 })}
      </div>
      
      <div className="z-10">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 text-brand-blue border border-white/5">
            {icon}
        </div>
        <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">{title}</h3>
        <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-white">{value}</span>
            {trend && <span className="text-xs text-green-400 mb-1 font-medium">{trend}</span>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
      <StatCard 
        title="Gesamtanrufe" 
        value="12.450" 
        icon={<Phone className="w-5 h-5" />} 
        trend="+12%"
      />
      
      {/* Conversion Rate Speedometer */}
      <div className="bg-dark-card rounded-[2rem] p-5 flex flex-col items-center justify-between h-40 relative hover:ring-1 hover:ring-white/5 transition-all">
         <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wide w-full text-left">Konversionsrate</h3>
         <div className="relative w-full h-full flex items-end justify-center pb-2">
            <ResponsiveContainer width="100%" height="120%">
                <PieChart>
                    <Pie
                        data={gaugeData}
                        cx="50%"
                        cy="75%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius="60%"
                        outerRadius="85%"
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    >
                        <Cell key="score" fill="#2D60FF" />
                        <Cell key="rest" fill="#1E2130" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute bottom-2 flex flex-col items-center">
                <span className="text-2xl font-bold text-white leading-none">{conversionRate}%</span>
            </div>
         </div>
      </div>

      <StatCard 
        title="Eingehende Anrufe" 
        value="8.240" 
        icon={<PhoneIncoming className="w-5 h-5" />} 
        trend="+5%"
      />
      
      <StatCard 
        title="Ausgehende Anrufe" 
        value="4.210" 
        icon={<PhoneOutgoing className="w-5 h-5" />} 
      />
      
      <StatCard 
        title="Ø Kosten pro Anruf" 
        value="€ 1,45" 
        icon={<Wallet className="w-5 h-5" />} 
        trend="-2%"
      />
    </div>
  );
};

export default CallStatistics;