import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mo', amt: 145, day: 'Montag' },
  { name: 'Di', amt: 212, day: 'Dienstag' },
  { name: 'Mi', amt: 178, day: 'Mittwoch' },
  { name: 'Do', amt: 256, day: 'Donnerstag' },
  { name: 'Fr', amt: 198, day: 'Freitag' },
  { name: 'Sa', amt: 87, day: 'Samstag' },
  { name: 'So', amt: 64, day: 'Sonntag' },
];

const CashflowChart: React.FC = () => {
  return (
    <div className="bg-dark-card rounded-[2.5rem] p-8 h-full flex flex-col border border-white/5 relative overflow-hidden">
      {/* Ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-white text-lg font-bold tracking-tight">Anrufstatistiken</h3>
          <p className="text-gray-500 text-xs mt-1">Anrufvolumen der letzten Woche</p>
        </div>
        <div className="flex items-center gap-3 bg-[#272935] px-4 py-2 rounded-2xl border border-white/10 cursor-pointer hover:bg-[#2F3240] transition-colors group">
          <span className="text-xs font-bold text-gray-300">Diese Woche</span>
          <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <div className="flex-1 w-full relative z-10" style={{ minHeight: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 13, fontWeight: 600 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
              domain={[0, 300]}
              ticks={[0, 100, 200, 300]}
            />

            <Tooltip
              cursor={{ fill: 'rgba(96, 165, 250, 0.1)' }}
              contentStyle={{
                backgroundColor: '#1E2130',
                borderRadius: '12px',
                border: '1px solid rgba(59, 130, 246, 0.5)',
                padding: '12px 16px'
              }}
              itemStyle={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}
              labelStyle={{ color: '#9CA3AF', fontSize: '11px', marginBottom: '4px' }}
              formatter={(value: number) => [`${value} Anrufe`, '']}
              labelFormatter={(label) => data.find(d => d.name === label)?.day || label}
            />

            <Bar
              dataKey="amt"
              fill="#3B82F6"
              radius={[8, 8, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stats summary */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5 relative z-10">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Gesamt</p>
            <p className="text-white font-bold text-lg">1,140</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Durchschnitt</p>
            <p className="text-white font-bold text-lg">163</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
          <span>+12.5% vs. letzte Woche</span>
        </div>
      </div>
    </div>
  );
};

export default CashflowChart;
