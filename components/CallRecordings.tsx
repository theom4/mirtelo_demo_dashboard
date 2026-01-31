import React, { useState } from 'react';
import { 
  Play, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Download, 
  Share2, 
  X, 
  Phone, 
  Calendar, 
  Clock, 
  MessageSquare,
  Sparkles,
  Volume2,
  Package
} from 'lucide-react';

interface Call {
  id: number;
  name: string;
  number: string;
  type: 'incoming' | 'outgoing';
  duration: string;
  date: string;
  status: string;
  client_personal_id: string;
  transcription?: string;
}

const calls: Call[] = [
  { 
    id: 1, 
    name: 'Support Anfrage #4092', 
    number: '+40771074425', 
    type: 'incoming', 
    duration: '01:13', 
    date: '31 ian. 2026, 09:47', 
    status: 'Upsell',
    client_personal_id: '2081',
    transcription: 'Bună ziua, doamna lulica. Silvia sunt de la TamTrend. Ați plasat o comandă astăzi de cosmetice și voiam să vă confirm. Despre ce e vorba? Am înțeles. Ați comandat cremă naturală pentru drenaj limfatic și picioare ușoare. Da, da, da, da, da, da, da, da. Două cutii am zis care face Ce? Ce? Aha. Mhm. Da, pentru două cutii, prețul total este 98 RON cu livrare gratuită. E în regulă? Da, da, da, am Am constatat și am Perfect. Și adresa de livrare este București, Lacul Ursului 47, sector 6, București. Da, asta e adresa, da. În regulă. O să primiți comanda în două, trei zile lucrătoare. O să vă sune curierul când sosește. Vă dorim o zi frumoasă. E bun, doamnă, că mă dor picioarele de nu mai pot.'
  },
  { id: 2, name: 'Verkaufsgespräch - TechSolutions', number: '+49 171 1234567', type: 'outgoing', duration: '05:32', date: 'Heute, 09:15', status: 'Follow-up', client_personal_id: '2082' },
  { id: 3, name: 'Unbekannter Anrufer', number: '+49 89 234567', type: 'incoming', duration: '00:45', date: 'Gestern, 16:40', status: 'Missed', client_personal_id: '2083' },
  { id: 4, name: 'Projekt Update - Alpha', number: '+49 30 9876543', type: 'outgoing', duration: '45:12', date: 'Gestern, 14:00', status: 'Completed', client_personal_id: '2084' },
  { id: 5, name: 'Kundenfeedback', number: '+49 160 5556667', type: 'incoming', duration: '08:19', date: '23. Sep, 11:30', status: 'Resolved', client_personal_id: '2085' },
];

const CallRecordings: React.FC = () => {
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);

  const RecordingModal = ({ call, onClose }: { call: Call; onClose: () => void }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-[#0D0F17] rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] border border-white/5 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center text-brand-purple border border-brand-purple/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Detalii Înregistrare</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Grid */}
        <div className="px-8 pb-8 space-y-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">CLIENT / TELEFON</label>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-purple" />
                <span className="text-lg font-bold text-white tracking-tight">{call.number}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">DATĂ & ORĂ</label>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-brand-purple" />
                <span className="text-lg font-bold text-white tracking-tight">{call.date}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">DURATĂ APEL</label>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-purple" />
                <span className="text-lg font-bold text-white tracking-tight">{call.duration}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">STATUS CONVERSAȚIE</label>
              <div>
                <span className="bg-[#1E2130] text-gray-400 px-3 py-1 rounded-lg text-xs font-bold border border-white/5">
                  {call.status}
                </span>
              </div>
            </div>

            {/* Added Order Number section explicitly as requested */}
            <div className="col-span-2 space-y-1.5 pt-2 border-t border-white/5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                <Package className="w-3 h-3" />
                NUMĂR COMANDĂ
              </label>
              <span className="text-lg font-bold text-brand-accent tracking-widest">{call.client_personal_id}</span>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-[#05070A] rounded-2xl p-6 border border-white/5 relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">ASCULTĂ ÎNREGISTRAREA</h3>
              <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-600">ID: {call.client_personal_id}</span>
            </div>
            
            <div className="bg-[#161926] rounded-full px-4 py-2 flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0D0F17] shrink-0">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
              <div className="flex-1 flex items-center gap-3">
                 <span className="text-[11px] font-bold text-gray-400">0:00 / {call.duration}</span>
                 <div className="flex-1 h-1 bg-white/10 rounded-full relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-white/20 rounded-full"></div>
                 </div>
                 <div className="flex items-center gap-3 text-gray-400">
                    <Volume2 className="w-4 h-4" />
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Transcription */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-purple animate-pulse" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">TRANSCRIERE AI</h3>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl p-6 border border-white/[0.05] leading-relaxed text-gray-300 text-sm">
              {call.transcription || "Transcriere indisponibilă pentru acest apel."}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">SECURED BY NANOASSIST AI</span>
           </div>
           <button 
             onClick={onClose}
             className="bg-[#1E2130] hover:bg-[#272935] text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all border border-white/5 active:scale-95"
           >
             Închide
           </button>
        </div>
      </div>
    </div>
  );

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

      <div className="bg-dark-card rounded-[2rem] p-6 flex-1 overflow-hidden overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
            {calls.map((call) => (
                <div key={call.id} className="group bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 flex items-center justify-between transition-all cursor-pointer" onClick={() => setSelectedCall(call)}>
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${call.type === 'incoming' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                            {call.type === 'incoming' ? <PhoneIncoming className="w-5 h-5" /> : <PhoneOutgoing className="w-5 h-5" />}
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">{call.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                                <span className="font-mono">{call.number}</span>
                                <span className="opacity-20">•</span>
                                <span>{call.date}</span>
                                <span className="opacity-20">•</span>
                                <span className="text-gray-600 font-mono">ID: {call.client_personal_id}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden md:block text-center">
                            <span className="block text-[9px] text-gray-500 uppercase font-black tracking-widest">Dauer</span>
                            <span className="text-sm font-mono text-white font-bold">{call.duration}</span>
                        </div>
                        
                        <div className="hidden md:block">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${
                                call.status === 'Missed' ? 'border-red-500/30 text-red-400 bg-red-500/10' : 
                                'border-white/10 text-gray-300 bg-white/5'
                            }`}>
                                {call.status}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button 
                              className="w-10 h-10 rounded-full bg-brand-blue hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow-lg shadow-blue-500/20 active:scale-90"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCall(call);
                              }}
                            >
                                <Play className="w-4 h-4 fill-white" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {selectedCall && (
        <RecordingModal call={selectedCall} onClose={() => setSelectedCall(null)} />
      )}
    </div>
  );
};

export default CallRecordings;