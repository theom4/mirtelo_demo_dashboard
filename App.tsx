import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import CashflowChart from './components/CashflowChart';
import ErrorRateChart from './components/ErrorRateChart';
import CallStatistics from './components/CallStatistics';
import Customers from './components/Customers';
import CallRecordings from './components/CallRecordings';
import Reports from './components/Reports';
import Settings from './components/Settings';
import QuickTransfer from './components/QuickTransfer';
import RecentActivity from './components/RecentActivity';
import { User, Transaction } from './types';

const mockUser: User = {
  name: 'Alex Williamson',
  email: 'muraddc0@gmail.com',
  avatarUrl: 'https://picsum.photos/seed/alex/200/200'
};

const mockTransactions: Transaction[] = [
  { id: '1', name: 'Anruf abgeschlossen', category: 'Eingehend', date: '30. Jan 2026', amount: 12, icon: 'wise', type: 'income' },
  { id: '2', name: 'Kundenrückruf', category: 'Ausgehend', date: '30. Jan 2026', amount: 8, icon: 'paypal', type: 'expense' },
  { id: '3', name: 'Support-Ticket gelöst', category: 'Support', date: '29. Jan 2026', amount: 15, icon: 'atlassian', type: 'income' },
  { id: '4', name: 'Verkaufsgespräch', category: 'Vertrieb', date: '29. Jan 2026', amount: 22, icon: 'wise', type: 'income' },
  { id: '5', name: 'Weiterleitung', category: 'Transfer', date: '28. Jan 2026', amount: 5, icon: 'paypal', type: 'expense' },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Kunden':
        return <Customers />;
      case 'Anrufaufzeichnungen':
        return <CallRecordings />;
      case 'Berichte':
        return <Reports />;
      case 'Einstellungen':
        return <Settings />;
      case 'Nachrichten':
        return (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">Nachrichten</p>
              <p>Demnächst verfügbar</p>
            </div>
          </div>
        );
      case 'Dashboard':
      default:
        return (
          <div className="space-y-6 pb-12">
            {/* Top Stats Row */}
            <CallStatistics />

            {/* Main Grid: Balance, Error Rate, and Chart */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <div className="h-64">
                  <BalanceCard />
                </div>
                <div className="h-64">
                  <ErrorRateChart />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <div className="h-[33.5rem]">
                  <CashflowChart />
                </div>
              </div>
            </div>

            {/* Bottom Row: Quick Transfer and Recent Activity */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-4">
                <div className="h-[30rem]">
                  <QuickTransfer />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="h-[30rem]">
                  <RecentActivity transactions={mockTransactions} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-dark-bg text-gray-200 font-sans selection:bg-brand-blue selection:text-white">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} user={mockUser} />

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col h-screen overflow-hidden">
        <Header user={mockUser} />

        <div className="flex-1 p-8 pt-2 overflow-y-auto custom-scrollbar">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;