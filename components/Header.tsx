import React from 'react';
import { Bell } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="h-24 px-8 flex items-center justify-end bg-dark-bg sticky top-0 z-20">
      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-dark-bg"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="hidden lg:block">
                <p className="text-sm font-semibold text-white">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;