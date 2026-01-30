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
      <div className="py-16 flex items-center justify-center px-6">
        {/* MIRTELI Logo - Prime Brand Visibility */}
        <div className="relative group cursor-pointer">
            <div className="absolute -inset-6 bg-brand-blue/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img 
                src="https://ympkyaakwveogjcgqqnr.supabase.co/storage/v1/object/public/avatar/mirtelologo.png" 
                alt="MIRTELI" 
                className="w-full max-w-[210px] object-contain relative z-10 transition-all duration-700 group-hover:scale-[1.05] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
        </div>
      </div>

      <nav className="flex-1 px-5 space-y-2">
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-[1.25rem] transition-all duration-500 group relative ${
                isActive 
                  ? 'bg-brand-blue text-white shadow-[0_12px_30px_-5px_rgba(45,96,255,0.4)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {isActive && (
                  <div className="absolute inset-y-3 left-0 w-1 bg-white rounded-full"></div>
              )}
              <item.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'text-white scale-110' : 'text-gray-500 group-hover:text-white group-hover:scale-110'}`} />
              <span className="font-bold text-[13px] tracking-wide">{item.name}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-8">
        <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-5 rounded-[1.8rem] border border-white/5 backdrop-blur-2xl shadow-inner group/engine overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 blur-2xl -mr-12 -mt-12 group-hover/engine:bg-brand-blue/10 transition-colors"></div>
            <div className="text-[9px] text-gray-600 font-black uppercase tracking-[0.25em] mb-2.5 relative z-10">
                UFinance Engine
            </div>
            <div className="flex items-center gap-3 relative z-10">
                <div className="relative flex">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
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