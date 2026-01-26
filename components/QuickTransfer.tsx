import React, { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';

const users = [
  { id: 1, name: 'Livia', img: 'https://picsum.photos/seed/u1/100/100' },
  { id: 2, name: 'Randy', img: 'https://picsum.photos/seed/u2/100/100' },
  { id: 3, name: 'Workman', img: 'https://picsum.photos/seed/u3/100/100' },
  { id: 4, name: 'Kevin', img: 'https://picsum.photos/seed/u4/100/100' },
  { id: 5, name: 'Betty', img: 'https://picsum.photos/seed/u5/100/100' },
];

const QuickTransfer: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number>(2);

  return (
    <div className="bg-dark-card rounded-[2rem] p-6 flex flex-col justify-between h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold">Schnellüberweisung</h3>
        <div className="flex items-center gap-2 bg-[#272935] px-3 py-1.5 rounded-xl border border-white/5 cursor-pointer">
            <span className="text-xs font-medium text-gray-300">Diese Woche</span>
            <ChevronDown className="w-3 h-3 text-gray-300" />
        </div>
      </div>
      
      <p className="text-gray-400 text-xs leading-relaxed mb-6">
        Das Schnellüberweisungs-Dashboard ermöglicht schnelle, sichere und nahtlose Geldtransfers mit Echtzeit-Tracking.
      </p>

      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button className="w-12 h-12 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors shrink-0">
            <Plus className="w-5 h-5" />
        </button>
        {users.map((user) => (
            <div 
                key={user.id} 
                onClick={() => setSelectedUser(user.id)}
                className={`relative cursor-pointer transition-all duration-300 group ${selectedUser === user.id ? '-translate-y-1' : ''}`}
            >
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${selectedUser === user.id ? 'border-brand-blue shadow-lg shadow-blue-500/30' : 'border-transparent group-hover:border-gray-600'}`}>
                    <img src={user.img} alt={user.name} className="w-full h-full object-cover" />
                </div>
                {selectedUser === user.id && (
                     <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                )}
            </div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 text-sm text-gray-400">Betrag</div>
          <button className="bg-brand-blue text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
              Überweisen
          </button>
      </div>
    </div>
  );
};

export default QuickTransfer;