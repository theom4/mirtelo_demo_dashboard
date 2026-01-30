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
      </div>
    </header>
  );
};

export default Header;