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
    <div className="w-64 h-screen bg-dark-bg border-r border-white/[0.03] flex flex-col fixed left-0 top-0 overflow-y-auto z-50 scrollbar-hide">
      <div className="py-12 flex items-center justify-center px-6">
        <div className="relative group cursor-pointer">
            <div className="absolute -inset-10 bg-brand-blue/5 rounded-full blur-[60px] group-hover:bg-brand-blue/10 transition-all duration-1000"></div>
            <img 
                src="https://ympkyaakwveogjcgqqnr.supabase.co/storage/v1/object/public/avatar/mirtelologo.png" 
                alt="MIRTELI" 
                className="w-full max-w-[180px] object-contain relative z-10 transition-all duration-700 group-hover:scale-[1.05] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
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
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative ${
                isActive 
                  ? 'bg-gradient-to-r from-brand-blue/20 to-transparent text-white border-l-[3px] border-brand-blue' 
                  : 'text-gray-500 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-brand-blue scale-110 drop-shadow-[0_0_8px_rgba(45,96,255,0.6)]' : 'text-gray-500 group-hover:text-gray-300'}`} />
              <span className={`font-semibold text-[13px] tracking-wide ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{item.name}</span>
              {isActive && (
                  <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_#2D60FF]"></div>
              )}
            </button>
          );
        })}
      </nav>
      
      <div className="p-6">
        <div className="glass-card p-5 rounded-3xl border border-white/5 overflow-hidden relative group/engine">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-blue/10 blur-2xl transition-all group-hover/engine:bg-brand-blue/20"></div>
            <div className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mb-3">System Health</div>
            <div className="flex items-center gap-3">
                <div className="relative flex">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-[11px] text-gray-300 font-bold tracking-tight">V2.4.0 <span className="text-gray-600 ml-1">STABLE</span></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;