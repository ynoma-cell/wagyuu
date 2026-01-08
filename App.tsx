
import React, { useState, useEffect, useMemo } from 'react';
import { AppState, ViewType } from './types';
import { WAGYU_DATA } from './constants';
import JapanMap from './components/JapanMap';
import WagyuDetail from './components/WagyuDetail';
import StampBook from './components/StampBook';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem('wagyu-app-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.collectedStamps)) {
          return {
            collectedStamps: parsed.collectedStamps,
            currentView: (parsed.currentView as ViewType) || 'MAP',
            selectedWagyuId: parsed.selectedWagyuId || null
          };
        }
      }
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
    }
    return {
      collectedStamps: [],
      currentView: 'MAP' as ViewType,
      selectedWagyuId: null
    };
  });

  useEffect(() => {
    localStorage.setItem('wagyu-app-state', JSON.stringify(state));
  }, [state]);

  const toggleStamp = (id: string) => {
    setState(prev => ({
      ...prev,
      collectedStamps: prev.collectedStamps.includes(id)
        ? prev.collectedStamps.filter(sid => sid !== id)
        : [...prev.collectedStamps, id]
    }));
  };

  const setView = (view: ViewType) => {
    setState(prev => ({ ...prev, currentView: view }));
  };

  const selectWagyu = (id: string) => {
    setState(prev => ({
      ...prev,
      currentView: 'DETAIL',
      selectedWagyuId: id
    }));
  };

  const selectedWagyu = useMemo(() => 
    WAGYU_DATA.find(w => w.id === state.selectedWagyuId),
    [state.selectedWagyuId]
  );

  return (
    <div className="min-h-screen pb-24 md:pb-0 md:pt-24 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <header className="py-8 flex flex-col items-center gap-2">
        <div className="bg-red-600 text-white px-3 py-1 rounded-sm text-xs font-bold tracking-widest">WAGYU STAMP RALLY</div>
        <h1 className="text-3xl sm:text-4xl font-bold serif text-slate-800 tracking-tighter">和牛スタンプラリー</h1>
        <p className="text-slate-500 text-sm">日本が誇る至高の味を、すべて制覇せよ。</p>
      </header>

      {/* Main Content Area */}
      <main className="mb-12">
        {state.currentView === 'MAP' && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
              <h2 className="text-xl font-bold serif mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                和牛分布図
              </h2>
              <JapanMap 
                wagyuList={WAGYU_DATA} 
                collectedStamps={state.collectedStamps} 
                onSelectWagyu={selectWagyu} 
              />
            </div>
          </div>
        )}

        {state.currentView === 'DETAIL' && selectedWagyu && (
          <WagyuDetail 
            wagyu={selectedWagyu}
            isCollected={state.collectedStamps.includes(selectedWagyu.id)}
            onToggleStamp={toggleStamp}
            onBack={() => setView('MAP')}
          />
        )}

        {state.currentView === 'STAMP_BOOK' && (
          <StampBook 
            wagyuList={WAGYU_DATA}
            collectedStamps={state.collectedStamps}
            onSelectWagyu={selectWagyu}
          />
        )}

        {state.currentView === 'LIST' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-right-4 duration-500">
             {WAGYU_DATA.map((wagyu) => (
                <button
                  key={wagyu.id}
                  onClick={() => selectWagyu(wagyu.id)}
                  className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex gap-4 items-center hover:shadow-md transition-all text-left"
                >
                  <img src={wagyu.imageUrl} className="w-20 h-20 rounded-2xl object-cover" alt={wagyu.name} />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-red-600 font-bold">{wagyu.prefecture}</span>
                      {state.collectedStamps.includes(wagyu.id) && (
                        <span className="bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded-full font-bold">獲得済</span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">{wagyu.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{wagyu.description}</p>
                  </div>
                </button>
             ))}
          </div>
        )}
      </main>

      {/* Navigation - Sticky Bottom for Mobile, Float for Desktop */}
      <nav className="fixed bottom-0 left-0 right-0 md:top-8 md:bottom-auto md:bg-transparent bg-white/80 backdrop-blur-xl border-t md:border-t-0 border-slate-200 py-3 px-6 z-50 flex justify-center">
        <div className="flex bg-slate-900/90 text-white rounded-full p-1 shadow-2xl items-center gap-1">
          <button 
            onClick={() => setView('MAP')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${state.currentView === 'MAP' ? 'bg-red-600 text-white' : 'hover:bg-white/10 text-slate-300'}`}
          >
            地図
          </button>
          <button 
            onClick={() => setView('LIST')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${state.currentView === 'LIST' ? 'bg-red-600 text-white' : 'hover:bg-white/10 text-slate-300'}`}
          >
            一覧
          </button>
          <button 
            onClick={() => setView('STAMP_BOOK')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${state.currentView === 'STAMP_BOOK' ? 'bg-red-600 text-white' : 'hover:bg-white/10 text-slate-300'}`}
          >
            記録
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
