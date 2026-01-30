import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Jan', amt: 20000 },
  { name: 'Feb', amt: 30000 },
  { name: 'Mär', amt: 45000 },
  { name: 'Apr', amt: 25000 },
  { name: 'Mai', amt: 15000 },
  { name: 'Jun', amt: 38000 },
  { name: 'Jul', amt: 22000 },
  { name: 'Aug', amt: 38000 },
  { name: 'Sep', amt: 25000 },
];

const CashflowChart: React.FC = () => {
  return (
    <div className="bg-dark-card rounded-[2rem] p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">Anrufstatistiken</h3>
        <div className="flex items-center gap-2 bg-[#272935] px-3 py-1.5 rounded-xl border border-white/5 cursor-pointer">
            <span className="text-xs font-medium text-gray-300">2025</span>
            <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
      
      <div className="flex-1 w-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={24} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2D60FF" />
                  <stop offset="100%" stopColor="#2D60FF" stopOpacity={0.6} />
                </linearGradient>
            </defs>
            
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                dy={10}
            />

            <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                domain={[0, 60000]}
                ticks={[0, 15000, 30000, 45000, 60000]}
                width={45}
            />
            
            <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)', radius: 12 }}
                contentStyle={{ backgroundColor: '#1E2130', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => [value.toLocaleString(), 'Anrufe']}
            />
            
            <Bar 
                dataKey="amt" 
                fill="url(#barGradient)" 
                radius={[12, 12, 12, 12]} 
                background={{ fill: '#1E2130', radius: 12 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashflowChart;