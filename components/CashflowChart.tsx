import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', amt: 20000 },
  { name: 'Feb', amt: 30000 },
  { name: 'Mar', amt: 45000 },
  { name: 'Apr', amt: 25000 },
  { name: 'May', amt: 15000 },
  { name: 'Jun', amt: 38000 },
  { name: 'Jul', amt: 22000 },
  { name: 'Aug', amt: 38000 },
  { name: 'Sep', amt: 25000 },
];

const CashflowChart: React.FC = () => {
  return (
    <div className="bg-dark-card rounded-[2.5rem] p-8 h-full flex flex-col border border-white/5 premium-mesh relative overflow-hidden">
      <div className="flex justify-between items-center mb-10 relative z-10">
        <div>
          <h3 className="text-white text-xl font-bold tracking-tight">Financial Statistics</h3>
          <p className="text-gray-500 text-xs mt-1">Monthly cashflow analysis and predictions</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/10 transition-colors group">
            <span className="text-xs font-bold text-gray-300">Year 2025</span>
            <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
      
      <div className="flex-1 w-full min-h-[250px] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={24} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2D60FF" />
                  <stop offset="100%" stopColor="#00D1FF" />
                </linearGradient>
            </defs>
            
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.03)" strokeDasharray="8 8" />

            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#4B5563', fontSize: 11, fontWeight: 700 }} 
                dy={15}
            />

            <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#4B5563', fontSize: 11, fontWeight: 700 }} 
                domain={[0, 60000]}
                ticks={[0, 20000, 40000, 60000]}
            />
            
            <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.02)', radius: 12 }}
                contentStyle={{ 
                  backgroundColor: 'rgba(20, 22, 34, 0.9)', 
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)', 
                  padding: '16px 20px' 
                }}
                itemStyle={{ color: '#fff', fontSize: '13px', fontWeight: '800' }}
                labelStyle={{ color: '#9CA3AF', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '900' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Balance']}
            />
            
            <Bar 
                dataKey="amt" 
                fill="url(#barGradient)" 
                radius={[8, 8, 8, 8]} 
                background={{ fill: '#161926', radius: 8 }}
                animationDuration={2000}
                animationEasing="ease-in-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashflowChart;