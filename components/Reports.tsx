import React from 'react';
import { Download, TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar } from 'recharts';

const lineData = [
  { name: 'W1', value: 4000 },
  { name: 'W2', value: 3000 },
  { name: 'W3', value: 5000 },
  { name: 'W4', value: 4500 },
  { name: 'W5', value: 6000 },
];

const barData = [
  { name: 'Mo', calls: 45 },
  { name: 'Di', calls: 52 },
  { name: 'Mi', calls: 38 },
  { name: 'Do', calls: 65 },
  { name: 'Fr', calls: 48 },
  { name: 'Sa', calls: 20 },
  { name: 'So', calls: 15 },
];

const Reports: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6 overflow-y-auto pr-2">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-white">Berichte</h2>
           <p className="text-gray-400 text-sm">Leistungsübersicht für September 2025.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors">
            <Download className="w-4 h-4" />
            <span>PDF Export</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
            { title: 'Gesamtumsatz', value: '€45,230', icon: DollarSign, color: 'text-green-400' },
            { title: 'Aktive Kunden', value: '1,204', icon: Users, color: 'text-blue-400' },
            { title: 'Anrufe Gesamt', value: '12,450', icon: Calendar, color: 'text-purple-400' },
            { title: 'Wachstum', value: '+18.2%', icon: TrendingUp, color: 'text-orange-400' },
         ].map((stat, i) => (
             <div key={i} className="bg-dark-card rounded-[1.5rem] p-5 border border-white/5">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-xl text-white">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-lg">30 Tage</span>
                </div>
                <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
             </div>
         ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-[400px]">
         {/* Revenue Trend */}
         <div className="bg-dark-card rounded-[2rem] p-6 border border-white/5 flex flex-col">
            <h3 className="text-white font-semibold mb-6">Umsatzentwicklung</h3>
            <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                        <Tooltip contentStyle={{backgroundColor: '#1E2130', borderRadius: '12px', border: 'none', color: '#fff'}} />
                        <Line type="monotone" dataKey="value" stroke="#2D60FF" strokeWidth={4} dot={{fill: '#2D60FF', strokeWidth: 2, r: 4, stroke: '#fff'}} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
         </div>

         {/* Call Volume */}
         <div className="bg-dark-card rounded-[2rem] p-6 border border-white/5 flex flex-col">
            <h3 className="text-white font-semibold mb-6">Anrufvolumen (Woche)</h3>
            <div className="flex-1 min-h-[300px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                        <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#1E2130', borderRadius: '12px', border: 'none', color: '#fff'}} />
                        <Bar dataKey="calls" fill="#00D1FF" radius={[6, 6, 6, 6]} barSize={32} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Reports;