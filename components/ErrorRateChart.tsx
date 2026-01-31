import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle } from 'lucide-react';

const data = [
  { name: 'Mo', value: 2.1 },
  { name: 'Di', value: 1.8 },
  { name: 'Mi', value: 3.5 },
  { name: 'Do', value: 1.2 },
  { name: 'Fr', value: 2.8 },
  { name: 'Sa', value: 0.9 },
  { name: 'So', value: 1.4 },
];

const ErrorRateChart: React.FC = () => {
  return (
    <div className="bg-dark-card rounded-[2rem] p-6 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
         <div>
            <h3 className="text-white font-semibold mb-1">Fehlerquote</h3>
            <p className="text-xs text-gray-400">Letzte 7 Tage</p>
         </div>
         <div className="bg-red-500/10 p-2.5 rounded-xl border border-red-500/20">
            <AlertTriangle className="w-5 h-5 text-red-500" />
         </div>
      </div>

      <div className="flex items-baseline gap-2 mt-2">
         <h2 className="text-3xl font-bold text-white">1.8%</h2>
         <span className="text-xs font-medium text-red-400 bg-red-400/10 px-2 py-0.5 rounded-lg">+0.4%</span>
      </div>
      
      <div className="flex-1 w-full min-h-[100px] mt-4 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorError" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#6B7280', fontSize: 10}} 
                dy={10}
            />
            <Tooltip
                cursor={{ stroke: '#ef4444', strokeWidth: 1, strokeDasharray: '3 3' }}
                contentStyle={{ backgroundColor: '#1E2130', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => [`${value}%`, 'Fehler']}
            />
            <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#ef4444" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorError)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ErrorRateChart;