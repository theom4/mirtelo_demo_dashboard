import React from 'react';
import { Search, Filter, MoreHorizontal, Mail, Phone } from 'lucide-react';

const customers = [
  { id: 1, name: 'Livia Bator', company: 'TechSolutions GmbH', email: 'livia@techsolutions.com', status: 'Active', lastContact: 'Heute, 14:30' },
  { id: 2, name: 'Randy Press', company: 'Press & Partners', email: 'randy@press.co.uk', status: 'Inactive', lastContact: 'Gestern' },
  { id: 3, name: 'Workman & Co', company: 'Global Logistics', email: 'contact@workman.io', status: 'Active', lastContact: '23. Sep' },
  { id: 4, name: 'Kevin Hallows', company: 'Freelance', email: 'kevin.design@gmail.com', status: 'Pending', lastContact: '21. Sep' },
  { id: 5, name: 'Betty Green', company: 'GreenEnergy', email: 'betty@greenenergy.de', status: 'Active', lastContact: '20. Sep' },
  { id: 6, name: 'Marcus Horizon', company: 'Horizon Arts', email: 'marcus@horizon.art', status: 'Active', lastContact: '19. Sep' },
];

const Customers: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      {/* Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h2 className="text-2xl font-bold text-white">Kunden</h2>
           <p className="text-gray-400 text-sm">Verwalten Sie Ihre Kundenkontakte und Status.</p>
        </div>
        <div className="flex gap-3">
            <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Suchen..." 
                    className="bg-dark-card border border-white/5 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:border-brand-blue/50 w-64"
                />
            </div>
            <button className="flex items-center gap-2 bg-dark-card border border-white/5 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
            </button>
            <button className="bg-brand-blue text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                + Neuer Kunde
            </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-dark-card rounded-[2rem] p-6 flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-500 border-b border-white/5 text-xs uppercase tracking-wider">
                        <th className="pb-4 font-medium pl-4">Name</th>
                        <th className="pb-4 font-medium">Unternehmen</th>
                        <th className="pb-4 font-medium">Kontakt</th>
                        <th className="pb-4 font-medium">Status</th>
                        <th className="pb-4 font-medium">Letzter Kontakt</th>
                        <th className="pb-4 font-medium text-right pr-4">Aktionen</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {customers.map((customer) => (
                        <tr key={customer.id} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-none">
                            <td className="py-4 pl-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold">
                                        {customer.name.charAt(0)}
                                    </div>
                                    <span className="font-semibold text-white">{customer.name}</span>
                                </div>
                            </td>
                            <td className="py-4 text-gray-300">{customer.company}</td>
                            <td className="py-4">
                                <div className="flex gap-2">
                                    <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-brand-blue transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-green-400 transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4">
                                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                                    customer.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                                    customer.status === 'Inactive' ? 'bg-red-500/10 text-red-400' :
                                    'bg-yellow-500/10 text-yellow-400'
                                }`}>
                                    {customer.status}
                                </span>
                            </td>
                            <td className="py-4 text-gray-400">{customer.lastContact}</td>
                            <td className="py-4 text-right pr-4">
                                <button className="text-gray-500 hover:text-white transition-colors">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;