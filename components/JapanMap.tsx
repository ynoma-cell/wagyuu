
import React from 'react';
import { WagyuBrand } from '../types';

interface JapanMapProps {
  wagyuList: WagyuBrand[];
  collectedStamps: string[];
  onSelectWagyu: (id: string) => void;
}

const JapanMap: React.FC<JapanMapProps> = ({ wagyuList, collectedStamps, onSelectWagyu }) => {
  return (
    <div className="relative w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center">
      {/* Background Japan Map Image */}
      <img 
        src="https://illustimage.com/photo/554.png" 
        alt="日本地図" 
        className="absolute inset-0 w-full h-full object-contain p-4 opacity-90"
      />

      {/* Pins Layer */}
      <div className="absolute inset-0">
        {wagyuList.map((wagyu) => {
          const isCollected = collectedStamps.includes(wagyu.id);
          return (
            <button
              key={wagyu.id}
              onClick={() => onSelectWagyu(wagyu.id)}
              style={{
                left: `${wagyu.coordinates.x}%`,
                top: `${wagyu.coordinates.y}%`,
              }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-125 focus:outline-none z-10"
            >
              <div className="relative">
                {/* Animation ring for uncollected pins to attract attention */}
                {!isCollected && (
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-red-400/30 animate-ping -m-0" />
                )}
                
                {/* Pin Shadow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/10 blur-[1px] rounded-full" />
                
                {/* Pin Body */}
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 transition-transform
                  ${isCollected 
                    ? 'bg-red-600 border-yellow-400 scale-110 ring-4 ring-red-200' 
                    : 'bg-white border-slate-400 group-hover:border-red-500'}
                `}>
                  {isCollected ? (
                    <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <div className="w-2.5 h-2.5 bg-slate-400 rounded-full group-hover:bg-red-500 transition-colors" />
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20">
                    <div className="bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isCollected ? 'bg-red-500' : 'bg-slate-500'}`}></span>
                      {wagyu.name} ({wagyu.prefecture})
                    </div>
                    <div className="w-2 h-2 bg-slate-900 transform rotate-45 mx-auto -mt-1 shadow-xl"></div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Legend & Stats Overlay */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl pointer-events-none z-20">
        <h3 className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-2">Collection Progress</h3>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-black text-red-600 leading-none">{collectedStamps.length}</span>
          <span className="text-sm text-slate-400 font-bold mb-0.5">/ {wagyuList.length}</span>
        </div>
        <div className="w-32 h-2 bg-slate-100 rounded-full mt-3 overflow-hidden border border-slate-50">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-1000 ease-out" 
            style={{ width: `${(collectedStamps.length / wagyuList.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none z-20">
        <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-100 text-[10px] shadow-lg flex gap-4 pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600 border border-yellow-400" />
            <span className="font-bold text-slate-700 uppercase tracking-tighter">スタンプ済み</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white border border-slate-400" />
            <span className="font-bold text-slate-700 uppercase tracking-tighter">未達成</span>
          </div>
        </div>
        
        <div className="bg-slate-900/10 px-3 py-1 rounded-full text-[9px] font-bold text-slate-500 uppercase tracking-widest">
          Illust Map View
        </div>
      </div>
    </div>
  );
};

export default JapanMap;
