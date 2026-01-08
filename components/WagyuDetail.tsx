
import React, { useState, useEffect } from 'react';
import { WagyuBrand } from '../types';
import { getWagyuExpertAdvice } from '../services/geminiService';

interface WagyuDetailProps {
  wagyu: WagyuBrand;
  isCollected: boolean;
  onToggleStamp: (id: string) => void;
  onBack: () => void;
}

const WagyuDetail: React.FC<WagyuDetailProps> = ({ wagyu, isCollected, onToggleStamp, onBack }) => {
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdvice = async () => {
      setLoadingAdvice(true);
      const text = await getWagyuExpertAdvice(wagyu.name);
      setAdvice(text);
      setLoadingAdvice(false);
    };
    fetchAdvice();
  }, [wagyu.name]);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
        <img src={wagyu.imageUrl} alt={wagyu.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm bg-red-600 px-2 py-1 rounded mb-2 inline-block font-bold">{wagyu.prefecture}</span>
          <h2 className="text-4xl font-bold serif">{wagyu.name}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-3 border-l-4 border-red-600 pl-3">特徴</h3>
            <p className="text-slate-700 leading-relaxed mb-4">{wagyu.description}</p>
            <div className="flex flex-wrap gap-2">
              {wagyu.characteristics.map((c, i) => (
                <span key={i} className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full border border-slate-200">{c}</span>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-3 border-l-4 border-red-600 pl-3">美食家のワンポイント・アドバイス</h3>
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 italic text-slate-800">
              {loadingAdvice ? (
                <div className="flex items-center justify-center py-4">
                  <div className="w-6 h-6 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-sm">アドバイザーが執筆中...</span>
                </div>
              ) : (
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{advice}</p>
              )}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-6">
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-3 border-l-4 border-red-600 pl-3">おすすめ部位</h3>
            <ul className="space-y-2">
              {wagyu.recommendedCuts.map((cut, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  {cut}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-3 border-l-4 border-red-600 pl-3">価格帯</h3>
            <p className="text-xl font-bold text-red-700">{wagyu.priceRange}</p>
            <p className="text-xs text-slate-400 mt-1">※一般的な飲食店・小売店での目安</p>
          </section>

          <button
            onClick={() => onToggleStamp(wagyu.id)}
            className={`
              w-full py-4 rounded-3xl font-bold shadow-lg transition-all transform active:scale-95
              ${isCollected 
                ? 'bg-slate-200 text-slate-600 hover:bg-slate-300' 
                : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-red-200'}
            `}
          >
            {isCollected ? 'スタンプを取り消す' : '食べた！スタンプを押す'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WagyuDetail;
