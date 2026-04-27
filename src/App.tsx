import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Globe } from 'lucide-react';
import { MENU_ITEMS, PHILOSOPHY_DATA, DICTIONARY, UI_STRINGS, MENU_TRANSLATIONS } from './constants';
import { ScreenId, Language, SectionContent } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('splash');
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [language, setLanguage] = useState<Language>('qr');
  const language: Language = 'qr';

  const s = UI_STRINGS[language];

  // Expose nav globally so constants.tsx can use it
  useEffect(() => {
    (window as any).nav = (id: ScreenId) => {
        setCurrentScreen(id);
        setIsSearchOpen(false);
        window.scrollTo(0, 0);
    };
  }, []);

  const nav = (window as any).nav || ((id: ScreenId) => {
    setCurrentScreen(id);
    setIsSearchOpen(false);
    window.scrollTo(0, 0);
  });

  // Auto-set first tab if none active
  useEffect(() => {
    const currentLangData = PHILOSOPHY_DATA[language];
    const section = currentLangData[currentScreen];
    if (section && section.tabs && section.tabs.length > 0 && !activeTabs[currentScreen]) {
      setActiveTabs(prev => ({ ...prev, [currentScreen]: section.tabs[0].id }));
    }
  }, [currentScreen, activeTabs, language]);

  const currentData = PHILOSOPHY_DATA[language];
  const currentDictionary = DICTIONARY[language];

  const filteredItems = searchQuery.length > 1 
    ? [
        ...MENU_ITEMS.map((item, idx) => ({ ...item, title: MENU_TRANSLATIONS[language][idx] }))
            .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())),
        ...(Object.values(currentData) as SectionContent[])
            .filter(item => item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(item => ({ id: item.id as ScreenId, title: item.title })),
        ...(currentDictionary || [])
            .filter(item => item.term.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(item => ({ id: 'sozlik' as ScreenId, title: `📖 ${item.term}` }))
      ]
    : [];

  const getBackTarget = (id: ScreenId): ScreenId => {
    if (['intro', 'history-main', 'sozlik', 'logika', 'etika', 'estetika', 'ontologiya', 'siyasat', 'social', 'sistema'].includes(id)) return 'main-menu';
    if (['logika-tariyxi', 'logika-formal', 'logika-dialektika', 'logika-matematika'].includes(id)) return 'logika';
    if (['ontologiya-detail', 'gnoseologiya'].includes(id)) return 'ontologiya';
    if (id === 'history-timeline') return 'history-main';
    if (['shigis', 'greece', 'medieval', 'renaissance', 'modern', 'contemporary'].includes(id)) return 'history-timeline';
    if (['hindiston', 'xitoy'].includes(id)) return 'shigis';
    if (['vedalar', 'upanishadlar', 'buddizm', 'hinduizm', 'charvaka', 'jainizm'].includes(id)) return 'hindiston';
    if (['konfutsiy', 'daosizm', 'legizm'].includes(id)) return 'xitoy';
    if (['greece-pre', 'greece-classic', 'greece-hellenism'].includes(id)) return 'greece';
    if (['stoicism', 'epicurism', 'skepticism'].includes(id)) return 'greece-hellenism';
    if (['pre-milet', 'pre-pifagor', 'pre-efes', 'pre-elea', 'pre-atom'].includes(id)) return 'greece-pre';
    if (['pre-stoa', 'pre-epikur', 'pre-skeptik', 'pre-kinik'].includes(id)) return 'greece-hellenism';
    if (['med-christian', 'med-islamic'].includes(id)) return 'medieval';
    if (['med-patristic', 'med-scholastic'].includes(id)) return 'med-christian';
    if (['ren-humanism', 'ren-natural', 'ren-neoplatonism', 'ren-political'].includes(id)) return 'renaissance';
    if (['mod-systems', 'mod-enlightenment', 'mod-german'].includes(id)) return 'modern';
    
    // Philosophers
    if (['fales', 'anaksimander', 'anaksimen'].includes(id)) return 'pre-milet';
    if (id === 'pifagor') return 'pre-pifagor';
    if (id === 'geraklit') return 'pre-efes';
    if (['parmenid', 'zenon'].includes(id)) return 'pre-elea';
    if (id === 'demokrit') return 'pre-atom';
    if (id === 'zenon-stoa') return 'stoicism';
    if (id === 'epikur') return 'epicurism';
    if (id === 'pirron') return 'skepticism';
    if (id === 'diogen') return 'pre-kinik';
    if (['avgustin', 'tertullian', 'origen'].includes(id)) return 'med-patristic';
    if (id === 'sokrat' || id === 'platon' || id === 'aristotel') return 'greece-classic';
    if (id === 'akvinskiy' || id === 'anselm' || id === 'okkam') return 'med-scholastic';
    if (['farabiy', 'ibnsino', 'gazzaliy', 'ibnrushd'].includes(id)) return 'med-islamic';
    if (id === 'erasmus' || id === 'mirandola' || id === 'petrarka') return 'ren-humanism';
    if (id === 'bruno' || id === 'kopernik' || id === 'galiley') return 'ren-natural';
    if (id === 'kuzanskiy') return 'ren-neoplatonism';
    if (id === 'machiavelli' || id === 'more') return 'ren-political';
    if (['descartes', 'bacon', 'hobbes', 'spinoza', 'locke', 'leibniz'].includes(id)) return 'mod-systems';
    if (['berkeley', 'hume', 'voltaire', 'rousseau'].includes(id)) return 'mod-enlightenment';
    if (['kant', 'fixte', 'shelling', 'hegel', 'feyerbax'].includes(id)) return 'mod-german';

    return 'main-menu';
  };

  const renderContent = () => {
    if (isSearchOpen) {
        return (
            <motion.div key="search" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-[500px] p-5">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg mb-6">
                    <Search className="text-gold w-5 h-5" />
                    <input 
                        autoFocus
                        className="bg-transparent border-none outline-none text-white w-full"
                        placeholder={s.search}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <X className="text-slate-400 cursor-pointer" onClick={() => setIsSearchOpen(false)} />
                </div>
                {searchQuery.length > 1 ? (
                    <div className="flex flex-col gap-2">
                        {filteredItems.map((item, idx) => (
                            <div key={idx} className="glass-card p-4 rounded cursor-pointer" onClick={() => nav(item.id)}>
                                {item.title}
                            </div>
                        ))}
                        {filteredItems.length === 0 && <p className="text-center opacity-50">{s.no_results}</p>}
                    </div>
                ) : (
                    <p className="text-center opacity-50">{s.search_prompt}</p>
                )}
            </motion.div>
        )
    }

    switch (currentScreen) {
      case 'splash':
        return (
          <motion.div 
            key="splash"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center min-h-screen p-6 w-full max-w-[500px]"
          >
            <button 
              id="start-btn"
              onClick={() => nav('main-menu')}
              className="mt-[20vh] bg-transparent border-2 border-gold text-gold px-12 py-5 text-2xl tracking-[5px] uppercase hover:bg-gold hover:text-dark transition-colors cursor-pointer"
            >
              {s.start}
            </button>
            <div className="absolute bottom-10 left-0 right-0 text-center opacity-40 text-[10px] text-gold/80 flex flex-col gap-1 leading-tight px-6">
                <p>{s.footer_rights}</p>
                <p>{s.footer_uni}</p>
                <p>{s.footer_author}</p>
            </div>
          </motion.div>
        );

      case 'main-menu':
        return (
          <motion.div 
            key="main-menu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-[500px] p-5 flex flex-col"
          >
            <div className="flex justify-between items-center mb-5">
                <div className="text-gold font-bold cursor-pointer border border-gold px-3 py-1 rounded hover:bg-gold hover:text-dark transition-colors" onClick={() => nav('splash')}>
                  {s.back}
                </div>
                <div className="p-2 bg-gold/10 rounded-full cursor-pointer hover:bg-gold/20" onClick={() => setIsSearchOpen(true)}>
                    <Search className="text-gold w-5 h-5" />
                </div>
            </div>
            <h2 className="text-gold text-2xl text-center mb-6">{s.sections}</h2>
            <div className="flex flex-col gap-2.5">
              {MENU_ITEMS.map((item, idx) => (
                <div 
                  key={item.id}
                  id={`menu-card-${item.id}`}
                  onClick={() => nav(item.id)}
                  className="glass-card p-4 rounded cursor-pointer"
                >
                  {MENU_TRANSLATIONS[language][idx]}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-12 pb-4 text-center opacity-40 text-[10px] text-gold/80 flex flex-col gap-1 leading-tight border-t border-gold/5 w-full">
                <p>{s.footer_rights}</p>
                <p>{s.footer_uni}</p>
                <p>{s.footer_author}</p>
            </div>
          </motion.div>
        );

      case 'sozlik':
        return (
          <motion.div 
            key="sozlik"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-[500px] p-5"
          >
            <div className="text-gold font-bold mb-5 cursor-pointer border border-gold px-3 py-1 rounded inline-block hover:bg-gold hover:text-dark transition-colors" onClick={() => nav('main-menu')}>
              {s.menu}
            </div>
            <div className="content-box">
              <h2 className="text-gold text-2xl text-center mb-6">{s.dictionary_title}</h2>
              {currentDictionary.map((item, idx) => (
                <div key={idx} className="info-card">
                  <h3 className="text-gold font-bold">{item.term}</h3>
                  <p className="text-sm mt-1">{item.def}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'history-timeline':
        return (
          <motion.div 
            key="history-timeline" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-[500px] p-5"
          >
            <div className="text-gold font-bold mb-5 cursor-pointer border border-gold px-3 py-1 rounded inline-block hover:bg-gold hover:text-dark transition-colors" onClick={() => nav('history-main')}>
              {s.back}
            </div>
            <div className="content-box">
              <h2 className="text-gold text-2xl text-center mb-6">{s.timeline_title}</h2>
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => nav('shigis')}>🌏 Áyyemgi Shıǵıs</div>
                <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => nav('greece')}>🏛️ Antik dáwir</div>
              </div>
              <div className="flex flex-col gap-2.5 mt-4">
                <div className="glass-card p-4 rounded cursor-pointer" onClick={() => nav('medieval')}>🕌 Orta ásirler</div>
                <div className="glass-card p-4 rounded cursor-pointer" onClick={() => nav('renaissance')}>🎨 Oyanıw dáwiri</div>
                <div className="glass-card p-4 rounded cursor-pointer" onClick={() => nav('modern')}>🔬 Jańa dáwir</div>
                <div className="glass-card p-4 rounded cursor-pointer" onClick={() => nav('contemporary')}>🏙️ Házirgi zaman</div>
              </div>
            </div>
          </motion.div>
        );

      default:
        const section = currentData[currentScreen];
        const backTarget = getBackTarget(currentScreen);

        if (!section) return (
          <div className="flex flex-col items-center justify-center p-10 text-center min-h-screen">
             <p className="text-xl">{s.soon}</p>
             <button className="mt-6 border border-gold px-6 py-3 rounded hover:bg-gold hover:text-dark transition-colors cursor-pointer" onClick={() => nav(backTarget)}>{s.return}</button>
          </div>
        );

        return (
          <motion.div 
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-[500px] p-5 flex flex-col"
          >
            <div className="text-gold font-bold mb-5 cursor-pointer border border-gold px-3 py-1 rounded inline-block self-start hover:bg-gold hover:text-dark transition-colors" onClick={() => nav(backTarget)}>
              {s.back}
            </div>
            <div className="content-box">
                <h2 className="text-gold text-2xl text-center mb-5">{section.title}</h2>
                {section.tabs && (
                  <div className="flex gap-1.5 mb-5 overflow-x-auto w-full pb-2 scrollbar-hide">
                    {section.tabs.map(tab => (
                      <button 
                        key={tab.id}
                        onClick={() => setActiveTabs(prev => ({ ...prev, [currentScreen]: tab.id }))}
                        className={`tab-btn whitespace-nowrap px-4 py-2 ${activeTabs[currentScreen] === tab.id ? 'active' : ''}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}
                <div className="min-h-[200px] animate-in fade-in duration-500">
                  {section.tabs 
                    ? section.tabs.find(t => t.id === activeTabs[currentScreen])?.content
                    : section.content
                  }
                </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div id="app-container" className="flex justify-center min-h-screen w-full bg-dark overflow-x-hidden">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
}
