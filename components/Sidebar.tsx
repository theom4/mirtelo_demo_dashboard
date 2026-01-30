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
      <div className="py-12 flex items-center justify-center px-4">
        {/* MIRTELI Logo - Significantly bigger as requested */}
        <img 
            src="https://ympkyaakwveogjcgqqnr.supabase.co/storage/v1/object/public/avatar/mirtelologo.png" 
            alt="MIRTELI" 
            className="w-full max-w-[210px] object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-brand-blue text-white shadow-xl shadow-blue-500/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white transition-colors'}`} />
              <span className="font-semibold text-sm tracking-wide">{item.name}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-8">
        <div className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded-2xl border border-white/5">
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-1">
                System Status
            </div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[11px] text-gray-300 font-medium">UFinance Online</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;