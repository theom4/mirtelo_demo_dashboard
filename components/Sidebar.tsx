import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Phone, 
  FileText, 
  Settings, 
  MessageSquare 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Kunden', icon: Users },
    { name: 'Anrufaufzeichnungen', icon: Phone },
    { name: 'Berichte', icon: FileText },
    { name: 'Einstellungen', icon: Settings },
    { name: 'Nachrichten', icon: MessageSquare },
  ];

  return (
    <div className="w-64 h-screen bg-dark-bg border-r border-white/5 flex flex-col fixed left-0 top-0 overflow-y-auto z-50 scrollbar-hide">
      <div className="py-16 flex items-center justify-center px-8">
        {/* MIRTELI Logo - Prime Brand Visibility */}
        <div className="relative group">
            <div className="absolute -inset-4 bg-brand-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
                src="https://ympkyaakwveogjcgqqnr.supabase.co/storage/v1/object/public/avatar/mirtelologo.png" 
                alt="MIRTELI" 
                className="w-full max-w-[220px] object-contain relative z-10 transition-all duration-700 group-hover:scale-[1.04] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            />
        </div>
      </div>

      <nav className="flex-1 px-5 space-y-1.5">
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-[1.25rem] transition-all duration-500 group ${
                isActive 
                  ? 'bg-brand-blue text-white shadow-[0_10px_25px_-5px_rgba(45,96,255,0.4)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'text-white scale-110' : 'text-gray-500 group-hover:text-white group-hover:scale-110'}`} />
              <span className="font-bold text-[13px] tracking-wide">{item.name}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-10">
        <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-5 rounded-[1.8rem] border border-white/5 backdrop-blur-2xl shadow-inner">
            <div className="text-[9px] text-gray-600 font-black uppercase tracking-[0.25em] mb-2.5">
                UFinance Engine
            </div>
            <div className="flex items-center gap-3">
                <div className="relative flex">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-[11px] text-gray-300 font-black tracking-tight uppercase">Live v2.4.0</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;