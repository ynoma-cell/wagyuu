
import React from 'react';
import { WagyuBrand } from '../types';

interface StampBookProps {
  wagyuList: WagyuBrand[];
  collectedStamps: string[];
  onSelectWagyu: (id: string) => void;
}

const StampBook: React.FC<StampBookProps> = ({ wagyuList, collectedStamps, onSelectWagyu }) => {
  const progress = Math.round((collectedStamps.length / wagyuList.length) * 100);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      {/* Progress Header */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-2xl font-bold serif mb-1">スタンプ帳</h2>
            <p className="text-slate-500 text-sm">あなたの和牛制覇記録</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-bold text-red-600">{progress}</span>
            <span className="text-lg font-bold text-slate-400"> / 100%</span>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-red-500 to-red-600 h-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">
          {collectedStamps.length} / {wagyuList.length} ブランド制覇
        </p>
      </div>

      {/* Stamp Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wagyuList.map((wagyu) => {
          const isCollected = collectedStamps.includes(wagyu.id);
          return (
            <button
              key={wagyu.id}
              onClick={() => onSelectWagyu(wagyu.id)}
              className="group flex flex-col items-center gap-3 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-red-100"
            >
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-200 group-hover:border-red-200 transition-colors">
                {isCollected ? (
                  <>
                    <img src={wagyu.imageUrl} alt={wagyu.name} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[1px]" />
                    <div className="relative z-10 w-16 h-16 rounded-full bg-red-600/90 border-4 border-yellow-400 flex items-center justify-center transform rotate-12 shadow-lg">
                      <span className="text-white font-bold text-xs text-center leading-none">
                        済<br/>{wagyu.name}
                      </span>
                    </div>
                  </>
                ) : (
                  <span className="text-slate-300 text-3xl font-bold">?</span>
                )}
              </div>
              <div className="text-center">
                <p className="font-bold text-slate-800 text-sm group-hover:text-red-700 transition-colors">{wagyu.name}</p>
                <p className="text-xs text-slate-400">{wagyu.prefecture}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StampBook;
