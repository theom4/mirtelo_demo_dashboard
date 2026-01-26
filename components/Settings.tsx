import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Moon, Shield } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'notifications', label: 'Benachrichtigungen', icon: Bell },
    { id: 'security', label: 'Sicherheit', icon: Lock },
    { id: 'appearance', label: 'Darstellung', icon: Moon },
  ];

  return (
    <div className="h-full flex flex-col gap-6">
       <div>
           <h2 className="text-2xl font-bold text-white">Einstellungen</h2>
           <p className="text-gray-400 text-sm">Konfigurieren Sie Ihre App-Einstellungen.</p>
        </div>

       <div className="bg-dark-card rounded-[2rem] flex-1 border border-white/5 overflow-hidden flex flex-col md:flex-row">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 p-4 bg-white/[0.02]">
              <nav className="space-y-1">
                  {tabs.map(tab => (
                      <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            activeTab === tab.id 
                            ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/20' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                          <tab.icon className="w-5 h-5" />
                          <span className="font-medium text-sm">{tab.label}</span>
                      </button>
                  ))}
              </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 overflow-y-auto">
              {activeTab === 'profile' && (
                  <div className="max-w-xl space-y-6">
                      <div className="flex items-center gap-6 mb-8">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/10 relative group cursor-pointer">
                                <img src="https://picsum.photos/seed/alex/200/200" alt="Avatar" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white">
                                    Ändern
                                </div>
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-white">Alex Williamson</h3>
                              <p className="text-gray-400">Admin Account</p>
                          </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase">Vorname</label>
                            <input type="text" defaultValue="Alex" className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase">Nachname</label>
                            <input type="text" defaultValue="Williamson" className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase">Email Adresse</label>
                            <input type="email" defaultValue="muraddc0@gmail.com" className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" />
                      </div>
                      <div className="pt-4">
                          <button className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                              Änderungen speichern
                          </button>
                      </div>
                  </div>
              )}

              {activeTab === 'notifications' && (
                  <div className="max-w-xl space-y-6">
                      <h3 className="text-lg font-bold text-white mb-4">Email Benachrichtigungen</h3>
                      {[
                          { title: 'Wöchentlicher Bericht', desc: 'Senden Sie mir eine Zusammenfassung am Freitag.' },
                          { title: 'Neue Anrufaufzeichnung', desc: 'Benachrichtigung wenn ein Anruf beendet wurde.' },
                          { title: 'System Updates', desc: 'Infos über Wartungsarbeiten und neue Features.' }
                      ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                              <div>
                                  <h4 className="font-medium text-white">{item.title}</h4>
                                  <p className="text-sm text-gray-400">{item.desc}</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={i === 0} />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                              </label>
                          </div>
                      ))}
                  </div>
              )}

              {(activeTab === 'security' || activeTab === 'appearance') && (
                  <div className="flex flex-col items-center justify-center h-full text-center p-12 opacity-50">
                      <Shield className="w-16 h-16 text-gray-500 mb-4" />
                      <h3 className="text-xl font-bold text-white">Demomodus</h3>
                      <p className="text-gray-400 max-w-sm mt-2">Diese Einstellungen sind in der Demo-Version nicht verfügbar.</p>
                  </div>
              )}
          </div>
       </div>
    </div>
  );
};

export default Settings;