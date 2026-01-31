import React from 'react';
import { Bell, Search } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="h-24 px-8 flex items-center justify-between bg-dark-bg/80 backdrop-blur-md sticky top-0 z-20 border-b border-white/[0.02]">
      <div className="relative group">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-brand-blue transition-colors" />
          <input 
            type="text" 
            placeholder="Globale Suche..." 
            className="bg-white/[0.03] border border-white/[0.05] rounded-2xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-blue/50 w-80 transition-all placeholder:text-gray-600"
          />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2.5 bg-white/[0.03] rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all border border-white/[0.05]">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-dark-bg"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-white/5">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 ring-2 ring-brand-blue/10">
                <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="hidden lg:block">
                <p className="text-sm font-bold text-white leading-none">{user.name}</p>
                <p className="text-[11px] text-gray-500 mt-1 font-medium">{user.email}</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;