export interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  icon: 'paypal' | 'wise' | 'atlassian' | 'generic';
  type: 'income' | 'expense';
}

export interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

export interface ChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}