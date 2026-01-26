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
    <div className="w-64 h-screen bg-dark-bg border-r border-white/5 flex flex-col fixed left-0 top-0 overflow-y-auto z-10">
      <div className="p-8 flex items-center justify-center">
        {/* MIRTELI Logo Image */}
        <img 
            src="https://ympkyaakwveogjcgqqnr.supabase.co/storage/v1/object/public/avatar/mirtelologo.png" 
            alt="MIRTELI" 
            className="w-48 object-contain"
        />
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-8">
        <div className="text-xs text-gray-600 font-medium uppercase tracking-wider mb-4">
            UFinance v1.0
        </div>
      </div>
    </div>
  );
};

export default Sidebar;