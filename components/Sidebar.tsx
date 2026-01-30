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
      <div className="py-14 flex items-center justify-center px-6">
        {/* MIRTELI Logo - Maximized for Brand Presence */}
        <img 
            src="https://ympkyaakwveogjcgqqnr.supabase.co/storage/v1/object/public/avatar/mirtelologo.png" 
            alt="MIRTELI" 
            className="w-full max-w-[220px] object-contain transition-all duration-500 hover:scale-105 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
        />
      </div>

      <nav className="flex-1 px-4 space-y-2.5">
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-brand-blue text-white shadow-xl shadow-blue-500/25' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white transition-colors'}`} />
              <span className="font-semibold text-[13px] tracking-wide">{item.name}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-8">
        <div className="bg-gradient-to-br from-white/5 to-transparent p-5 rounded-[1.5rem] border border-white/5 backdrop-blur-md">
            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.25em] mb-2">
                System Status
            </div>
            <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-[11px] text-gray-300 font-bold tracking-tight">UFinance Premium</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;