import React, { useState } from 'react';
import { Plus, ChevronDown, Headphones } from 'lucide-react';

const agents = [
  { id: 1, name: 'Anna M.', img: 'https://picsum.photos/seed/agent1/100/100', calls: 45 },
  { id: 2, name: 'Thomas K.', img: 'https://picsum.photos/seed/agent2/100/100', calls: 62 },
  { id: 3, name: 'Sarah L.', img: 'https://picsum.photos/seed/agent3/100/100', calls: 38 },
  { id: 4, name: 'Max B.', img: 'https://picsum.photos/seed/agent4/100/100', calls: 51 },
  { id: 5, name: 'Julia W.', img: 'https://picsum.photos/seed/agent5/100/100', calls: 44 },
];

const QuickTransfer: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<number>(2);

  return (
    <div className="bg-dark-card rounded-[2rem] p-6 flex flex-col justify-between h-full border border-white/5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold">Top Agenten</h3>
        <div className="flex items-center gap-2 bg-[#272935] px-3 py-1.5 rounded-xl border border-white/5 cursor-pointer hover:bg-[#2F3240] transition-colors">
          <span className="text-xs font-medium text-gray-300">Diese Woche</span>
          <ChevronDown className="w-3 h-3 text-gray-300" />
        </div>
      </div>

      <p className="text-gray-400 text-xs leading-relaxed mb-6">
        Übersicht der leistungsstärksten Agenten basierend auf Anrufvolumen und Kundenzufriedenheit.
      </p>

      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button className="w-12 h-12 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors shrink-0">
          <Plus className="w-5 h-5" />
        </button>
        {agents.map((agent) => (
          <div
            key={agent.id}
            onClick={() => setSelectedAgent(agent.id)}
            className={`relative cursor-pointer transition-all duration-300 group ${selectedAgent === agent.id ? '-translate-y-1' : ''}`}
          >
            <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${selectedAgent === agent.id ? 'border-brand-blue shadow-lg shadow-blue-500/30' : 'border-transparent group-hover:border-gray-600'}`}>
              <img src={agent.img} alt={agent.name} className="w-full h-full object-cover" />
            </div>
            {selectedAgent === agent.id && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white/5 rounded-2xl p-4 border border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <img src={agents.find(a => a.id === selectedAgent)?.img} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{agents.find(a => a.id === selectedAgent)?.name}</p>
              <p className="text-gray-400 text-xs">{agents.find(a => a.id === selectedAgent)?.calls} Anrufe heute</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-green-400 text-xs font-medium bg-green-400/10 px-2 py-1 rounded-lg">
              <Headphones className="w-3 h-3" />
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
