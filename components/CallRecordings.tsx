import React from 'react';
import { Play, PhoneIncoming, PhoneOutgoing, Download, Share2, MoreVertical } from 'lucide-react';

const calls = [
  { id: 1, name: 'Support Anfrage #4092', number: '+49 152 987654', type: 'incoming', duration: '12:04', date: 'Heute, 10:23', status: 'Resolved' },
  { id: 2, name: 'Verkaufsgespräch - TechSolutions', number: '+49 171 1234567', type: 'outgoing', duration: '05:32', date: 'Heute, 09:15', status: 'Follow-up' },
  { id: 3, name: 'Unbekannter Anrufer', number: '+49 89 234567', type: 'incoming', duration: '00:45', date: 'Gestern, 16:40', status: 'Missed' },
  { id: 4, name: 'Projekt Update - Alpha', number: '+49 30 9876543', type: 'outgoing', duration: '45:12', date: 'Gestern, 14:00', status: 'Completed' },
  { id: 5, name: 'Kundenfeedback', number: '+49 160 5556667', type: 'incoming', duration: '08:19', date: '23. Sep, 11:30', status: 'Resolved' },
];

const CallRecordings: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-white">Anrufaufzeichnungen</h2>
           <p className="text-gray-400 text-sm">Archiv aller aufgezeichneten Gespräche.</p>
        </div>
        <div className="flex gap-3">
             <div className="bg-dark-card border border-white/5 rounded-xl px-4 py-2 text-sm text-gray-300">
                <span className="text-gray-500 mr-2">Speicher:</span>
                <span className="text-white font-medium">45% belegt</span>
             </div>
        </div>
      </div>

      <div className="bg-dark-card rounded-[2rem] p-6 flex-1 overflow-hidden overflow-y-auto">
        <div className="space-y-4">
            {calls.map((call) => (
                <div key={call.id} className="group bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 flex items-center justify-between transition-all">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${call.type === 'incoming' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                            {call.type === 'incoming' ? <PhoneIncoming className="w-5 h-5" /> : <PhoneOutgoing className="w-5 h-5" />}
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">{call.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                                <span>{call.number}</span>
                                <span>•</span>
                                <span>{call.date}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden md:block text-center">
                            <span className="block text-xs text-gray-500 uppercase">Dauer</span>
                            <span className="text-sm font-mono text-white">{call.duration}</span>
                        </div>
                        
                        <div className="hidden md:block">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                call.status === 'Missed' ? 'border-red-500/30 text-red-400 bg-red-500/10' : 
                                'border-green-500/30 text-green-400 bg-green-500/10'
                            }`}>
                                {call.status}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 rounded-full bg-brand-blue hover:bg-blue-600 flex items-center justify-center text-white transition-colors shadow-lg shadow-blue-500/20">
                                <Play className="w-4 h-4 fill-white" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="hidden md:flex w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CallRecordings;