import React, { useEffect, useState } from 'react';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';
import { getFinancialInsights } from '../services/geminiService';
import { Transaction } from '../types';

interface GeminiInsightsProps {
  transactions: Transaction[];
}

const GeminiInsights: React.FC<GeminiInsightsProps> = ({ transactions }) => {
  const [insight, setInsight] = useState<string>('Analyzing your patterns...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoading(true);
      const text = await getFinancialInsights(transactions);
      setInsight(text);
      setLoading(false);
    };
    fetchInsight();
  }, [transactions]);

  return (
    <div className="ai-glow rounded-[2rem] bg-dark-card border border-white/10 p-6 h-full flex flex-col relative overflow-hidden group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-blue/20 text-brand-blue border border-brand-blue/30 animate-pulse">
                <Sparkles className="w-5 h-5" />
            </div>
            <div>
                <h3 className="text-white font-bold tracking-tight">AI Financial Assistant</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Powered by Gemini 3</p>
            </div>
        </div>
        <div className="flex gap-1">
            {[1, 2, 3].map(i => (
                <div key={i} className={`w-1 h-1 rounded-full bg-brand-blue/40 ${loading ? 'animate-bounce' : ''}`} style={{animationDelay: `${i * 0.2}s`}}></div>
            ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {loading ? (
            <div className="space-y-3">
                <div className="h-4 bg-white/5 rounded-full w-3/4 animate-pulse"></div>
                <div className="h-4 bg-white/5 rounded-full w-1/2 animate-pulse"></div>
            </div>
        ) : (
            <div className="relative">
                <div className="absolute -left-2 -top-2 opacity-10">
                    <Zap className="w-12 h-12 text-brand-blue" />
                </div>
                <p className="text-gray-200 text-sm leading-relaxed font-medium relative z-10 italic">
                    "{insight}"
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-brand-accent/60 uppercase tracking-tighter">
                    <TrendingUp className="w-3 h-3" />
                    <span>Real-time spending analysis</span>
                </div>
            </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] text-gray-600 font-bold uppercase">Confidence Score</span>
          <span className="text-[10px] text-brand-blue font-bold">98.2%</span>
      </div>
    </div>
  );
};

export default GeminiInsights;