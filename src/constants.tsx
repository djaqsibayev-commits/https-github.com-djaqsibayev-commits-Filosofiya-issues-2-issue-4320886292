import React from 'react';
import { SectionContent, Language } from './types';

export const UI_STRINGS = {
  qr: {
    start: 'Filosofiya',
    back: '← Arqaǵa',
    menu: '← Menyuǵa',
    search: 'Qıdırıw...',
    search_prompt: 'Keminde 2 hárip jazıń',
    no_results: 'Natiyje tabılmadı',
    sections: 'Bólimler',
    footer_rights: '© 2026 Barlıq huquqlar qorǵalǵan',
    footer_uni: 'Qaraqalpaq Mámleketlik Universiteti',
    footer_author: 'Jaratıwshı: Jaqsibayev.D',
    soon: 'Tez arada qosıladı...',
    return: 'Qaytıw',
    dictionary_title: '📖 Filosofiya sózligi',
    history_title: 'Filosofiya tariyxı',
    timeline_title: 'Filosofiya dáwirleri',
    timeline_btn: '📜 Filosofiya dáwirlerine ótiw →'
  }
};

export const MENU_TRANSLATIONS = {
  qr: [
    '✨ 1. Filosofiyaǵa kirisiw',
    '🏛️ 2. Filosofiya tariyxı',
    '📖 3. Filosofiya sózligi',
    '🧩 4. Logika',
    '⚖️ 5. Etika',
    '🎨 6. Estetika',
    '🔭 7. Ontologiya',
    '🏛️ 8. Siyasat filosofiyası',
    '🌍 9. Sociallıq filosofiya',
    '⚙️ 10. Sistemalı analiz',
  ]
};

export const MENU_ITEMS = [
  { id: 'intro', title: '✨ 1. Filosofiyaǵa kirisiw' },
  { id: 'history-main', title: '🏛️ 2. Filosofiya tariyxı' },
  { id: 'sozlik', title: '📖 3. Filosofiya sózligi' },
  { id: 'logika', title: '🧩 4. Logika' },
  { id: 'etika', title: '⚖️ 5. Etika' },
  { id: 'estetika', title: '🎨 6. Estetika' },
  { id: 'ontologiya', title: '🔭 7. Ontologiya' },
  { id: 'siyasat', title: '🏛️ 8. Siyasat filosofiyası' },
  { id: 'social', title: '🌍 9. Sociallıq filosofiya' },
  { id: 'sistema', title: '⚙️ 10. Sistemalı analiz' },
];

export const PHILOSOPHY_DATA: Record<Language, Record<string, SectionContent>> = {
  qr: {
    intro: {
    id: 'intro',
    title: 'Filosofiyaǵa kirisiw',
    tabs: [
      {
        id: 't1',
        label: 'Predmeti',
        content: (
          <>
            <p><b className="text-gold">Filosofiya</b> — bul barlıq ilimlerdiń tamırı hám barlıq bilimlerdiń baslanǵıshı. Onıń predmeti — <i className="text-gold">"Adam — Dúnya"</i> sistemasındaǵı eń ulıwmalıq nızamlılıqlar, bolmıs hám oylawdıń tiykarǵı printsipleri bolıp esaplanadı.</p>
            <div className="info-card mt-3">
              <h3>❓ Tiykarǵı sorawlar</h3>
              <ul className="list-disc pl-5">
                <li>Dúnya qalay dúzilgen?</li>
                <li>Haqıyqattı biliw múmkinbe?</li>
                <li>Inson ómiriniń mánisi nede?</li>
              </ul>
            </div>
          </>
        )
      },
      {
        id: 't2',
        label: 'Kózqaraslar',
        content: (
          <div className="space-y-3">
            <p>Adamzat tariyxında dúnyanı túsiniwdiń úsh tiykarǵı forması bar:</p>
            <div className="info-card">
              <h3>🌟 Mifologiyalıq</h3>
              <p>Dúnyanı obrazlar, dástúrler hám fantastikalıq kúshler arqalı túsindiriw.</p>
            </div>
            <div className="info-card">
              <h3>⛪ Diniy</h3>
              <p>Muqaddes kúshke, Qudaydıń barlıǵına hám ilahiy haqqıyqatqa isenim.</p>
            </div>
            <div className="info-card">
              <h3>🧠 Filosofiyalıq</h3>
              <p>Logika, ratsionallıq, dálil hám erkin pikirlewge tiykarlanǵan kózqaras.</p>
            </div>
          </div>
        )
      },
      {
        id: 't3',
        label: 'Funksiyalar',
        content: (
          <div className="grid grid-cols-1 gap-2">
            <div className="info-card"><b>Dúnyaya kózqaraslıq:</b> Adamda dúnya haqqında birpútin suwret qáliplestiriw.</div>
            <div className="info-card"><b>Metodologiyalıq:</b> Basqa ilimler ushın izertlew jolların hám printsiplerin belgilew.</div>
            <div className="info-card"><b>Aksiologiyalıq:</b> Qadriyatlar (jaxsı/jaman, gózzal/xunık) haqqındaǵı tálimot.</div>
          </div>
        )
      }
    ]
  },
  'history-main': {
    id: 'history-main',
    title: '🏛️ Filosofiya tariyxı',
    content: (
      <div className="space-y-4">
        <p className="text-justify">
          Filosofiya tariyxı — bul adamzat aqıl-oyınıń rawajlanıw jolı. Ol áyyemgi dáwirlerden baslap házirgi zamanǵa shekemgi bolǵan eń tereń ideyalardı, mekteplerdi hám danıshpánlardı óz ishine aladı.
        </p>
        <div className="info-card">
          <h3 className="font-bold text-gold">🌍 Ne ushın tariyxtı úyrenemiz?</h3>
          <p className="text-sm">
            Ótmishte qáliplesken ideyalar búgingi kúndegi ilim-pánniń, mádeniyattıń hám jámiyetlik múnásibetlerdiń tıykarı bolıp xizmet etedi. Tariyxtı biliw — bul házirgi zamanı túsiniwdiń birden-bir jolı.
          </p>
        </div>
        <button 
          className="w-full mt-6 bg-gold/10 border border-gold text-gold p-5 rounded-2xl font-bold cursor-pointer hover:bg-gold/20 transition-all flex items-center justify-center gap-3 shadow-lg group"
          onClick={() => (window as any).nav?.('history-timeline')}
        >
          {UI_STRINGS.qr.timeline_btn}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    )
  },
  logika: {
    id: 'logika',
    title: '🧩 Logika (Oylaw ilimi)',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-gold/10 border border-gold p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-gold/20 transition-all group" onClick={() => (window as any).nav?.('logika-tariyxi')}>
            <div>
              <h3 className="text-xl font-bold text-gold">🕰️ Logika tariyxı</h3>
              <p className="text-xs opacity-60">Antik dávirden házirgi zamanǵa shekem</p>
            </div>
            <div className="text-gold opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
          <div className="bg-gold/10 border border-gold p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-gold/20 transition-all group" onClick={() => (window as any).nav?.('logika-formal')}>
            <div>
              <h3 className="text-xl font-bold text-gold">⚖️ Formal logika</h3>
              <p className="text-xs opacity-60">Oylaw formaları hám nızamları</p>
            </div>
            <div className="text-gold opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
          <div className="bg-gold/10 border border-gold p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-gold/20 transition-all group" onClick={() => (window as any).nav?.('logika-dialektika')}>
            <div>
              <h3 className="text-xl font-bold text-gold">🌀 Dialektikalıq logika</h3>
              <p className="text-xs opacity-60">Rawajlanıw hám háreket logikası</p>
            </div>
            <div className="text-gold opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
          <div className="bg-gold/10 border border-gold p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-gold/20 transition-all group" onClick={() => (window as any).nav?.('logika-matematika')}>
            <div>
              <h3 className="text-xl font-bold text-gold">💻 Matematikalıq logika</h3>
              <p className="text-xs opacity-60">Simvollıq logika hám algoritmller</p>
            </div>
            <div className="text-gold opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
        </div>

        <div className="info-card bg-white/5 border-white/10 mt-6">
          <h3 className="font-bold text-gold mb-2">💡 Logikanıń áhmiyeti</h3>
          <p className="text-sm leading-relaxed">
            Logika — bul haqıyqattıń "tárezisi". Ol bizge durıs hám qáte pikirlerdi bir-birinen ajıratıwǵa, dálilli gápiriwge hám oylawımızdaǵı qátelerden qutılıwǵa járdem beredi. Házirgi zamanda logika informatika, programmalastırıw hám Jasalma Intellektniń tıykarı esaplanadı.
          </p>
        </div>
      </div>
    )
  },

  'logika-tariyxi': {
    id: 'logika-tariyxi',
    title: '🕰️ Logika tariyxı',
    tabs: [
      {
        id: 'lt1',
        label: 'Baslanıwı',
        content: (
          <div className="space-y-4 text-justify">
            <p>Logikalıq oylaw elementleri áyyemgi Hindistan (Nyaya mektebi) hám áyyemgi Qıtayda payda bolǵan. Biraq, onı turaqlı ilim retinde Áyyemgi Gretsiyada <b>Aristotel</b> qáleplestirdi.</p>
            <div className="info-card">
              <h3 className="font-bold">🏛️ Aristotel (m.á. 384–322)</h3>
              <p>Ol logikanı barlıq ilimlerdiń quralı ("Organon") dep ataǵan. Oylawdıń tiykarǵı nızamların hám syllogizmler teoriyasın islep shıqqan.</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">🕌 Orta ásirler: Farabiy</h3>
              <p>Ábu Nasir al-Farabiy Aristotel logikasın Shıǵısta rawajlandırdı. Onıń miynetleri tuwrı pikirlewdiń "tárezi" (mizan) dep qaralǵan.</p>
            </div>
          </div>
        )
      },
      {
        id: 'lt2',
        label: 'Jańa dáwir',
        content: (
          <div className="space-y-4 text-justify">
            <p>XV-XVII ásirlerde pánniń rawajlanıwı menen logikada jańa baǵdarlar payda boldı.</p>
            <div className="info-card">
              <h3 className="font-bold">🔬 Frensis Bekon</h3>
              <p>Tájiriybege hám baqlawǵa tiykarlanǵan <b>Induktsion</b> usıldı alǵa súrdi. Ol "Bilim — kùsh" degen ideyanıń avtorı.</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">📐 Rene Dekart</h3>
              <p>Matematikaǵa tiykarlanǵan <b>Deduktsion</b> usıldı rawajlandırdı hám ratsionallıqtı tıykarǵı orınǵa qoydı.</p>
            </div>
          </div>
        )
      }
    ]
  },

  'logika-formal': {
    id: 'logika-formal',
    title: '⚖️ Formal logika',
    tabs: [
      {
        id: 'lf1',
        label: 'Formalar',
        content: (
          <div className="space-y-4">
            <p>Formal logika — oylawdıń ishki dúzilisin, onıń maǵınasınan ajıratılǵan haldaǵı formaların úyrenedi.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">1. Túsinik (Ponyatiye)</h3>
              <p>Zattıń eń áhmiyetli belgilerin oylawda sáwlelediriw (mısalı: "Bilim", "Ádalet").</p>
            </div>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">2. Pikir (Suzhdeniye)</h3>
              <p>Bir nárse haqqında tastıqlaw yamasa biykarlaw (mısalı: "Sut — aq").</p>
            </div>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">3. Oy-qorıtındı (Umozaklyucheniye)</h3>
              <p>Belgili pikirlerden jańa bilimdi keltirip shıǵarıw (Logikanıń eń joqarı forması).</p>
            </div>
          </div>
        )
      },
      {
        id: 'lf2',
        label: 'Nızamlar',
        content: (
          <div className="space-y-3">
            <p className="font-bold text-gold">Aristoteldiń 4 tiykarǵı nızamı:</p>
            <div className="info-card"><b>1. Ayniyat:</b> Pikir barısında hár bir túsinik bir mánege iye bolıwı shart. (A=A)</div>
            <div className="info-card"><b>2. Zıtlıq:</b> Eki bir-birin biykarlawshı pikir bir waqıtta "durıs" bola almaydı.</div>
            <div className="info-card"><b>3. Úshinshisi joq:</b> Eki qarama-qarsı pikirdiń birewi mıtlaq tuwrı, úshinshi jol joq.</div>
            <div className="info-card"><b>4. Jeterli tiykar:</b> Hár bir haqıyqıy dep esaplanǵan pikir isbatlanǵan bolıuı shart.</div>
          </div>
        )
      }
    ]
  },

  'logika-dialektika': {
    id: 'logika-dialektika',
    title: '🌀 Dialektikalıq logika',
    tabs: [
      {
        id: 'ld1',
        label: 'Rawajlanıw',
        content: (
          <div className="space-y-4">
            <p>Dialektikalıq logika — dúnyanı hám oylawdı turaqlı hárekette, rawajlanıuda hám ishki qarama-qarsılıqlarda úyrenedi.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">🌀 Tiykarǵı nızamlar:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><b>Qarama-qarsılıqlar birligi hám gúresi:</b> Hár qanday rawajlanıwdıń deregi — ishki qarsılıqlarda.</li>
                <li><b>San ózgerisleriniń sapa ózgerislerine ótiwi:</b> Kishi ózgerisler jıynalıp, jańa sapadaǵı nársege alıp keledi.</li>
                <li><b>Biykarlawdı biykarlaw:</b> Rawajlanıwdıń spirallıq baǵdarın kórsetedi.</li>
              </ul>
            </div>
            <p className="italic text-slate-400">Bul baǵdar Hegel hám Marks tárepinen sistemalastırılǵan.</p>
          </div>
        )
      }
    ]
  },

  'logika-matematika': {
    id: 'logika-matematika',
    title: '💻 Matematikalıq logika',
    tabs: [
      {
        id: 'lm1',
        label: 'Simvollar',
        content: (
          <div className="space-y-4">
            <p>Logikalıq operatsiyalardı matematikalıq belgiler hám formulalar járdeminde úyreniwshi házirgi zaman ilimi.</p>
            <div className="info-card">
              <h3 className="font-bold">💻 Tıykarshı: G. Leybnits</h3>
              <p>Ol "oylawdı esaplawǵa aylandırıw" ideyasın alǵa súrgen hám simvollıq logikanıń tamırın salǵan.</p>
            </div>
            <div className="info-card bg-blue-500/5">
              <h3 className="font-bold">⚡ Bul algebrası</h3>
              <p>Logikalıq operatsiyalar (AND, OR, NOT) házirgi zaman kompyuterleriniń islew tıykarın quraydı.</p>
            </div>
            <div className="bg-gold/10 p-4 rounded-lg border border-gold/30">
              <h4 className="font-bold">🤖 Jasalma Intellekt (AI):</h4>
              <p className="text-sm">Matematikalıq logika — bul programmalastırıw tilleri hám Jasalma Intellektniń tıykarı bolıp esaplanadı.</p>
            </div>
          </div>
        )
      }
    ]
  },

  etika: {
    id: 'etika',
    title: 'Etika',
    tabs: [
      {
        id: 'e1',
        label: 'Predmeti',
        content: (
          <>
            <p><b>Etika</b> — moral hám axlaqtı úyreniwshi filosofiya bólimi. Ol "Dúnya qanday bolıwı kerek?" hám "Qalay jasawım kerek?" degen sorawlarǵa juwap izleydí.</p>
            <p>Etikanıń tiykarǵı maqseti — <b className="text-gold">jaramlı jasawdıń</b> printsiplerini tabıw hám insandı baxıtqa jetkelew.</p>
            <hr className="border-gold/20 my-4" />
            <p>Etikanıń tiykarǵı sorawları:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Jaxsılıq hám jamanshılıq neme?</li>
              <li>Adam baxtı nede hám oǵan qalay erisiledi?</li>
              <li>Ádalet neme hám ádalatlı jámiyet qanday bar boladı?</li>
              <li>Azatlıq hám mánisli ómir baylanısı.</li>
            </ul>
          </>
        )
      },
      {
        id: 'e2',
        label: 'Kategoriyalar',
        content: (
          <div className="space-y-2">
            <div className="info-card"><h3>💎 Jaxsılıq (Dobro)</h3><p>Adamzat qadriyatlarınıń eń joqarǵı forması, jámiyetke paydalı bolǵan barlıq ámeller.</p></div>
            <div className="info-card"><h3>🌑 Jamanshılıq (Zlo)</h3><p>Adamgershilikke zıt, qıyratıwshı hám ziyanlı kúshler hám ámeller.</p></div>
            <div className="info-card"><h3>⚖️ Ádalet</h3><p>Hár bir adamǵa onıń mıynetine, qábiletine hám huqıqına sáykes múnásibette bolıw.</p></div>
            <div className="info-card"><h3>🌈 Baxıt</h3><p>Ruwxıy tolıqlıq háleti, mánisli jasawdan kelip shıǵatuǵın qanaat.</p></div>
            <div className="info-card"><h3>✊ Parız</h3><p>Jámiyet hám óz vijdanı aldındaǵı juwapkershilikti seziw hám orınlaw.</p></div>
          </div>
        )
      },
      {
        id: 'e3',
        label: 'Baǵdarlar',
        content: (
          <div className="space-y-3">
            <div className="info-card">
              <h3>🏺 Evdemonizm (Aristotel)</h3>
              <p>Jasawdıń maqseti — baxıtqa erisiw (eydemoniya). Baxıt — faziletli hám aqıllı jasawdıń nátiyjesi.</p>
            </div>
            <div className="info-card">
              <h3>⚡ Deontologiya (I. Kant)</h3>
              <p>Ámellerdiń nátiyjesi emes, bálki niyati hám parızı tiykarǵı orında. "Kategoriyalıq imperativ" — óziń kútken hámmege tútılgan qaǵıyda boyınsha is tut.</p>
            </div>
            <div className="info-card">
              <h3>🌿 Utilitarizm (Bentam, Mill)</h3>
              <p>Maqset — eń kóp adamǵa eń kóp payda hám baxıt keltiriw.</p>
            </div>
            <div className="info-card">
              <h3>🧘 Stoitsizm</h3>
              <p>Ruwxıy beriklik, ishki tınıshlıq hám tábiyat nızamlarına boysınǵan halda baxıt tabıw.</p>
            </div>
          </div>
        )
      }
    ]
  },
  estetika: {
    id: 'estetika',
    title: 'Estetika',
    tabs: [
      {
        id: 'es1',
        label: 'Predmeti',
        content: (
          <>
            <p><b>Estetika</b> — gózzallıqtı, sańattı hám estetikalıq tájiriybenı úyreniwshi filosofiya bólimi. "Estetika" sózi grek tilinen alınǵan — <i>aisthetikos</i> (sezimlik tiykar).</p>
            <p>Estetikanı filosofiya bólimi retinde <b className="text-gold">Aleksandr Baumgarten</b> (1750) tiykarlaǵan.</p>
            <hr className="border-gold/20 my-4" />
            <p>Tiykarǵı sorawlar:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gózzallıq obyektiv pe yamasa subyektiv pe?</li>
              <li>Sańat adamzat ushın nege kerek?</li>
              <li>Sańat shıǵarmasınıń qadriyatın ne belgileydi?</li>
            </ul>
          </>
        )
      },
      {
        id: 'es2',
        label: 'Kategoriyalar',
        content: (
          <div className="grid grid-cols-1 gap-2">
            <div className="info-card"><h3>🌸 Gózzallıq (Krasota)</h3><p>Adamda ruwxıy lezzet beretuǵın, garmonikalıq hám kámil nárse.</p></div>
            <div className="info-card"><h3>🏔️ Ulıwmalıq (Vozvıshennoe)</h3><p>Kúsh-qudireti, kólemi yamasa tereńligi menen insandı hayran qaldıratuǵın nárse (mısalı: okean, juldızlar).</p></div>
            <div className="info-card"><h3>🎭 Tragizm</h3><p>Qaysılıqlı jaǵdaylar hám olardıń sheshimi arqalı adamda ruwxıy tazalanıw (katarsis) oyatıwı.</p></div>
            <div className="info-card"><h3>🤡 Komizm</h3><p>Ómirden artda qalǵan, xunık yaki qarama-qarshı qubılıslardı kúlki arqalı kórsetiw.</p></div>
          </div>
        )
      },
      {
        id: 'es3',
        label: 'Sańat túrleri',
        content: (
          <div className="space-y-2">
            <p>Sańat — bul haqqıyqatlıqtı obrazlar arqalı sáwlelendiriw forması:</p>
            <div className="grid grid-cols-2 gap-2">
              <span className="badge">🎸 Musıqa</span>
              <span className="badge">🎨 Súwret</span>
              <span className="badge">📖 Ádebiyat</span>
              <span className="badge">🎭 Teatr</span>
              <span className="badge">🏛️ Arxitektura</span>
              <span className="badge">🎬 Kino</span>
            </div>
            <p className="text-sm italic mt-2">Hár bir sańat túri estetikalıq qadriyatlardı ózine tán quraldar (dawıs, reń, sóz) arqalı jetkerip beredi.</p>
          </div>
        )
      }
    ]
  },
  ontologiya: {
    id: 'ontologiya',
    title: 'Bolmıs hám Bilim tálimotı',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-indigo-500/10 border border-indigo-400 p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-indigo-500/20 transition-all group" onClick={() => (window as any).nav?.('ontologiya-detail')}>
            <div>
              <h3 className="text-xl font-bold text-indigo-400">🌌 Ontologiya</h3>
              <p className="text-xs opacity-60">Bolmıs haqqındaǵı tálimot</p>
            </div>
            <div className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-400 p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-emerald-500/20 transition-all group" onClick={() => (window as any).nav?.('gnoseologiya')}>
            <div>
              <h3 className="text-xl font-bold text-emerald-400">🧠 Gnoseologiya</h3>
              <p className="text-xs opacity-60">Bilim haqqındaǵı tálimot</p>
            </div>
            <div className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
        </div>
        <div className="info-card bg-white/5 border-white/10 mt-6">
          <p className="text-sm leading-relaxed text-justify">
            Filosofiyanıń bul eki bólimi dúnyanı hám onı tanıw múmkinshiliklerin úyrenedi. <b>Ontologiya</b> "Dúnya qalay dúzilgen?" degen sorawǵa juwap izlese, <b>Gnoseologiya</b> "Biz dúnyanı qalay tanıymız?" degen sorawdı talqılaydı.
          </p>
        </div>
      </div>
    )
  },

  'ontologiya-detail': {
    id: 'ontologiya-detail',
    title: '🌌 Ontologiya (Bolmıs)',
    tabs: [
      {
        id: 'od1',
        label: 'Bolmıs',
        content: (
          <div className="space-y-4 text-justify">
            <p><b>Ontologiya</b> (grekche "on" — bolmıs, "logos" — tálimot) — bolmıs hám barlıq haqqındaǵı filosofiyalıq bólim. Ol dúnyanıń eń tiykarların úyrenedi.</p>
            <div className="info-card">
              <h3 className="font-bold">💎 Substantsiya</h3>
              <p>Bul óz-ózinen bar bolǵan, jasawı ushın basqa nársege mútáj bolmaǵan nárse. Dúnyanıń "tiykarǵı gerpishi".</p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="info-card border-l-gold"><b>Monizm:</b> Dúnyanıń tiykary tek bir (ya materia, ya ruh).</div>
              <div className="info-card border-l-gold"><b>Dualizm:</b> Materia hám ruh — eki parallel tiykar.</div>
              <div className="info-card border-l-gold"><b>Pluralizm:</b> Dúnya kóp sanlı túrli elementlerden ibarat.</div>
            </div>
          </div>
        )
      },
      {
        id: 'od2',
        label: 'Materia',
        content: (
          <div className="space-y-4 text-justify">
            <p><b>Materia</b> — barlıq obyektiv reallıq. Ol adam sanasınan tısqarıda bar hám biz oǵan sezim organlarımız arqalı tásir etemiz.</p>
            <div className="info-card bg-white/5">
              <h3 className="font-bold">✨ Materiyanıń jasaw formaları:</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><b>Háreket:</b> Materiyanıń turaqlı jaǵdayı.</li>
                <li><b>Keńislik:</b> Nárselerdiń bir-birine salıstırmalı ornalasıwı hám kólemi.</li>
                <li><b>Waqıt:</b> Qubılıslardıń dawamlılıǵı hám ketma-ketligi.</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },

  gnoseologiya: {
    id: 'gnoseologiya',
    title: '🧠 Gnoseologiya (Bilim)',
    tabs: [
      {
        id: 'gn1',
        label: 'Baslanıwı',
        content: (
          <div className="space-y-4 text-justify">
            <p><b>Gnoseologiya</b> (grekche "gnosis" — bilim) — bilimdi tanıw processin, onıń múmkinshiliklerin hám shegaraların úyrenedi.</p>
            <div className="info-card">
              <h3 className="font-bold">👂 Sezimlik bilim (Emperizm)</h3>
              <p>Sezim organları (kóriw, esitiw hám t.b.) arqalı alınǵan dáslepki maǵlıwmatlar. Tıykarǵı formaları: tuyıw, qabıllaw, sáwleleniw.</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">💡 Ratsionallıq bilim (Ratsionalizm)</h3>
              <p>Aqıl-oy járdeminde logikalıq oylaw. Tıykarǵı formaları: túsinik, pikir, oy-qorıtındı.</p>
            </div>
          </div>
        )
      },
      {
        id: 'gn2',
        label: 'Haqıyqat',
        content: (
          <div className="space-y-4 text-justify">
            <p><b>Haqıyqat</b> — obyektiv reallıqtıń sanamızdaǵı durıs, dál sáwleleniwi.</p>
            <div className="info-card border-l-emerald-400">
              <h3 className="font-bold">📍 Absolyut haqıyqat</h3>
              <p>Mıtlaq, tolıq hám ózgermeytuǵın bilim. (Mısalı: matematika nızamları).</p>
            </div>
            <div className="info-card border-l-emerald-400">
              <h3 className="font-bold">📐 Salıstırmalı haqıyqat</h3>
              <p>Belgili bir waqıtta hám sharayatta tolıq bolmaǵan, keleshekte anıqlatılatuǵın bilim.</p>
            </div>
            <p className="text-sm italic">Haqıyqattı tekseriwdiń eń tiykarlı kriteriyası (ólshemi) — bul <b>tájiriybe (praktika)</b>.</p>
          </div>
        )
      }
    ]
  },
  siyasat: {
    id: 'siyasat',
    title: 'Siyasat filosofiyası',
    tabs: [
       { 
         id: 'sp1', 
         label: 'Tiykarlar', 
         content: (
           <>
            <p><b>Siyasat filosofiyası</b> — hákimiyattıń, mámlekettiń, ádilliktiń hám azatlıqtıń eń ulıwmalıq tálimotı.</p>
            <div className="info-card">
              <h3>❓ Tiykarǵı sorawlar:</h3>
              <ul className="list-disc pl-5">
                <li>Mámleket ne ushın kerek hám onıń kelip shıǵıwı nede?</li>
                <li>Hákimiyattıń tiykary nede (legitimlik)?</li>
                <li>Ideal jámiyetlik tártip qanday bolıwı kerek?</li>
              </ul>
            </div>
           </>
         )
       },
       { id: 'sp2', label: 'Mámleket', content: (
         <div className="space-y-2">
           <div className="info-card"><h3>🏺 Platon</h3><p>Ideal mámlekette filosoflar basqarıwı, jauıngerler qorǵawı, miynetkeshler nárseler islep shıǵarıwı kerek.</p></div>
           <div className="info-card"><h3>⚖️ Aristotel</h3><p>Mámlekettiń eń jaqsı forması — orta tabaqa basqaratın "politeya".</p></div>
           <div className="info-card"><h3>📜 N. Makiavelli</h3><p>Siyasat hám moral — bir-birinen bólek nárseler. Maqset ushın barlıq jollar tuwrı (Makiavellizm).</p></div>
           <div className="info-card"><h3>🕊️ J. Lokk</h3><p>Mámleket adamlar ortasındaǵı shártnama tiykarında, olardıń tábiyiy huquqların qorǵaw ushın dúziledi.</p></div>
         </div>
       )},
       { id: 'sp3', label: 'Huquq', content: (
         <div className="info-card">
           <h3>⚖️ Huquqıy mámleket</h3>
           <p>Barlıq adamlar qanun aldında teń hám hákimiyat qanun shegarasında islewi shart. Tıykarǵı belgi — hákimiyattıń bóliniwi (Nızam shıǵarıwshı, Atqarıwshı, Sud).</p>
         </div>
       )}
    ]
  },
  social: { 
    id: 'social', 
    title: 'Sociallıq filosofiya', 
    tabs: [
      { 
        id: 'sf1', 
        label: 'Jámiyet', 
        content: (
          <>
            <p><b>Sociallıq filosofiya</b> — jámiyetti, onıń qurılısın hám rawajlanıw nızamların úyreleydi.</p>
            <div className="info-card">
              <h3>🏢 Jámiyetlik sistemalar:</h3>
              <ul className="list-disc pl-5">
                <li>Ekonomikalıq (materiallıq baylıqlar ishlep shıǵarıw)</li>
                <li>Siyasıy (basqarıw hákimiyatı)</li>
                <li>Mádaniy-ruwxıy (bilim, qadriyatlar)</li>
                <li>Sociallıq (toparlar, shańaraq, múnásibetler)</li>
              </ul>
            </div>
          </>
        ) 
      },
      {
        id: 'sf2',
        label: 'Rawajlanıw',
        content: (
          <div className="info-card">
            <h3>📈 Progress hám Regress</h3>
            <p>Jámiyet rawajlanıwı — turaqlı emes, ol tsikllı (Viko, Shpengler) yaki tuwrı sızıqlı (Marks) bolıwı múmkin. Házirgi zamanda globalizatsiya eń áhmiyetli protsess bolıp esaplanadı.</p>
          </div>
        )
      }
    ] 
  },
  sistema: { 
    id: 'sistema', 
    title: 'Sistemalı analiz', 
    tabs: [
      { 
        id: 'sa1', 
        label: 'Sistema', 
        content: (
          <>
            <p><b>Sistema</b> — óz-ara baylanıslı elementlerden quralǵan, belgilı bir maqsetke iye bolǵan pútinlik.</p>
            <div className="info-card">
              <h3>🛠️ Tiykarǵı qásiyetler:</h3>
              <ul className="list-disc pl-5">
                <li><b>Ierarchiya:</b> Kishi sistemalar úlken sistema ishindı boladı.</li>
                <li><b>Baylanıs:</b> Bir element ózgerse, qalǵanları da ózgeredi.</li>
                <li><b>Emerjentlik:</b> Sistema pútin halında onıń bóleklerinde joq jańa qásiyetke iye boladı.</li>
              </ul>
            </div>
          </>
        ) 
      },
      {
        id: 'sa2',
        label: 'Metodika',
        content: (
          <div className="info-card">
            <h3>🧩 Analiz hám Sintez</h3>
            <p>Analiz — sistemani bóleklerge ajıratıp úyreniw. Sintez — bóleklerdı biriktirip, pútin suwreti jasaw. Bul metod házirgi IT hám basqarıwda eń áhmiyetlı qural esaplanadı.</p>
          </div>
        )
      }
    ] 
  },
  shigis: {
    id: 'shigis',
    title: '🌏 Áyyemgi Shıǵıs filosofiyası',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-lg text-sm" onClick={() => (window as any).nav?.('hindiston')}>🪷 Áyyemgi Hindistan</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-lg text-sm" onClick={() => (window as any).nav?.('xitoy')}>🐉 Áyyemgi Qıtay</div>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
          <h3 className="text-xl font-bold text-gold mb-3 text-center underline decoration-gold/30">Ulıwmalıq kirisiw</h3>
          <p className="leading-relaxed">
            Áyyemgi Shıǵıs filosofiyası — bul adamzat pákleniwiniń hám oylawınıń besigi. Bul dáwir miloddan aldınǵı <b>VI–I ásirlerdi</b> óz ishine aladı. Karl Yaspers bul waqıttı <b>"Oq dáwiri"</b> dep ataǵan, sebebi dál usı waqıtta dúnya júzi boyınsha (Hindistan, Qıtay, Gretsiya) adamzat miflarden ratsional bilimge óte baslaǵan.
          </p>
          <div className="info-card mt-4 border-l-4 border-gold">
            <h4 className="font-bold mb-2">🌟 Shıǵıs oylawınıń ózgesheligi:</h4>
            <p>Batıs filosofiyası obyektiv dúnyanı úyreniwge qaratılǵan bolsa, Shıǵıs filosofiyası kóbinese <b>praktikalıq, etikalıq hám ruhıy</b> joqarı kámillikke erisiwdi maqset etedi. Orayda barlıq waqıt "Adamdıń ishki dúnyası" hám onıń koinot penen garmoniyası turadı.</p>
          </div>
        </div>
      </div>
    )
  },
  hindiston: {
    id: 'hindiston',
    title: '🪷 Áyyemgi Hindistan',
    tabs: [
      {
        id: 'hi1',
        label: 'Negizler',
        content: (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('vedalar')}>📜 Vedalar</div>
              <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('upanishadlar')}>🧘 Upanishadlar</div>
            </div>
            
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Hind filosofiyasınıń negizi</h3>
              <p>Hindistan filosofiyası dúnyadaǵı eń áyyemgi hám eń tereń sistemalardan biri bolıp, ol tiykarınan <b>"Veda"</b> (Bilim) tekstlerine tiykarlanadı. Vedalar hám olardan keyin kelgen Upanishadlar — bul Hind filosofiyasındagı barlıq mekteplerdiń (Ortodoks hám Noortodoks) tamırı esaplanadı.</p>
              <p className="mt-2 text-sm italic">Joqarıdaǵı túymeler arqalı bul derekler haqqında tolıq maǵlıwmat alıwıńız múmkin.</p>
            </div>
          </div>
        )
      },
      {
        id: 'hi2',
        label: 'Baǵdarlar',
        content: (
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('buddizm')}>☸️ Buddizm</div>
            <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('hinduizm')}>🧘 Hinduizm</div>
            <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('charvaka')}>⚡ Charvaka</div>
            <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('jainizm')}>💚 Jainizm</div>
          </div>
        )
      },
      {
        id: 'hi3', label: 'Tusinikler', content: (
           <div className="space-y-2">
             <div className="info-card"><h3>Karma</h3><p>Ámeller nátiyjesí. Jaxsı ámeller — jaxsı nátiyje.</p></div>
             <div className="info-card"><h3>Sansara</h3><p>Ruhıń qayta-qayta tuwılıw tsikli.</p></div>
             <div className="info-card"><h3>Nirvana</h3><p>Azaptardan azat bolıw háleti.</p></div>
           </div>
        )
      }
    ]
  },
  buddizm: {
    id: 'buddizm',
    title: '☸️ Buddizm — Oyanıw Jolı',
    tabs: [
      { 
        id: 'bu1', 
        label: 'Kelis kelib shıǵıwı', 
        content: (
          <div className="space-y-4">
            <p><b>Buddizm</b> — dúnyadagı eń áyyemgi dunya júzilik dinlerden biri hám quwatlı filosofiyalıq sistema. Ol miloddan aldınǵı <b>VI–V ásirlerde</b> Áyyemgi Hindistannıń arqa bólígınde (házirgi Nepal hám Hindistan shegarası) payda boldı.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">🌍 Geografiyalıq tarqalıwı:</h3>
              <p>Dáslep Hindistanda rawajlanıp, keyinirek Qıtay, Yaponiya, Koreya, Vetnam hám Orta Aziya ellerine keń tarqaldı. Bul din dáslepki dáwirlerde kasta sistemasına (adamlardı tabaqalarga bóliwge) qarsı shıqqanlıǵı menen xalıq arasında tez tanıldı.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'bu2', 
        label: 'Tiykarshısı hám ómiri', 
        content: (
          <div className="space-y-4">
            <p>Buddizmniń tiykarshısı — <b>Siddxartha Gautama</b> (m.á. 563–483). Ol Shakya qáwiminiń patshası Shuddhodananıń ulı bolǵan hám sarayda úlken baylıq ishınde jasasa da, dunya azaplarınan qutılıw jolın izlew ushın saraydı tárk etken.</p>
            <div className="info-card">
              <h3 className="text-gold font-bold">✨ Oyanıw (Bodxi):</h3>
              <p>29 jasında saraydan shıǵıp, 6 jıl dawamında sahralarda haqıyqattı izledi. 35 jasında madiy oylaw (meditatsiya) waqtında "Oyanıw"ǵa eristi hám <b>Budda</b> (Oyanǵan) degen at aldı.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'bu3', 
        label: 'Áhmiyeti hám házirgi jaǵdayı', 
        content: (
          <div className="space-y-4">
            <p>Biz nege Buddizmdi úyrenemiz? Sebebi ol — <b>psixologiya</b> hám <b>etika</b>nyń eń tereń forması. Budda adamnıń baxtı sırıtdagı nárselerde emes, bálki onıń <b>ishki tınıshlıǵında</b> hám nápisin (isteklerin) basqara alıwında ekenligin isbatladı.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">📈 Házirgi kúndegi ahwalı:</h3>
              <p>Búgingi kúnde Buddizm dunya júzi boyınsha 500 millionnan aslam adamlardıń dini hám filosofiyası bolıp esaplanadı. Házirgi batıs dúnyasında (AQSH, Evropa) Buddizm meditatsiya hám stress penen gúresiw quralı sıpatında júdá populyar. Biraq biltin filosofiya sıpatında ol óziniń tıykarǵı tınıshlıq hám mehir-shápáát (Metta) printsiplerin saqlap qalǵan.</p>
            </div>
          </div>
        )
      }
    ]
  },
  charvaka: {
    id: 'charvaka',
    title: '⚡ Charvaka (Lokayata)',
    tabs: [
      {
        id: 'ch1',
        label: 'Kelis kelib shıǵıwı',
        content: (
          <div className="space-y-4">
            <p><b>Charvaka</b> (yaki Lokayata) — miloddan aldınǵı <b>VI ásir átirapında</b>, Vedalıq diniy dástúrlerge hám qurbanlıqlarǵa qarsı shıqqan eń áyyemgi materialist mektep.</p>
            <div className="info-card border-l-4 border-red-500">
              <h3 className="font-bold">🚫 Máni:</h3>
              <p>Olar kóz benen kórilmeytuǵın "Ruh", "Ájiret" yaki "Quday" sıyaqlı túsiniklerdi biykarlagan. Dúnyada tek sezimler arqalı kóretuǵın zatlar ǵana bar dep esaplaǵan.</p>
            </div>
          </div>
        )
      },
      {
        id: 'ch2',
        label: 'Tiykarshısı',
        content: (
          <div className="space-y-4">
            <p>Mekteptiń tiykarshısı dep ápsanalıq danıshpán <b>Brihaspati</b> esaplanadı.</p>
            <div className="info-card">
              <h3 className="font-bold text-gold">📙 Lokayata-sutra:</h3>
              <p>Bul mekteptiń tiykarǵı kitapları bizge jetip kelmegen. Biz olar haqqında kóbinese olardı sınǵa alǵan basqa mektep (Brahmanizm, Buddizm) tekstleri arqalı bilemiz.</p>
            </div>
          </div>
        )
      },
      {
        id: 'ch3',
        label: 'Áhmiyeti hám házirgi jaǵdayı',
        content: (
          <div className="space-y-4">
            <p>Charvaka — bul <b>erkin oylawdıń</b> eń dáslepki forması. Olar din adamlarınıń xalıqtı aldaytuǵının ashıq aytqan birinshi filosoflar bolǵan.</p>
            <div className="info-card bg-white/5">
              <h3 className="font-bold">🔬 Zamanagóy tásiri:</h3>
              <p>Házirgi waqıtta bul mektep din sıpatında bar emes, biraq onıń kózqarasları házirgi zaman <b>Ateizmi</b> hám <b>Sekulyarizmi</b>ne (dindi mámleketten ajıratıwǵa) tiykar bolıp xızmet etedi.</p>
            </div>
          </div>
        )
      }
    ]
  },
  jainizm: {
    id: 'jainizm',
    title: '💚 Jainizm — Sabır hám Zıyansızlıq',
    tabs: [
      {
        id: 'ja1',
        label: 'Kelis kelib shıǵıwı',
        content: (
          <div className="space-y-4">
            <p><b>Jainizm</b> — Hindistannıń eń áyyemgi hám eń ózgeshe filosofiyalıq sisteması bolıp, ol miloddan aldınǵı <b>VI ásirde</b> qáliplesken. Unıń tiykarǵı mánisi — barlıq tiri janlıqlardı húrmetlew.</p>
            <div className="info-card border-l-4 border-green-500">
              <h3 className="font-bold">⚖️ Tirthankaralar:</h3>
              <p>Jainistlar boyınsha, barlıq waqıtta dúnyaǵa 24 ullı ustaz (Tirthankara) kelgen. Maxavira bul dástúrdiń eń sońǵısı bolıp esaplanadı.</p>
            </div>
          </div>
        )
      },
      {
        id: 'ja2',
        label: 'Maxavira Vardxamana',
        content: (
          <div className="space-y-4">
            <p>Jainizmniń tiykarǵı reformatorı — <b>Maxavira Vardxamana</b> (m.á. 599–527). Ol da Budda sıyaqlı patsha ulı bolǵan, biraq 30 jasında barlıq baylıǵın tárk etken.</p>
            <div className="info-card">
              <h3 className="text-green-400 font-bold">💎 Kevala Jnana:</h3>
              <p>12 jıllıq qatań oylaw hám sahralıqtan keyin ol "Kevala" (joqarı tereń bilim)ge erisip, insan ruxın materiya tásirinen qalay azat etiwdi úyrete baslaǵan.</p>
            </div>
          </div>
        )
      },
      {
        id: 'ja3',
        label: 'Áhmiyeti hám házirgi jaǵdayı',
        content: (
          <div className="space-y-4">
            <p>Jainizmniń eń úlken áhmiyeti — <b>Aximsa</b> (zıyan jetkizbeu) printsipi. Bul printsip Gandige hám búgingi dunya júzilik tınıshlıq háreketlerine úlken tásir kórsetken.</p>
            <div className="info-card bg-green-500/5">
              <h3 className="font-bold">🌿 Házirgi kúnde:</h3>
              <p>Búgingi kúnde Hindistanda 5-6 million átirapında jainist bar. Olar ózleriniń qatań vegetariantlıǵı hám júdá joqarı deńgeydagi sapaatlı (charity) isleri menen tanılǵan. Jainizm — bul tabıyattı saqlaw hám ekologiyalıq oylawdıń eń áyyemgi forması.</p>
            </div>
          </div>
        )
      }
    ]
  },
  greece: {
    id: 'greece',
    title: '🏛️ Antik dáwir Filosofiyası',
    content: (
      <>
        <div className="grid grid-cols-2 gap-3 mb-4">
           <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('greece-pre')}>🏺 Klassikaliqqa shekemgi</div>
           <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('greece-classic')}>🏛️ Klassik</div>
        </div>
        <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md w-full mb-6" onClick={() => (window as any).nav?.('greece-hellenism')}>🌅 Ellinizm dáwiri</div>
        
        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
          <h3 className="text-xl font-bold text-gold mb-3">Batıs filosofiyasınıń besigi</h3>
          <p className="text-sm leading-relaxed"><b>Antik filosofiya</b> — miloddan aldınǵı VII ásirden milodtıń VI ásiriне shekem dawam etken, Áyyemgi Gretsiya hám Rimde rawajlanǵan danıshpánlıq mektebi. Bul dáwirde adamzat mifologiyalıq oylawdan logikalıq oylawǵa (Miften Logosqa) ótti.</p>
          <div className="info-card mt-4 bg-gold/5 border-gold/20">
            <p className="text-xs italic">"Barlıq batıs filosofiyası — bul Platon jazǵan tekstlerge qosımsha túsindirmeler ǵana" (A.N. Uaytxed).</p>
          </div>
        </div>
      </>
    )
  },
  'greece-pre': {
    id: 'greece-pre',
    title: '🏺 Klassikaliqqa shekemgi dáwir — Arxe izlewde',
    tabs: [
      {
        id: 'pr1',
        label: 'Kelis kelib shıǵıwı',
        content: (
          <div className="space-y-4">
            <p><b>Klassikaliqqa shekemgi</b> (yaki Sokratqa shekemgi) dáwir m.á. VII–V ásirlerdi óz ishine aladı. Bul dáwir Ioniyada (házirgi Túrkkiya jaǵalawları) hám Tústik Italiyada baslanǵan.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">🌀 Logosqa ótiw:</h3>
              <p>Adamlar dúnyanı Mifler (Qudaylar) arqalı emes, bálki <b>Logos</b> (aqıl-oy hám nızam) arqalı túsindiriwge birinshi ret urındı.</p>
            </div>
          </div>
        )
      },
      {
        id: 'pr2',
        label: 'Tiykarǵı mektepler',
        content: (
          <div className="flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('pre-milet')}>🌊 Milet mektebi</div>
              <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('pre-pifagor')}>🔢 Pifagor mektebi</div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
               <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('pre-efes')}>🔥 Efes mektebi</div>
               <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('pre-elea')}>🔵 Elea mektebi</div>
            </div>
            <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25" onClick={() => (window as any).nav?.('pre-atom')}>⚛️ Atomistler mektebi</div>
          </div>
        )
      },
      {
        id: 'pr3',
        label: 'Áhmiyeti hám házirgi jaǵdayı',
        content: (
          <div className="space-y-4">
            <p>Bul filosoflar házirgi zaman <b>fizikası hám kosmologiyası</b>nıń tamırların salǵan.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">🔬 Zamanagóy ilim:</h3>
              <p>Miletlılardın "birinshi element" (Arxe) teoriyası, Atomistlerdin atom haqqındaǵı kózqarasları búgingi kúnde Kvant fizikasınıń baslaması sıpatında úyreniledi.</p>
            </div>
          </div>
        )
      }
    ]
  },
  'greece-classic': {
    id: 'greece-classic',
    title: '🏛️ Klassik dáwir — Filosofiya shıńı',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('sokrat')}>👤 Sokrat</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('platon')}>🏛️ Platon</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('aristotel')}>🧠 Aristotel</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>M.á. V–IV ásirler — Grek filosofiyasınıń "Altın dáwiri". Bul dáwirde filosofiya tek tábiyatdı emes, bálki <b>Adamdı</b>, jámiyetti, etikani hám sáyasattı úyreniwge baǵdarlandı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Máni:</b> Sokrat — etikanı, Platon — ideallardı, Aristotel — ilimiy logikanı hám sistemalastırıwdı baslap berdi.</p>
        </div>
      </div>
    )
  },
  'greece-hellenism': {
    id: 'greece-hellenism',
    title: '🌅 Ellinizm dáwiri — Jasaw óneri',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3 font-bold text-center">
          <div className="bg-gold/10 border border-gold p-4 rounded-xl cursor-pointer hover:bg-gold/20 transition-all" onClick={() => (window as any).nav?.('stoicism')}>🚪 Stoitsizm</div>
          <div className="bg-gold/10 border border-gold p-4 rounded-xl cursor-pointer hover:bg-gold/20 transition-all" onClick={() => (window as any).nav?.('epicurism')}>🍇 Epikurshılıq</div>
          <div className="bg-gold/10 border border-gold p-4 rounded-xl cursor-pointer hover:bg-gold/20 transition-all" onClick={() => (window as any).nav?.('skepticism')}>🎭 Skeptitsizm</div>
        </div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Magʻlumat:</h3>
          <p>M.á. IV ásir - mil. VI ásiri. Aleksandr Makedoniya imperiyası qulaǵannan keyingi dáwir. Filosofiyanıń tiykarǵı sorawı: "Qıyın zamanda qalay tınısh hám jaxsı jasaw múmkin?"</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Natiyje:</b> Filosofiya endi teoriya emes, bálki "ruhıy dári" (terapiya) retinde qarala basladı.</p>
        </div>
      </div>
    )
  },
  stoicism: {
    id: 'stoicism',
    title: '🚪 Stoitsizm — Ishki tutqınlıq',
    content: (
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('zenon-stoa')}>🚪 Zenon (Kitionlı)</div>
        </div>
        <p className="text-justify border-l-4 border-gold pl-3 py-1 bg-gold/5 rounded-r">
          Stoiklar dúnnyanı basqarıp bolmaytuǵının, biraq óz emotsiyalarımızdı basqarıw múmkin ekenligin úyretedi.
        </p>
        <div className="grid grid-cols-1 gap-3">
          <div className="info-card">
            <h3 className="font-bold text-gold">🌿 Tiykarǵı ideya:</h3>
            <p className="text-sm">Ziyannıń sırtqı nárseler emes, bálki bizdiń olarǵa bolǵan kózqarasımız ekenliginde. "Seniń qolıńda bolmaǵan nárseler ushın qayǵırma".</p>
          </div>
          <div className="info-card">
            <h3 className="font-bold text-gold">🏛️ Wákilleri:</h3>
            <p className="text-sm">Zenon, Seneka, Epiktet hám Rim imperatorı Mark Avreliy.</p>
          </div>
        </div>
      </div>
    )
  },
  epicurism: {
    id: 'epicurism',
    title: '🍇 Epikurshılıq — Lezzet filosofiyası',
    content: (
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('epikur')}>🍇 Epikur</div>
        </div>
        <p className="text-justify border-l-4 border-gold pl-3 py-1 bg-gold/5 rounded-r">
          Epikur ushın eń joqarı baxıt — bul azaplardan qutılıw hám "Ataraksiya" (ruwxıy tınıshlıq) háletine erisiw.
        </p>
        <div className="grid grid-cols-1 gap-3">
          <div className="info-card">
            <h3 className="font-bold text-gold">🌿 Tiykarǵı ideya:</h3>
            <p className="text-sm">Baxıt — júdá kóp nársege iye bolıw emes, bálki az nárse menen qánaatleniw hám qorqınıshlardan (ásirese ólim qorqınıshınan) azat bolıw.</p>
          </div>
          <div className="info-card">
            <h3 className="font-bold text-gold">⚖️ Máni:</h3>
            <p className="text-sm">Aqıllı lezzetler (doslıq, bilim) waqtınshaǵı hám turaqsız lezzetlerden joqarı turadı.</p>
          </div>
        </div>
      </div>
    )
  },
  skepticism: {
    id: 'skepticism',
    title: '🎭 Skeptitsizm — Gúman filosofiyası',
    content: (
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('pirron')}>🎭 Pirron</div>
        </div>
        <p className="text-justify border-l-4 border-gold pl-3 py-1 bg-gold/5 rounded-r">
          Skeptikler haqıyqattı biliw múmkin emesligin hám hár qanday tastıyıqlawdan bas tartıw kerekaligin aytadı.
        </p>
        <div className="grid grid-cols-1 gap-3">
          <div className="info-card">
            <h3 className="font-bold text-gold">🌿 Tiykarǵı ideya:</h3>
            <p className="text-sm">"Hesh nárse belgili emes, hám bu tastıyıqlawdıń ózi de gúmanlı". Tastıyıqlawdan bas tartıw (Epoxe) ruwxtı tınıshlandıradı.</p>
          </div>
          <div className="info-card">
            <h3 className="font-bold text-gold">🔍 Maqset:</h3>
            <p className="text-sm">Talasıp-tartısıwlardan qutılıw hám hákimiyatqa bolǵan qızıǵıwdı toqtatıw arqalı tınıshlıqqa erisiw.</p>
          </div>
        </div>
      </div>
    )
  },
  'zenon-stoa': {
    id: 'zenon-stoa',
    title: '🚪 Zenon (Kitionlı)',
    tabs: [
      { id: 'z1', label: 'Táliymatı', content: (
        <div className="space-y-4">
          <p>Zenon stoitsizmnıń tiykarshısı bolıp, dúnnyanı bir pútin organizm retinde túsindirgen.</p>
          <div className="info-card">
            <h3 className="font-bold text-gold">⚖️ Etika:</h3>
            <p className="text-sm">Tábiyatqa sáykes jasaw eń joqarı maqset. Adam óz aqıl-oyı arqalı emotsiyaların basqarıwı kerek.</p>
          </div>
        </div>
      )},
      { id: 'z2', label: 'Logika', content: (
        <div className="space-y-4">
          <p>Zenon logikanı filosofiyanıń "qorǵanı" dep ataǵan. Ol sánanı dáslep taza taxta (tabula rasa) sıpatında súwretlegen.</p>
        </div>
      )}
    ]
  },
  epikur: {
    id: 'epikur',
    title: '🍇 Epikur',
    tabs: [
      { id: 'e1', label: 'Atomizm', content: (
        <div className="space-y-4">
          <p>Epikur Demokrittıń atomistik táliymatın rawajlandırıp, atomlardıń "qiya ketiwi" (clinamen) haqqındaǵı ideyanı kirgizgen.</p>
        </div>
      )},
      { id: 'e2', label: 'Etika', content: (
        <div className="space-y-4">
          <p>Epikur ushın baxıt — bul denedegi azaplardıń hám ruwxtaǵı qáweterlerdiń joqlıǵı (Ataraksiya).</p>
        </div>
      )}
    ]
  },
  pirron: {
    id: 'pirron',
    title: '🎭 Pirron',
    content: (
      <div className="space-y-4">
        <p>Pirron — antik skeptitsizmnıń tiykarshısı. Ol haqıyqat haqqında gápirmewdi (Afaziya) úyretken.</p>
        <div className="info-card">
          <h3 className="font-bold text-gold">⚖️ Kózqarası:</h3>
          <p className="text-sm">Hár qanday tastıyıqlawǵa qarsı basqa bir tastıyıqlaw keltiriw múmkin, sol ushın da hesh qanday juwapqa kelmew eń durıs jol.</p>
        </div>
      </div>
    )
  },
  'pre-milet': {
    id: 'pre-milet',
    title: '🌊 Milet mektebi',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('fales')}>💧 Fales</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('anaksimander')}>♾️ Anaksimander</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('anaksimen')}>💨 Anaksimen</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Milet mektebi — antik dáwirdiń birinshi filosofiyalıq mektebi bolıp esaplanadı (m.á. VI ásir). Bul mektep buringʻı mifologiyalıq tushiniklerden ilimiy-filosofiyalıq kózqaraslarǵa ótiwde úlken rol oynadı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Tiykarǵı g'oya:</b> Dúnyanıń tıykarı bolǵan birinshi elementti (Arxe) tábiyiy kúshlerden izlew. Olar "Nárseler ne ushın bar?" hám "Dúnya ne nárseten payda boldı?" degen sorawlarǵa juwap beriwge urınǵan.</p>
        </div>
      </div>
    )
  },
  'pre-pifagor': {
    id: 'pre-pifagor',
    title: '🔢 Pifagor mektebi',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('pifagor')}>🔢 Pifagor</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Pifagorshılar mektebi (m.á. VI-V ásirler) tek filosofiyalıq emes, bálki diniy-siyasiy birlespe sıpatında da qáliplesti. Olar antik dáwirdegi eń kúshli ruwxıy mekteplerden biri boldı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Tiykarǵı g'oya:</b> Dúnyanıń mánisi hám tártibi materiyada emes, bálki sanlarda hám matematikalıq qatnaslarda ekenligin túsindiriw. Musyka, matematika hám astronomiya — Pifagorshılar ushın koinottı tanıwdıń tıykarǵı jolları bolǵan.</p>
        </div>
      </div>
    )
  },
  'pre-efes': {
    id: 'pre-efes',
    title: '🔥 Efes mektebi',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('geraklit')}>🔥 Geraklit</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Efes mektebi Geraklittiń kózqarasları menen tikkeley baylanıslı. Bul mekteptiń tiykarǵı ózgesheligi — dunya turaqlı turaqlı emes, bálki turaqlı ózgeriste ekenligin dálillewi.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Tiykarǵı g'oya:</b> "Hámme nárse aǵadı" (Panta rhei). Mekteptiń baslı nızamlıǵı — dialektika, yaǵnıy qarsılıqlar birligi hám gúresi. Ot — dunya háreketiniń fundamenti retinde qaraladı.</p>
        </div>
      </div>
    )
  },
  'pre-elea': {
    id: 'pre-elea',
    title: '🔵 Elea mektebi',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('parmenid')}>🔵 Parmenid</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('zenon')}>🏹 Zenon</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Elea mektebi (m.á. VI-V ásirler) antik filosofiyada birinshi ret "Bolmıs" haqqındaǵı jańa sistemanı jarattı. Olar Geraklittiń háreket teoriyasına qarama-qarsı kózqarasta bolǵan.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Tiykarǵı g'oya:</b> Bolmıs — bul birden-bir, ózgermeytuǵın, bóliniui múmkin bolmaǵan hám mángi nárse. Háreket hám kóp formalılıq — sezimlerimizdiń aldawı ekenligin logikalıq dálillewge urınǵan.</p>
        </div>
      </div>
    )
  },
  'pre-atom': {
    id: 'pre-atom',
    title: '⚛️ Atomistler mektebi',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer" onClick={() => (window as any).nav?.('demokrit')}>⚛️ Demokrit</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Atomistler mektebi materializm baǵdarı rawajlanıuınıń joqarı shıńına aylandi. Olar Lemkipp hám Demokrit tárepinen qáliplesken bolıp, dúnyanıń dúzilisi haqqında turaqlı teoriyanı jaratqan.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Tiykarǵı g'oya:</b> Koinot sheksiz kóp kishi, bóliniui múmkin bolmaǵan bólekshelerden (atomlardan) hám boslıqtan ibarat. Atomlar turaqlı hárekette hám olardıń túrli kombinatsiyaları nárselerdi payda etedi.</p>
        </div>
      </div>
    )
  },
  fales: {
    id: 'fales',
    title: '💧 Fales — Filosofiya Atası',
    tabs: [
      { 
        id: 'fa1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Fales</b> (m.á. 624–546) — Milet qalasında tuwılǵan, antik dáwirdiń "Jeti danıshpánı"niń biri hám batıs filosofiyasın baslap bergen alım.</p>
            <div className="info-card border-l-4 border-blue-500">
              <h3 className="font-bold">🌍 Birinshi alım:</h3>
              <p>Ol tek filosof emes, bálki astronom hám matematik bolǵan. 585-jıldıń 28-mayında kúnnıń tutılıwın aldınnan aytıp bergeni menen meshur.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'fa2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-blue-500 pl-3 py-1 bg-blue-500/5 rounded-r">
              Falestiń eń úlken sorawı: "Hámme nárseniń tıykarı (Arxe) ne?" bolǵan. Onıń kózqarasları batıs filosofiyasın mifan logikalıq túsindiriwge ótkerdi.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-500 list-none flex justify-between items-center">
                  💧 Suw — Haqyqat (Tiykarǵı ideyası)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-500/20 pt-2">
                  <p>Ol dúnyanıń baslaması <b>Suw</b> dep esapladi. Jer bolsa úlken okean ústinde suzıp júrgen ayaq-astı dep túsindirdi. Hámme nárse suwdan shıǵadı hám sońında taǵı suwǵa aylanadı.</p>
                  <p className="text-xs italic">"Hámme nárse Qudaylar menen tolı" — bul jerde ol tábiyattın jansız emes, bálki tiri ekenligin aytpaqshı bolǵan.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'fa3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Fales — dúnyanı mifologiyasız, logika hám tábiyaat nızamları arqalı túsindiriwge urınǵan birinshi insan.</p>
            <div className="info-card bg-blue-500/5">
              <h3 className="font-bold">📏 Matematika hám Astronomiya:</h3>
              <p>Geometriyadaǵı "Fales teoremasi" ele de mekteplerde oqıtıladı. Biz onı dúnyanıń mánisin tek aqıl arqalı tanıw múmkinligin kórsetkeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  anaksimander: {
    id: 'anaksimander',
    title: '♾️ Anaksimander — Sheksizlik Danıshpánı',
    tabs: [
      { 
        id: 'an1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Anaksimander</b> (m.á. 610–546) — Falestiń dosı hám shákirti. Ol Milet qalasında jasap, jer júziniń birinshi geografiyalıq kartasın hám gnomon (kún saatın) jaratqan.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">🗺️ Kartografiya:</h3>
              <p>Ol dáslepki ret dúnyanıń modelin (globus hám karta forması) jaratıwǵa urınǵan hám jerdiń kózge kórinbeytuǵın kúshler menen kósilkik ortasında turǵanın aytqan.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'an2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-gold pl-3 py-1 bg-gold/5 rounded-r">
              Anaksimander boyınsha, dúnyanıń tiykari anıq bir nárse (suw yaki ot) bola almaydı. Ol abstaktlı oylawdıń tiykarın saldı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-gold list-none flex justify-between items-center">
                  🌌 Apeiron (Sheksizlik)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-gold/20 pt-2">
                  <p>Ol dúnyanıń tıykarı retinde <b>Apeiron</b> (belgisiz, sheksiz hám máńgi) materiyanı usınıs etti. Hárbir nárse apeironnan shıǵadı hám málim bir waqıttan keyin oǵan qaytıp baradı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-gold list-none flex justify-between items-center">
                  📜 Tábiyat haqqında (Miyneti)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-gold/20 pt-2">
                  <p>Bul batıstaǵı birinshi filosofiyalıq shıǵarma dep esaplanadı. Onda koinottın gúl-gun boması hám adamlardıń kelip shıǵıwı haqqında jazılaǵan.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'an3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Anaksimander <b>evolyutsiya</b> ideyasınıń tamırların salǵan. Ol adamlar dáslep balıq tárizli janlıqlardan kelip shıqqan degen gipotezanı alǵa qoyǵan.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">🚀 Kosmologiya:</h3>
              <p>Biz onı dúnyanıń payda bolıwın abstrak túsnik (Apeiron) arqalı túsindiriwge urınǵanı hám Jerdiń koinottaǵı ornın belgilegeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  anaksimen: {
    id: 'anaksimen',
    title: '💨 Anaksimen — Ruw hám Hawa',
    tabs: [
      { 
        id: 'ax1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Anaksimen</b> (m.á. 585–528) — Milet mektebiniń úshinshi úlken wákili hám Anaksimanderdiń shákirti. Ol Falestiń realistligin hám Anaksimanderdiń sheksizligin birlestiriwge urınǵan.</p>
          </div>
        )
      },
      { 
        id: 'ax2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-cyan-400 pl-3 py-1 bg-cyan-400/5 rounded-r">
              Anaksimen boyınsha dúnyanın tiykarı hem materiallıq, hem mángi bolıwı kerek. Ol tabıyattıń jıylasqan ja jaǵdayların tushindirgen.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-cyan-400 list-none flex justify-between items-center">
                  💨 Hawa (Pneuma)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-cyan-400/20 pt-2">
                  <p>Ol dúnyanıń tıykarı <b>Hawa</b> dep esapladı. Hawa qoyuılassa — bul bult, suw, jer hám taslarǵa, siyreklesse — otqa aylanadı dep túsindirdi.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ax3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Anaksimen tabıyattaǵı "sıpat" ózgerislerin "san" ózgerisleri (qoyuılasıw hám siyreklesiw) arqalı túsindirgen birinshi filosof.</p>
            <div className="info-card bg-cyan-400/5">
              <h3 className="font-bold">🌬️ Ruh túsinigi:</h3>
              <p>Ol "Hawa koinotı qalay uslap tursa, ruh ta adam denesin solay uslap turadı" dep, <b>Mikrokosmos</b> hám <b>Makrokosmos</b> arasındǵı uqsaslıqtı baslap berdi.</p>
            </div>
          </div>
        )
      }
    ]
  },
  pifagor: {
    id: 'pifagor',
    title: '🔢 Pifagor — Sanlar Patshası',
    tabs: [
      { 
        id: 'pi1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Pifagor</b> (m.á. 570–495) — Samos atawında tuwılǵan, antik dáwirdiń eń meshur matematik hám filosoflarınıń biri. Ol Qubla Italiyada meshur "Pifagorshılar mektebi"ne tiykar salǵan.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">🎭 Mektep hám Turmıs:</h3>
              <p>Onıń mektebi tek oqıw ornı emes, bálki qatań tártipke iye diniy-ruwxıy birlespe bolǵan. Olar vegetariantlıqtı hám janlardıń kóship júriwi (metempsixoz) teoriyasın qollap-quwatlaǵan.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'pi2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-gold pl-3 py-1 bg-gold/5 rounded-r">
              Pifagorshılar ushın dúnyanıń mánisi materiya emes, bálki nárselerdiń bir-birine qatnası. Sanlar dúnya tártibiniń tili bolıp tabıladı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-gold list-none flex justify-between items-center">
                  🔢 "Hámme nárse — san"
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-gold/20 pt-2">
                  <p>Olar koinottıń tıykarında <b>Sanlar</b> turadı dep esaplaǵan. Matematika, musika hám astronomiya — bul koinottıń garmoniyasın túsindiretuǵın ulıwmalıq til bolıp tabıladı.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'pi3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Pifagor matematikaǵa "dálillew" túsinigin alıp keldi hám "Filosofiya" sózin dáslepki ret qullandı.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">📐 Geometriya hám Musika:</h3>
              <p>Meshur Pifagor teoremasi hám musikalıq intervallardıń matematikalıq nızamlıqları onıń miyneti. Biz onı dúnyanıń matematikalıq tártipler menen basqarılıwın kórsetkeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  geraklit: {
    id: 'geraklit',
    title: '🔥 Geraklit — Ózgerisler Ustazı',
    tabs: [
      { 
        id: 'ge1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Geraklit</b> (m.á. 535–475) — Efes qalasınan shıqqan aristokrat filosof. Ol adamlarǵa aralaspawdı jaqsı kórgeni ushın "Tutqın" yaki "Jılaytuǵın filosof" dep atalǵan.</p>
          </div>
        )
      },
      { 
        id: 'ge2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-orange-500 pl-3 py-1 bg-orange-500/5 rounded-r">
              Geraklit boyınsha dúnya turaqlı hárekette hám ózgeriste. Ol dialektikalıq oylawdıń tiykarın saldı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-orange-500 list-none flex justify-between items-center">
                  🌊 "Panta Rhei" (Hámme nárse aǵadı)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-orange-500/20 pt-2">
                  <p>Onıń eń meshur ideyası — koinotta turaqlı hesh nárse joq. "Bir daryāǵa eki ret túsip bolmaydı" degeni de usıdan. Dúnyanıń tiykarı bolsa <b>Ot</b> — ol mángi ózgerip turıwdıń simvolı.</p>
                  <p className="text-xs">Uruıs (zıylıqlar gúresi) — bul barlıq nárseniń atası hám patshası.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-orange-500 list-none flex justify-between items-center">
                  🔥 Tábiyat haqqında (Miyneti)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-orange-500/20 pt-2">
                  <p>Onıń fragmentleri bizge jetkerilgen eń tereń metafizikalıq oylawlar bolıp, dúnyanıń logikalıq nızamlılıǵı (Logos) haqqında jazılǵan.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ge3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Geraklit — <b>Dialektika</b>nıń (zıylıqlar birligi hám rawajlanıw haqqındaǵı ilim) tiykarshısı.</p>
            <div className="info-card bg-orange-500/5">
              <h3 className="font-bold">⚖️ Logos házirgi kúnde:</h3>
              <p>Onıń Logos (ulıwmalıq nızamlıq) túsinigi búgingi kúnde ilimiy nıyzamlar túsinigine tiykar boldı. Biz onı dunya turaqlı háreket hám rawajlanıwda ekenligin túsindiririwi ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  parmenid: {
    id: 'parmenid',
    title: '🔵 Parmenid — Bolmıs Filosofı',
    tabs: [
      { 
        id: 'pa1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Parmenid</b> (m.á. 515–450) — Elea qalasında jasap ótken hám Elea mektebine tiykar salǵan. Ol batıs oylaw sistemasına "Bolmıs" túsinigin alıp keldi.</p>
          </div>
        )
      },
      { 
        id: 'pa2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-blue-600 pl-3 py-1 bg-blue-600/5 rounded-r">
              Ol Geraklittiń ózgerisler teoriyasına qarsı shıqtı. Parmenid boyınsha, haqıyqıy bolmıs birdir hám ózgermestir.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-600 list-none flex justify-between items-center">
                  🔵 Bolmıs birdir
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-600/20 pt-2">
                  <p>Ol Geraklittiń ózgerisler teoriyasına qarsı shıqtı. Parmenid boyınsha, haqıyqıy bolmıs ózgermeydi, bóliniui múmkin emes hám háreketsizdir. Ózgerisler — bul tek ápiwayı sezimlerdiń aldawı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-600 list-none flex justify-between items-center">
                  📜 Tábiyat haqqında (Dástan)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-600/20 pt-2">
                  <p>Miyneti eki bólimnen ibarat: "Haqıyqat jolı" (Bolmıs haqqında) hám "Pikir jolı" (Kóriniwshe dúnya haqqında).</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'pa3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Parmenid — <b>Ontologiya</b> (bar bolıw haqqındaǵı ilim) hám logikalıq oylawdıń tiykarshısı.</p>
            <div className="info-card bg-blue-600/5">
              <h3 className="font-bold">🧠 Aqıl joly:</h3>
              <p>Ol "Oylaw hám bolmıs bir nárse" dep aytıp, aqıl arqalı tanıwdıń mánisin ashtı. Biz onı haqıyqattı sezimlerden emes, logikadan izlew kerek ekenligin úyretkeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  zenon: {
    id: 'zenon',
    title: '🏹 Zenon — Logika Paradoksları',
    tabs: [
      { 
        id: 'ze1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Zenon</b> (m.á. 490–430) — Parmenidtiń meshur shákirti. Ol ustazınıń ideyaların logikalıq dálillewler arqalı qorǵaǵan.</p>
          </div>
        )
      },
      { 
        id: 'ze2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-red-500 pl-3 py-1 bg-red-500/5 rounded-r">
              Zenon háreket hám kóp formalılıqtıń múmkin emesligini paradokslar arqalı kórsetken. Ol oylawdaǵı qayshılıqlardı ashıp berdi.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-red-500 list-none flex justify-between items-center">
                  🏹 Aporiyalar (Logikalıq qıyınshılıqlar)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-red-500/20 pt-2">
                  <p>Mısalı: "Axilles hám tasbaqa". Logika boyınsha Axilles tasbaqanı quwıp jete almaydı, sebebi dıstantsiya sheksiz bóleklerge bólinedi.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ze3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Zenon paradoksları házirgi zaman mathematikasındaǵı sheksizlik hám kózge kórinbeytuǵın waqıt bólekleri haqqındaǵı debatlara tiykar bolǵan.</p>
            <div className="info-card bg-red-500/5">
              <h3 className="font-bold">🧱 Logikalıq analiz:</h3>
              <p>Biz onı oylawdaǵı qamaqlardı kórsete alǵanı hám logikalıq dálillew sanatı (dialektika) rawajlanuına úlken úles qosqanı ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  demokrit: {
    id: 'demokrit',
    title: '⚛️ Demokrit — Materializm Atası',
    tabs: [
      { 
        id: 'de1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Demokrit</b> (m.á. 460–370) — Abdera qalasında tuwılǵan. Ol kóp sayaxat etken hám óz dáwiriniń derlik barlıq ilimlerin tereń ózi oqıp úyrenip shıqqan.</p>
          </div>
        )
      },
      { 
        id: 'de2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-indigo-500 pl-3 py-1 bg-indigo-500/5 rounded-r">
              Dúnyada tek Atomlar hám Boslıq bar. Demokrit modern fizikası hám materializmge tiykar salǵan.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-500 list-none flex justify-between items-center">
                  ⚛️ Atomistik teoriya
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-500/20 pt-2">
                  <p>Dúnyada tek <b>Atomlar</b> (bóliniui múmkin bolmaǵan bóleksheler) hám <b>Boslıq</b> bar. Barlıq nárseniń rawajlanıwı — bul atomlardıń biriguı hám ajralıuı ǵana. Jan da — bul eń nurshı atomlardan ibarat nárse.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-500 list-none flex justify-between items-center">
                  📜 Kishi Kosmologiya (Miyneti)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-500/20 pt-2">
                  <p>Bul miynetinid dunya dunya dúzilisi hám jan haqqındaǵı atomistik kózqarasların sistemalastırǵan.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'de3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Demokrit dúnnyanıń materiallıq pútinligin túsindirdi hám "determinizm" (hárbir quıbılıstıń óz sebebi bar) prinpisin kirgizdi.</p>
            <div className="info-card bg-indigo-500/5">
              <h3 className="font-bold">🧪 Fizika tamırları:</h3>
              <p>Onıń atomistik ideyaları XX ásirdegi yadro fizikasına shekem jetip keldi. Biz onı tabıyattı materiallıq nızamlar arqalı túsindirgeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  vedalar: {
    id: 'vedalar',
    title: '📜 Vedalar — Bilim Dáryası',
    tabs: [
      { 
        id: 'v1', 
        label: 'Túsinik', 
        content: (
          <div className="space-y-4">
            <p><b>Vedalar</b> (sanskritsha: <i>veda</i> — "Bilim") — bul Hindistannıń eń áyyemgi, muqaddes hám filosofiyalıq tekstleri jıynaǵı. Olar miloddan aldınǵı <b>XV–V ásirler</b> aralıǵında jaratılǵan. Hindler ushın Vedalar "apauruseya" (insan tárepinen emes, Quday tárepinen jiberilgen) bolıp esaplanadı.</p>
            <div className="info-card">
              <h3 className="text-gold">📖 Veda dáwiriniń basqıshları:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><b>Samxitalar:</b> Qurbanlıq qılıw waqtında oqılatuǵın gimnler, duwalar.</li>
                <li><b>Brahmanlar:</b> Vedalıq dástúrlerdiń túsindirmeleri.</li>
                <li><b>Aranyakalar:</b> "Tog'ay tekstleri" — jan hám koinot haqqında simvolikalıq oylawlar.</li>
              </ul>
            </div>
          </div>
        )
      },
      { 
        id: 'v2', 
        label: 'Tórt Kitap', 
        content: (
          <div className="space-y-4">
            <p>Vedalar tórt úlken bólimge bólinedi, olardıń hárbiri ózine tán áhmiyetke iye:</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="info-card border-l-2 border-gold">
                <h3 className="font-bold underline decoration-gold/20">1. Rigveda (Gimnler Vedası):</h3>
                <p className="text-sm">Eń áyyemgi hám eń áhmiyetli bólim. Ol 1028 gimnnen ibarat bolıp, tábiyat kúshlerin (Agni — ot, Indra — jawın) maqtawǵa arnalǵan.</p>
                <a href="https://archive.org/search.php?query=Rig+Veda" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs mt-1 inline-block">Rigveda ↗</a>
              </div>
              <div className="info-card border-l-2 border-gold">
                <h3 className="font-bold underline decoration-gold/20">2. Samaveda (Oshazlar Vedası):</h3>
                <p className="text-sm">Rigveda gimnlerin oqıwda qullanılatuǵın arnawlı muqamlar hám namalar jıynaǵı.</p>
                <a href="https://archive.org/search.php?query=Samaveda" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs mt-1 inline-block">Samaveda ↗</a>
              </div>
              <div className="info-card border-l-2 border-gold">
                <h3 className="font-bold underline decoration-gold/20">3. Yajurveda (Qurbanlıqlar Vedası):</h3>
                <p className="text-sm">Diniy dástúrler hám qurbanlıq qılıw tártipleri kórsetilgen tekstler.</p>
                <a href="https://archive.org/search.php?query=Yajurveda" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs mt-1 inline-block">Yajurveda ↗</a>
              </div>
              <div className="info-card border-l-2 border-gold">
                <h3 className="font-bold underline decoration-gold/20">4. Atharvaveda (Duwalar Vedası):</h3>
                <p className="text-sm">Kúndelikli turmıstaǵı awırılıqlardan qutılıw, emlew hám sıyqırlı duwalar jıynaǵı.</p>
                <a href="https://archive.org/search.php?query=Atharvaveda" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xs mt-1 inline-block">Atharvaveda ↗</a>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  upanishadlar: {
    id: 'upanishadlar',
    title: '🧘 Upanishadlar — Ruhıy Sır',
    tabs: [
      { 
        id: 'u1', 
        label: 'Máni', 
        content: (
          <div className="space-y-4">
            <p><b>Upanishadlar</b> (sanskritsha: <i>upa-ni-shad — "ustazdıń janında tómende otırıw"</i>) — bul Vedalardıń juwmaqlawshı, eń tereń filosofiyalıq bólimi. Olar <b>Vedanta</b> (Vedalardıń sońı) dep te ataladı.</p>
            <div className="info-card bg-gold/5">
              <h3 className="text-gold font-bold">🎯 Tiykarǵı maqset:</h3>
              <p>Dástúrlerge emes, bálki <b>"Aqıyqat — Brahman"</b>dı biliwge hám adamnıń ishki dunyasın (Atman) túsiniwge qaratılǵan.</p>
              <a href="https://archive.org/search.php?query=Upanishads" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm mt-1 inline-block">Upanishadlar ↗</a>
            </div>
          </div>
        )
      },
      { 
        id: 'u2', 
        label: 'Tiykarǵı Ideyalar', 
        content: (
          <div className="space-y-4">
            <div className="info-card">
              <h3 className="font-bold">🌌 Brahman hám Atman</h3>
              <p>Brahman — bul koinotlıq obyektiv pútinlik, bar bolǵan barlıq nárseniń tıykarı. Atman — bul adamnıń ishki subyektiv "men"i. Upanishadlardıń eń úlken jańalıǵı — <b>"Atman bul Brahman" (Tat Tvam Asi)</b> dep jariyalawı bolıp esaplanadı.</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">🔁 Sansara hám Moksha</h3>
              <p>İnsan ruxı tuwılıw hám óliw shınjırı (Sansara) ishınde bende boladı. Onnan qutılıw tek haqıyqıy bilim — <b>Moksha</b> (azatlıq) arqalı múmkin.</p>
            </div>
            <p className="text-xs italic text-white/40">* Upton-Sinclair Upanishadlar haqqında: "Bul adamzattıń eń tereń oylaw shıńı" dep aytqan.</p>
          </div>
        )
      }
    ]
  },
  hinduizm: {
    id: 'hinduizm',
    title: '🧘 Hinduizm — Sanatana Dharma',
    tabs: [
      { 
        id: 'h1', 
        label: 'Kelis kelib shıǵıwı', 
        content: (
          <div className="space-y-4">
            <p><b>Hinduizm</b> — dúnyadaǵı eń áyyemgi dinlerden biri bolıp, Hindistanda <b>"Sanatana Dharma"</b> (Máńgi nızam) dep ataladı. Unıń tamırları miloddan aldınǵı <b>III–II mıń jıllıqlarǵa</b>, Hind oypatlıǵı tsivilizatsiyasına barıp taqaladı.</p>
            <div className="info-card">
              <h3 className="font-bold">🏔️ Geografiyalıq derek:</h3>
              <p>Bul filosofiya Hind daryası boyındaǵı xalıqlardıń isenimleri hám Vedalıq máni-mazmunnıń sintezi sıpatında payda bolǵan. Ol bir din emes, bálki kóplegen filosofiyalıq mekteplerdiń jıyındısıdır.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'h2', 
        label: 'Derekler hám Obrazlar', 
        content: (
          <div className="space-y-4">
            <p>Hinduizmniń jeke bir tiykarshısı joq. Ol <b>Rishiler</b> (danıshpánlar) tárepinen "esitilgen" (Shruti) muqaddes bilimlerge tiykarlanadı.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">🎭 Trimurti (Úshlik):</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><b>Brahma:</b> Jaratıwshı.</li>
                <li><b>Vishnu:</b> Saqlap qalıwshı.</li>
                <li><b>Shiva:</b> Wayran etiwshi hám jańalawshı.</li>
              </ul>
            </div>
          </div>
        )
      },
      { 
        id: 'h3', 
        label: 'Áhmiyeti hám házirgi jaǵdayı', 
        content: (
          <div className="space-y-4">
            <p>Hinduizmdi úyreniw — bul <b>pluralizm</b> (kóplik) hám sabır-shápáátli bolıwdı úyreniw degeni. Bul sistema júdá kóp túrli isenimlerdi bir jerge jıynay alǵan.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">🕉️ Házirgi kúnde:</h3>
              <p>Búgingi kúnde bul dunya júzindegi úshinshi úlken din bolıp, 1.2 milliardtan aslam adam unıń tiykarında jasaydı. Házirgi zaman Hinduizmi vegetariantlıq, yoga hám ahloqıy kámillik sıpatında dunya mádeniyatına úlken tásir kórsetip atır.</p>
            </div>
          </div>
        )
      }
    ]
  },
  xitoy: {
    id: 'xitoy',
    title: '🐉 Áyyemgi Qıtay',
    tabs: [
      {
        id: 'xi1', label: 'Mektepler', content: (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-3">
                <div className="flex-1 bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('konfutsiy')}>🏮 Konfutsiylik</div>
                <div className="flex-1 bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('daosizm')}>☯️ Daosizm</div>
              </div>
              <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('legizm')}>⚖️ Legizm (Fajya)</div>
            </div>
            
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Qıtay danıshpánlıǵı</h3>
              <p>Áyyemgi Qıtay filosofiyası "Juz mektep" (Bai jia zheng ming) dáwirinde gúllep jasnaǵan. Hindistannan ayırmasha, Qıtay oylaw sisteması kóbinese <b>sociallıq tártip, mámleket basqarıwı hám kámil insan</b> (Junzi) máselesine qaratılǵan.</p>
              <div className="info-card mt-3 bg-white/5">
                 <p className="text-sm">Bunda <b>Dao (Jol)</b> hám <b>De (Edebi-fazilet)</b> túsikleri hámme mektepler ushın oraylıq mániske iye. Qıtaylılar ushın filosofiya — bul ómir súriw óneri hám mámleketti saqlap qalıw quralı bolǵan.</p>
              </div>
            </div>
          </div>
        )
      },
    ]
  },
  konfutsiy: {
    id: 'konfutsiy',
    title: '🏮 Konfutsiylik — Tártip hám Ádep',
    tabs: [
      { 
        id: 'k1', 
        label: 'Kelis kelib shıǵıwı', 
        content: (
          <div className="space-y-4">
            <p><b>Konfutsiylik</b> — miloddan aldınǵı <b>VI ásirde</b> Qıtaydaǵı krizis dáwirinde payda boldı. Jámiyetlik tártip buzılıp, urıslar kóbeyген waqıtta, Konfutsiy "altın dáwir"diń úrp-ádetlerin qaytarıwdı usınıs etken.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">📜 Tiykarǵı maqset:</h3>
              <p>Jámiyettegi hárbir adam óz ornın biliwi kerek: "Hákim — hákim, bende — bende, áke — áke, ulı — ulı bolsın". Bul iyerarxiyalıq tártip kámil jámiyetke alıp keledi.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'k2', 
        label: 'Konfutsiy hám onıń ómiri', 
        content: (
          <div className="space-y-4 text-justify">
            <p className="border-l-4 border-gold pl-3 py-1 bg-gold/5 rounded-r">
              Kung-fu-tsi ózin "jańalıq ashıwshı emes, bálki áyyemgi danıshpánlıqtı jetkeriwshi" dep esaplaǵan. Onıń oyları shákirtleri tárepinen jazıp qaldırılǵan.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-gold list-none flex justify-between items-center">
                  📖 Lun-Yu (Sáwbetler)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-gold/20 pt-2">
                  <p>Tiykarǵı miyneti. Barlıq aqıllı sózlerin hám tálimotların jazıp qaldırǵan fundamental shıǵarma. Bunda ádep-ikramlıq, baxt hám mámleket basqarıwı haqqında aytılǵan.</p>
                  <a href="https://archive.org/search.php?query=Analects+Confucius" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Lun-Yu (Sáwbetler) ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'k3', 
        label: 'Áhmiyeti hám házirgi jaǵdayı', 
        content: (
          <div className="space-y-4">
            <p>Konfutsiylik — bul din emes, bálki <b>mámleketlik ideologiya</b> hám <b>turmıs usılı</b>. Ol Qıtay, Yaponiya hám Koreya mádeniyatınıń ózegin quraydı.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">🌏 Búgingi kúnde:</h3>
              <p>Búgingi kúnde de Shıǵıs Aziya ellerindegi miynetkeshlik, kishi-peyililik hám úlkenlerge húrmet sıpatları Konfutsiylik tárbiyasınıń nátiyjesi esaplanadı. Házirgi Qıtayda Konfutsiy institutları dunya júzi boyınsha Qıtay mádeniyatın tarqatıwda tiykarǵı rol oynaydı.</p>
            </div>
          </div>
        )
      }
    ]
  },
  daosizm: {
    id: 'daosizm',
    title: '☯️ Daosizm — Tabıyıy Yol',
    tabs: [
      {
        id: 'd1',
        label: 'Kelis kelib shıǵıwı',
        content: (
          <div className="space-y-4">
            <p><b>Daosizm</b> — m.á. <b>VI–IV ásirlerde</b> payda bolǵan Qıtaydıń eń tereń filosofiyalıq hám ruwxıy baǵdarlarınan biri. Ol Konfutsiyliktiń "tártip" túsnigine qarsı "tabıyıy erkinlik"ti alǵa qoyǵan.</p>
            <div className="info-card border-l-4 border-blue-500">
              <h3 className="font-bold">🌌 Dao (Yol):</h3>
              <p>Dao — bul dúnyanıń kózge kóriniytın hám kóriniytın bolmaǵan rawajlanıw nızamı. Onı sóz benen túsindirip bolmaydı, unı tek sezish múmkin.</p>
            </div>
          </div>
        )
      },
      {
        id: 'd2',
        label: 'Lao-tsi hám onıń ómiri',
        content: (
          <div className="space-y-4 text-justify">
            <p className="border-l-4 border-blue-400 pl-3 py-1 bg-blue-400/5 rounded-r">
              "Góni ustad" Lao-tsi tabıyıy erkinlikti alǵa qoyǵan. Onıń miyneti dunya júzi boyınsha eń kóp awdarma etilgen kitaplardıń biri.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-400 list-none flex justify-between items-center">
                  📜 Dao De Szin (Dao hám onıń qasiyeti haqqında kitap)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-400/20 pt-2">
                  <p>Ol Qıtaydan batısqa ketiw aldında jazıp qaldırǵan 5000 iyerogliften ibarat shıǵarma. Bunda <b>Dao (Yol)</b> hám <b>Wu-wei (Háreketsizlik)</b> printsipleri túsindirilgen.</p>
                  <a href="https://archive.org/search.php?query=Tao+Te+Ching+Lao+Tzu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Dao De Szin ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      {
        id: 'd3',
        label: 'Áhmiyeti hám házirgi jaǵdayı',
        content: (
          <div className="space-y-4">
            <p>Daosizm Qıtay <b>medicinası, sawlatı (architecture) hám kórkem óneri</b>ne júdá úlken tásir kórsetti. "In hám Yan" balansı túsniginiń barlıǵı usı jerden kelip shıqqan.</p>
            <div className="info-card bg-blue-500/5">
              <h3 className="font-bold">🍃 Modern tásiri:</h3>
              <p>Búgingi kúnde Daosizm <b>minimalizm</b>, stressiz jasaw hám <b>ekologiyalıq garmoniya</b> (tabıyat penen birge jasaw) sıpatında batısta júdá populyar. Ol insandı óziniń tabıyıy "men"ine qaytıwǵa úyretedi.</p>
            </div>
          </div>
        )
      }
    ]
  },
  legizm: {
    id: 'legizm',
    title: '⚖️ Legizm — Nızam Mektebi',
    tabs: [
      {
        id: 'l1',
        label: 'Kelis kelib shıǵıwı',
        content: (
          <div className="space-y-4">
            <p><b>Legizm</b> (Fajya) — m.á. <b>IV–III ásirlerde</b> Qıtaydı ózara urıslar dáwirinen (Jan-guo) alıp shıǵıw ushın payda bolǵan eń qatań filosofiya.</p>
            <div className="info-card border-l-4 border-red-600">
              <h3 className="font-bold">🏛️ Mámleket — eń joqarı qundılıq:</h3>
              <p>Legizm boyınsha adamnıń ádep-ikramlılıǵı emes, bálki <b>qatań nızamlar hám jazalar</b> jámiyette tártip ornatıwdıń birden-bir jolı esaplanadı.</p>
            </div>
          </div>
        )
      },
      {
        id: 'l2',
        label: 'Tiykarshıları',
        content: (
          <div className="space-y-4 text-justify">
            <p className="border-l-4 border-red-600 pl-3 py-1 bg-red-600/5 rounded-r">
              Eń úlken wákilleri — Shang Yang hám Han Fei-tsi. Olar mámleketti kúsheytiw ushın reformalardı baslap bergen.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-red-600 list-none flex justify-between items-center">
                  📜 Han Fei-tsi (Miyneti)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-red-600/20 pt-2">
                  <p>Legizm ideologiyasın tolıq sistemalastırǵan fundamental shıǵarma. Bunda basqaruw tehnologiyaları, jazalar hám hákimiyatti saqlaw usılları kiltirilgen.</p>
                  <a href="https://archive.org/search.php?query=Han+Feizi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Han Fei-tsi ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      {
        id: 'l3',
        label: 'Áhmiyeti hám házirgi jaǵdayı',
        content: (
          <div className="space-y-4">
            <p>Legizm Qıtaydıń <b>byurokratıyalıq hám administrativlik</b> sistemasınıń tiykarı bolıp qaldı. Onıń tásiri dunya júzi boyınsha mámleket basqarıwı teoriyalarında kórinedi.</p>
            <div className="info-card bg-red-600/5">
              <h3 className="font-bold">💼 Zamagóy mánisi:</h3>
              <p>Legizmniń "nızam aldında barlıǵı teń" hám "meritokratiya" (layıqlılardıń basqarıwı) ideyaları házirgi Qıtay menejmenti hám mámleketlik basqarıwında ele de saqlanıp kelmekte.</p>
            </div>
          </div>
        )
      }
    ]
  },
  medieval: {
    id: 'medieval',
    title: '🕌 Orta ásirler filosofiyası',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('med-christian')}>⛪ Xristian filosofiyası</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('med-islamic')}>🕌 Islam filosofiyası</div>
        </div>

        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p><b>Orta ásirler filosofiyası</b> (m. V–XV á.) antik dáwir danıshpanlıǵı hám diniy dúnyaqarastıń sintezi sıpatında qáliplesti. Bul dáwirde filosofiya "Dinniń xızmetshisi" (Ancilla Theologiae) dep qaraldı.</p>
          <div className="grid grid-cols-1 gap-3 mt-3">
            <div className="p-3 bg-white/5 border-l-2 border-gold rounded">
               <h4 className="font-bold text-sm">🎯 Teotsentrizm:</h4>
               <p className="text-xs">Dunyadaǵı barlıq nárseniń orayi — Quday. Bilimniń deregi — muqaddes jazıwlar.</p>
            </div>
            <div className="p-3 bg-white/5 border-l-2 border-gold rounded">
               <h4 className="font-bold text-sm">📖 Kreatsionizm:</h4>
               <p className="text-xs">Dunyaniń Quday tárepinen "joqtan bar" etip jaratılǵanlıǵına iseniw.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'med-christian': {
    id: 'med-christian',
    title: '⛪ Xristian filosofiyası',
    content: (
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25 transition-all" onClick={() => (window as any).nav?.('med-patristic')}>✝️ Patristika</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-lg font-bold cursor-pointer hover:bg-gold/25 transition-all" onClick={() => (window as any).nav?.('med-scholastic')}>🏰 Sxolastika</div>
        </div>
        
        <div className="info-card space-y-4">
          <h3 className="text-gold font-bold border-b border-gold/20 pb-2">📖 Xristian filosofiyasınıń tiykarları:</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-sm"><b>Vahiy hám Aqıl:</b> Xristian filosofiyasında haqıyqat tek aqıl menen emes, bálki Qudaydıń vahiyi (Muqaddes kitaplar) arqalı ashıladı dep esaplanadı.</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-sm"><b>Bolmıs hám Jaratılıs:</b> Dunya Quday tárepinen "joqtan" (ex nihilo) jaratılǵan hám hárbir nárse onıń hákimligine boysınadı (Kreatsionizm).</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <p className="text-sm"><b>Adam hám Jan:</b> Adam Qudaydıń "túsinde hám sáykesinde" jaratılǵan. Jan — ólmeytuǵın, ruwxıy nárse hám deneniń basqarıwshısı esaplanadı.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'med-patristic': {
    id: 'med-patristic',
    title: '✝️ Patristika dáwiri',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('avgustin')}>⛪ Avreliy Avgustin</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('tertullian')}>🛡️ Kvit Tertullian</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('origen')}>🕊️ Origen Adamant</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Patristika (latınsha "pater" — ata) — shirkew atalarınıń tálimotları jıynaǵı. Bul dáwirde xristian dini filosofiyalıq tushinikler menen (ásirese Neoplatonizm) túsindirildi.</p>
        </div>
      </div>
    )
  },
  'med-scholastic': {
    id: 'med-scholastic',
    title: '🏰 Sxolastika dáwiri',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('akvinskiy')}>🏰 Foma Akvinskiy</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('anselm')}>📜 Anselm Kenterberiy</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('okkam')}>🗡️ Uilyam Okkam</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Sxolastika (grekshe "schola" — mektep) — orta ásirlerdegi mektep hám universitetlerde rawajlanǵan filosofiya. Onıń maqseti — din hám aqıl-oydı birlestiriw bolǵan.</p>
        </div>
      </div>
    )
  },
  'med-islamic': {
    id: 'med-islamic',
    title: '🕌 Islom filosofiyası (Falshafa)',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('farabiy')}>🎓 Ábu Nasr al-Farabiy</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('ibnsino')}>⚕️ Ibn Sino (Avitsenna)</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('gazzaliy')}>📿 Ábu Hamid al-Gʻazzaliy</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('ibnrushd')}>⚖️ Ibn Rushd (Averroes)</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Islom filosofiyası Shıǵıs Renessansı dáwirinde (VIII–XII á.) gúllep jasnadı. Bul dáwirde Islom dúnyası antik dunya ilimlerin saqlap qaldı hám rawajlandırdı.</p>
        </div>
      </div>
    )
  },
  avgustin: {
    id: 'avgustin',
    title: '⛪ Avreliy Avgustin — İyman Danıshpanı',
    tabs: [
      { 
        id: 'ag1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Avreliy Avgustin</b> (354–430) — kóp qıylı turmıs jolın ótkerip, keyin xristianlıqtıń eń úlken teoloǵına aylandi. Onıń "Táwbeler" (Confessiones) shıǵarması dunya ádebiyatındaǵı birinshi psixologiyalıq avtobiografiya esaplanadı.</p>
            <div className="info-card border-l-4 border-blue-500">
              <h3 className="font-bold">🏙️ Quday qalası:</h3>
              <p>Onıń "Quday qalası haqqında" (De civitate Dei) miyneti tariyx filosofiyasına tiykar boldı.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'ag2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-blue-400 pl-3 py-1 bg-blue-400/5 rounded-r">
              "Túsinuim ushın isenemen" printsipin alǵa sürdi. Ol xristian dinine platonik ideyalar arqalı filosofiyalıq tushinik bergen.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-400 list-none flex justify-between items-center">
                  🏙️ Quday qalası haqqında
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-400/20 pt-2">
                  <p>Bul miynet tariyx filosofiyasına tiykar boldı. Bunda dunya eki qalaǵa bólinedi: "Jer qalası" (waqtınsha) hám "Quday qalası" (mángi).</p>
                  <a href="https://archive.org/search.php?query=City+of+God+Augustine" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Quday qalası haqqında ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-400 list-none flex justify-between items-center">
                  📜 Táwbeler (Confessiones)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-400/20 pt-2">
                  <p>Dunya ádebiyatındaǵı birinshi psixologiyalıq avtobiografiya. Bunda vaqıt hám ishki sezimler detallı taqlanǵan.</p>
                  <a href="https://archive.org/search.php?query=Confessions+Augustine" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Táwbeler (Confessiones) ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ag3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Avgustin batıs mádeniyatında jeke adamnıń "ishki men"in (inner self)ashıwda úlken rol oynadı.</p>
            <div className="info-card bg-blue-500/5">
              <h3 className="font-bold">🕰️ Zamanagóy tásiri:</h3>
              <p>Onıń vaqıt hám sanalı itibar haqqındaǵı oyları fenomenologiya hám zamanagóy psixologiya tarawları ushın tiykar boldı. Biz onı din hám jeke intuitsiyanı birlestirgeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  akvinskiy: {
    id: 'akvinskiy',
    title: '🏰 Foma Akvinskiy — Logika hám Senim',
    tabs: [
      { 
        id: 'ak1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Foma Akvinskiy</b> (1225–1274) — orta ásirlerdiń eń sistemalı oylawshısı. Ol "Antisiz doktor" (Doctor Angelicus) dep atalǵan hám Aristotel miynetlerin xristianlıq menen turaqlı jaǵdayda birlestirgen.</p>
          </div>
        )
      },
      { 
        id: 'ak2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-amber-600 pl-3 py-1 bg-amber-600/5 rounded-r">
              "Tomeizm" baǵdarına tiykar saldı. Aristoteldiń logikasın xristianlıq dúnyasına maslap, din hám aqıldıń baylanısın kórsetti.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-600 list-none flex justify-between items-center">
                  📖 Teologiya jıynaǵı (Summa Theologica)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-600/20 pt-2">
                  <p>Orta ásirlerdiń eń úlken diniy-filosofiyalıq entsiklopediyası. Onda <b>Qudaydıń 5 dálili</b> kiltirilgen (háreket deregi, sebeplik nızamı h.b.).</p>
                  <a href="https://archive.org/search.php?query=Summa+Theologica+Aquinas" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Summa Theologica ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-600 list-none flex justify-between items-center">
                  ⚖️ Tábiyiy nızam (Etika)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-600/20 pt-2">
                  <p>Dizim-nızamshılıq hám huqıq tarawında "tábiyiy huqıq" teoriyasın rawajlandırdı.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ak3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Foma Akvinsiky batıs universitet bilim beriw sistemasına (scholasticism) tiykar salǵanlardan biri.</p>
            <div className="info-card bg-amber-600/5">
              <h3 className="font-bold">⚖️ Tábiyiy nızam:</h3>
              <p>Dizim-nızamshılıq hám huqıq tarawında "tábiyiy huqıq" teoriyasın rawajlandırdı. Biz onı racional oylawdı diniy isenim menen úylestire alǵanı ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  farabiy: {
    id: 'farabiy',
    title: '🎓 Al-Farabiy — Ekinshi Ustaz',
    tabs: [
      { 
        id: 'fa1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Ábu Nasr al-Farabiy</b> (873–950) — Turkiston (Farob) qalasında tuwılǵan ullı oylawshı. Ol grek filosofiyasın (ásirese Aristoteldi) Islom dúnyasına túsindirgeni ushın "Muallim as-Sani" (Ekinshi Ustaz) dep atalǵan.</p>
          </div>
        )
      },
      { 
        id: 'fa2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-emerald-600 pl-3 py-1 bg-emerald-600/5 rounded-r">
              Islom dúnyasına grek filosofiyasın túsindirgeni ushın "Ekinshi Ustaz" dep atalǵan. Ol sáyasattanıw, logika hám muzıka boyınsha fundamental miynetler jazǵan.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-emerald-600 list-none flex justify-between items-center">
                  🏙️ Fazil qala adamlarınıń kózqarasları
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-emerald-600/20 pt-2">
                  <p>Bul shıǵarmasında jámiyetlik baxtqa erisiw jolı kórsetilgen. Ideal qalanı — danıshpan-filosof basqarıwı kerek dep esaplaǵan.</p>
                  <a href="https://archive.org/search.php?query=The+Virtuous+City+Al-Farabi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Fazil qala adamlarının' ko'zqarasları ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-emerald-600 list-none flex justify-between items-center">
                  🎵 Muzıka haqqında úlken kitap
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-emerald-600/20 pt-2">
                  <p>Muzıka teoriyasın hám onıń emlewshi kúshin fizika nızamları arqalı túsindirgen dunya júzindegi birinshi miynetlerden biri.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'fa3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Al-Farabiy Shıǵıs Peripatetizmine tiykar saldı.</p>
            <div className="info-card bg-emerald-600/5">
              <h3 className="font-bold">🎶 Ilimler klassifikatsiyası:</h3>
              <p>Ilimlerdi birinshi ret sistemalı túrde bólimlerge bólip shıqtı. Onıń sáyasattanıw hám etika boyınsha miynetleri bultın dunya mádeniyatınıń baylıǵı. Biz onı haqıyqıy ilimiy metodtı ornatqanı ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  ibnsino: {
    id: 'ibnsino',
    title: '⚕️ Ibn Sino — Shıǵıs Danıshpanı',
    tabs: [
      { 
        id: 'is1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Ábu Ali ibn Sino</b> (980–1037) — Buxara jaqınında tuwılǵan, batıs dúnyasında <b>Avitsenna</b> atı menen belgili. Ol derlik barlıq ilimlerdi 18 jasında-aq iyelep bolǵan entsiklopedist alım.</p>
          </div>
        )
      },
      { 
        id: 'is2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-cyan-600 pl-3 py-1 bg-cyan-600/5 rounded-r">
              Batısta Avitsenna atı menen belgili. Onıń filosofiyası bolmıs hám jan pútinligi haqqında.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-cyan-600 list-none flex justify-between items-center">
                  ☁️ Ayıǵıw kitabı (Kitab ash-Shifa)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-cyan-600/20 pt-2">
                  <p>Onıń eń úlken filosofiyalıq entsiklopediyası. Bunda bolmıs, meditsina hám logika bir pútinlikte taqlanǵan.</p>
                  <p>Ol "Ushıp júrgen adam" eksperimentini kórsettken: Dene sezimleri bolmasa da, adam óziniń bar ekenligin (janın) seze aladı.</p>
                  <a href="https://archive.org/search.php?query=Book+of+Healing+Avicenna" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Kitab ash-Shifa ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-cyan-600 list-none flex justify-between items-center">
                  ⚕️ Meditsina nızamları (Al-Qonun)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-cyan-600/20 pt-2">
                  <p>Dunya júzi meditsinasınıń "Injili" dep tanılǵan, júzlegen jıllar tiykarǵı sabaqlıq bolǵan shıǵarma.</p>
                  <a href="https://archive.org/search.php?query=Canon+of+Medicine+Avicenna" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Al-Qonun fi at-Tibb ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'is3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Ibn Sinonıń meditsina tarawındaǵı miynetleri Evropada 600 jıl dawamında tiykarǵı sabaqlıq bolıp xızmet etken.</p>
            <div className="info-card bg-cyan-600/5">
              <h3 className="font-bold">💊 Meditsina hám Logika:</h3>
              <p>Psixosomatika (ruwxıy jaǵdaydıń denewge tásiri) haqqında birinshi bolıp aytıp ótken. Biz onı insan denesi hám ruxınıń pútinligin ilimiy dálillegen ullı alım retinde qádirleymiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  gazzaliy: {
    id: 'gazzaliy',
    title: '📿 Al-Gʻazzaliy — Ruxıyat Kózgisi',
    tabs: [
      { 
        id: 'gz1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Ábu Hamid al-Gʻazzaliy</b> (1058–1111) — Islom dúnyası ushın "Hujjatul İslom" (İslom dálili) mártebesine iye. Ol baǵdardaǵı eń bálent medreseniń professorlıǵınan bas tartıp, haqıyqat izlew ushın 11 jıl terekli darwishlikte jasaǵan.</p>
          </div>
        )
      },
      { 
        id: 'gz2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-indigo-700 pl-3 py-1 bg-indigo-700/5 rounded-r">
              Islom dúnyası ushın "Hujjatul İslom" dep tanılǵan. Ol aqııyqatqa tek aqıl menen emes, bálki "qálb nuri" (intuitsiya) arqalı erisiw múmkinligini ayttı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-700 list-none flex justify-between items-center">
                  ⚔️ Filosoflardıń zıyanı (Tahafut al-Falasifa)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-700/20 pt-2">
                  <p>Racional filosofiyanıń sheklewlerin kórsetip bergen hám dine bolǵan isenimdi qalashtırǵan miyneti.</p>
                  <a href="https://archive.org/search.php?query=Tahafut+al-Falasifa+Ghazali" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Tahafut al-Falasifa ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-700 list-none flex justify-between items-center">
                  🧘 Din ilimlerin tiriwiltiriw (Ihya ulum ad-Din)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-700/20 pt-2">
                  <p>Házirgi kúnge shekem Islom etikasınıń tıykarı esaplanadı. Tasavvuf (sufizm) baǵdarın rásmiy Islom menen sintezlegen.</p>
                  <a href="https://archive.org/search.php?query=Ihya+Ulum+al-Din+Ghazali" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Ihya ulum ad-Din ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'gz3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Al-Gʻazzaliy sufizmdi intellektual tushiniklerden sezimlik tushiniklerge ótkerdi.</p>
            <div className="info-card bg-indigo-700/5">
              <h3 className="font-bold">🧘 Etika hám Psixologiya:</h3>
              <p>Onıń "Ihya ulum ad-Din" (Din ilimlerin tiriwiltiriw) miyneti házirgi kúnge shekem Islom etikasınıń tıykarı esaplanadı. Biz onı jeke ruxıy krizisti jeńiw hám haqıyqatlıqtı ishki dunyadan izlew jolın kórsetkeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  tertullian: {
    id: 'tertullian',
    title: '🛡️ Kvit Tertullian — İsenim Qalshanı',
    tabs: [
      { 
        id: 'tr1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Kvit Septimiy Florans Tertullian</b> (155–220) — Shimoliy Afrikada (Karfagen) tuwılǵan, "Latın shirkewiniń atası" dep atalǵan oylawshı. Ol filosofıyadan dinge ótip, xristianlıqtıń eń qattı qorǵawshısına aylandi.</p>
          </div>
        )
      },
      { 
        id: 'tr2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-red-700">
              <h3 className="font-bold text-red-700">🧐 "Isenemen, óytkeni aqılǵa sıymaydı":</h3>
              <p>Bul onıń eń meshur paradoksı (Credo quia absurdum). Ol "Afina menen Ierusalimniń qanday baylanısı bar?" dep sorap, diniy haqıyqattı aqılmen ólshep bolmaytuǵının aytqan.</p>
            </div>
            <p className="text-sm">Antik filosofiyanı diniy buzılıwdıń deregi dep qarap, tek isenimge súyeniwdi úgitledi.</p>
          </div>
        )
      },
      { 
        id: 'tr3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Tertullian latın tilindegi diniy terminologiyanı (mısalı, "Trinitas" — Úshlik) jaratqan dáslepki alım.</p>
            <div className="info-card bg-red-700/5">
              <h3 className="font-bold">📚 Magʻanasy:</h3>
              <p>Onıń qatań etikalıq normaları xristianlıqtıń batıs baǵdarın qáliplestirdi. Biz onı soke isenimniń filosofiyasın jaratqanı ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  anselm: {
    id: 'anselm',
    title: '📜 Anselm Kenterberiy — Logika Ustazı',
    tabs: [
      { 
        id: 'an1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Anselm Kenterberiy</b> (1033–1109) — orta ásirlerdiń eń jaqsı logikalerinen biri. Ol Italıyada tuwılıp, keyin Angliyada arxiepiskop bolǵan hám "Sxolastika atası" dep tanılǵan.</p>
          </div>
        )
      },
      { 
        id: 'an2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-slate-500 pl-3 py-1 bg-slate-500/5 rounded-r">
              "Sxolastika atası" dep tanılǵan. Ol dunya barlıǵın logikalıq jol menen tushintiriw dástu'rin baslap bergen.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-slate-500 list-none flex justify-between items-center">
                  🧠 Proslogion (Ontologiyal dálil)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-slate-500/20 pt-2">
                  <p>Anselm birinshi ret Qudaydıń barlıǵın soke aqıl-oy arqalı dálillewge urındı. Onıń boyınsha, eń kámil Bolmıs (Quday) haqqındaǵı oylardıń ózi, onıń barlıqqa kiyatırǵanın tastıyıqlaydı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-slate-500 list-none flex justify-between items-center">
                  🛡️ Monologion
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-slate-500/20 pt-2">
                  <p>Qudaydıń qábiletleri hám koinottıń jaratılıwı haqqındaǵı teologiyalıq-filosofiyalıq taqlaw miyneti.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'an3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Anselmnıń dálilleri júzlegen jıllar dawamında filosoflar tárepinen talqılanǵan.</p>
            <div className="info-card bg-slate-500/5">
              <h3 className="font-bold">🏛️ Logika dástu'ri:</h3>
              <p>Onıń logikalıq metodları batıs universitetlerindegi diskussiyalar mádeniyatın qáliplestirdi. Biz onı diniy aqıytalardı logikalıq jol menen tushintiriw dástu'rin baslap bergeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  ibnrushd: {
    id: 'ibnrushd',
    title: '⚖️ Ibn Rushd — Batıstınʻ "Ayıqlatıwshısı"',
    tabs: [
      { 
        id: 'ir1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Ábu-l-Valid ibn Rushd</b> (1126–1198) — Andalusiyada (Ispaniya) tuwılǵan ullı oylawshı. Evropalıqlar onı <b>Averroes</b> dep ataǵan. Ol Aristotel miynetlerine eń tereń ta'psirler jazǵanı ushın "Ta'psirshi" (The Commentator) mártebesine iye bolǵan.</p>
          </div>
        )
      },
      { 
        id: 'ir2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-yellow-700 pl-3 py-1 bg-yellow-700/5 rounded-r">
              Batısta Averroes dep tanılǵan. Ol Aristotel miynetlerine eń tereń ta'psirler jazǵan "Ta'psirshi" mártebesine iye.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-yellow-700 list-none flex justify-between items-center">
                  ⚖️ Eki haqıyqat teoriyası
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-yellow-700/20 pt-2">
                  <p>Ol din hám filosofiya bir-birine qarsı emes, bálki bir haqıyqatqa barıwdıń eki jolı ekenligin aytqan. Filiphiya — aqıllı adamlar ushın, din — tu'sinivi ańsat formalar arqalı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-yellow-700 list-none flex justify-between items-center">
                  ⚔️ Tanqıydtıń tanqıydı (Tahafut al-Tahafut)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-yellow-700/20 pt-2">
                  <p>Al-Gʻazzaliynniń filosoflarǵa qarsı jazǵan miynetine racional filosofiyanıń qorǵawı retinde jazǵan tanqıydıy miyneti.</p>
                  <a href="https://archive.org/search.php?query=The+Incoherence+of+the+Incoherence+Ibn+Rushd" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Tahafut al-Tahafut ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ir3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Ibn Sinonıń meditsina tarawındaǵı miynetleri Evropada 600 jıl dawamında tiykarǵı sabaqlıq bolıp xızmet etken.</p>
            <div className="info-card bg-yellow-700/5">
              <h3 className="font-bold">🇪🇺 Evropa Renessansı:</h3>
              <p>Onıń miynetleri batıs Evropa filosofiyasınıń (Averroizm) pajıyanıwına hám Renessans dáwiriniń baslanıwına úlken tásir kórsetti. Biz onı aqıl-oy hám erkin oylawdıń qorǵawshısı retinde úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  origen: {
    id: 'origen',
    title: '🕊️ Origen — Ilimiy Teologiya Atası',
    tabs: [
      { 
        id: 'or1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Origen Adamant</b> (185–253) — Áyyemgi Aleksandriyada tuwılǵan ullı oylawshı hám dáslepki xristian teologı. Ol 6000 nan aslam kitap jazǵan dep aytıladı hám xristianlıqtı filosofiyalıq hệm ilimiy tárepten tiykarlawǵa ómirin baǵıshlaǵan.</p>
          </div>
        )
      },
      { 
        id: 'or2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-teal-600">
              <h3 className="font-bold text-teal-600">🌟 Jannıń ázeliligi:</h3>
              <p>Origen jan adam tuwılmashan burın-aq bar bolǵan (pre-existence) dep esaplaǵan. Onıń boyınsha, dunya — janlardıń ózlerin tárbiyalawı hám Qudayǵa qaytıwı ushın jaratılǵan mektep sıyaqlı.</p>
            </div>
            <p className="text-sm">Injildi allegoriyalıq (simvolikalıq) jol menen túsindiriw metodın rawajlandırıp, onıń tereń filosofiyalıq mánislerin ashıp bergen.</p>
          </div>
        )
      },
      { 
        id: 'or3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Origen xristianlıqtıń birinshi sistemalı teologıyasın jarattı.</p>
            <div className="info-card bg-teal-600/5">
              <h3 className="font-bold">📖 Ekzegetika:</h3>
              <p>Biblistika (muqaddes kitaplardı úyreniw) ilimine tiykar saldı. Onıń miynetleri keyingi barlıq xristian oylawshılarına, sonday-aq Avgustinǵa da sezilerli tásir kórsetti. Biz onı dindi intellektual deńgeyli ilimge aylantırǵanı ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  okkam: {
    id: 'okkam',
    title: '🗡️ Uilyam Okkam — Racionalizm Simvolı',
    tabs: [
      { 
        id: 'ok1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Uilyam Okkam</b> (1285–1347) — Angliyalıq filosof hám teolog. Ol orta ásirler filosofiyasının' sońǵı dáwiriniń eń erkin oylawshısı esaplanadı. Sáyasat hám shirkew máselelerinde reformashılıq ideyaların alǵa súrgen.</p>
          </div>
        )
      },
      { 
        id: 'ok2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-neutral-600">
              <h3 className="font-bold text-neutral-600">🪒 "Okkam ustası" (Razor):</h3>
              <p>"Zárúrlik bolmasa, nárselerdiń sanın kóbeytpew kerek" (Entia non sunt multiplicanda praeter necessitatem). Bul printsip — eń ápiwayı túsindiriw hádiyse ushın eń tuwrı túsindiriw ekenligin bildiredi.</p>
            </div>
            <p className="text-sm">Nominalizm baǵdarın qorǵap, "Umutversaliyalar" (ulıwmalıq tushinikler) tek adamnıń zihninde bar, tábiyatta bolsa tek jeke nárseler haqıyqıy dep esaplaǵan.</p>
          </div>
        )
      },
      { 
        id: 'ok3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Okkamnıń "ustası" búgingi kúnde házirgı zaman iliminiń (metodologiyasının') tiykarǵı nızamlarınan biri.</p>
            <div className="info-card bg-neutral-600/5">
              <h3 className="font-bold">🔬 Zamanagóy ilim:</h3>
              <p>Ol din hám ilimdi bir-birinen bütinley ajıratıwdı usınıs etken. Bul bolsa keyinirek dástúriy mektep hám shirkew tásirinen erkin bolǵan tábiyiy ilimlerdiń rawajlanıwına jol ashtı. Biz onı oylawdı artıqsha júklerden tazalawdı úyretkeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  sokrat: {
    id: 'sokrat',
    title: '🧔 Sokrat — Filosofiya Vicdanı',
    tabs: [
      { 
        id: 's1', 
        label: 'Kelis kelib shıǵıwı', 
        content: (
          <div className="space-y-4">
            <p><b>Sokrat</b> (m.á. 469–399) — Afinada tuwılǵan hám batıs filosofiyasın túbi menen ózgertken ullı danıshpán. Ol Gretsiyanıń eń bálent gúllep jasnaǵan dáwirinde jasap, "Adamgershilik" (etika) máselesin orayǵa qoyǵan.</p>
            <div className="info-card border-l-4 border-gold">
              <h3 className="font-bold">🔄 Burılıs:</h3>
              <p>Sokratqa shekemgi filosoflar tábiyat (kosmos) haqqında oylasa, Sokrat birinshi bolıp <b>Adamnıń ishki dúnyası</b>na itibar qarattı.</p>
            </div>
          </div>
        )
      },
      { 
        id: 's2', 
        label: 'Metod hám Ómiri', 
        content: (
          <div className="space-y-4">
            <p>Sokrat hesh qanday kitap jazbaǵan. Barlıq bilimlerin kóshelerdegi adamlar menen sáwbetlesiw (dialóg) arqalı jetkergen.</p>
            <div className="info-card">
              <h3 className="text-gold font-bold">🤰 Mayevtika:</h3>
              <p>Bul onıń tiykarǵı metodı bolıp, "ruwxıy tuwdırıw" degenmendi bildiredi. Sorawlar arqalı qarsıdagı adamnıń ózindegi bolǵan haqıyqattı "tuwdırıw"ǵa kómeklesken.</p>
            </div>
            <p className="text-xs italic">"Men bir nárseni bilemen, ol da bolsa hesh nárse bilmegenim" (Sokrat).</p>
          </div>
        )
      },
      { 
        id: 's3', 
        label: 'Áhmiyeti hám házirgi jaǵdayı', 
        content: (
          <div className="space-y-4">
            <p>Sokrat haqıyqat ushın ólimge barǵan birinshi filosof. Ol "ruwxıy erkinlik"ti barlıq nárseden bálent qoyǵan.</p>
            <div className="info-card bg-gold/5">
              <h3 className="font-bold">⚖️ Búgingi kúnde:</h3>
              <p>Házirgi pedagogikadaǵı "Sokratik soraw-juwap" metodı ele de eń effektiv oqıtıw usılı esaplanadı. Sokrat — bul tanqıydıy oylawdıń (critical thinking) atası.</p>
            </div>
          </div>
        )
      }
    ]
  },
  platon: {
    id: 'platon',
    title: '📚 Platon — Ideyalar Patshası',
    tabs: [
      { 
        id: 'p1', 
        label: 'Kelis kelib shıǵıwı', 
        content: (
          <div className="space-y-4">
            <p><b>Platon</b> (m.á. 427–347) — Sokrattyń eń dahi shákirti. Aristokrat shańaraqtan shıqqan bul filosof Sokrattyń óliminen keyin "ideal jámiyet" qalay bolıwı kerek ekenligin izley baslaǵan.</p>
            <div className="info-card border-l-4 border-blue-400">
              <h3 className="font-bold">🏢 Akademiya:</h3>
              <p>Platon m.á. 387-jılda Afinada óziniń mektebin — <b>Akademiya</b>nı ashtı. Bul Evropadaǵı birinshi joqarı oqıw ornı bolıp esaplanadı.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'p2', 
        label: 'Ideyalar Teoriyası', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-blue-400 pl-3 py-1 bg-blue-400/5 rounded-r">
              Platon boyınsha biziń kórip turǵan dúnyamız — bul tek shıńayı dúnyanıń "kóleńkesi". Ol batıs teologiyasına hám filosofiyasına úlken tásir kórsetken.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-400 list-none flex justify-between items-center">
                  🌌 Eidos (Ideya)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-400/20 pt-2">
                  <p>Haqıyqıy dunya — bul mángi, kámillik dunya bolǵan "Ideyalar dúnyası". Mısalı: dunya júzindegi barlıq atlar óledi, biraq "Atlıq" ideyası mángi jasaydı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-400 list-none flex justify-between items-center">
                  📖 Mámleket (Politeia)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-400/20 pt-2">
                  <p>Ideal mámleket basqarıwı, "qarawishshi (goridlar)" hám "filosof-patshalar" haqqındaǵı meshur shıǵarması.</p>
                  <a href="https://archive.org/search.php?query=Republic+Plato" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Mámleket (Politeia) ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-400 list-none flex justify-between items-center">
                  🍷 Pir (Simposion)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-400/20 pt-2">
                  <p>Súyiw (Eros) hám gózzallıq mánisi haqqındaǵı eń poétikalıq dialógı.</p>
                  <a href="https://archive.org/search.php?query=Symposium+Plato" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Pir (Simposion) ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'p3', 
        label: 'Áhmiyeti hám házirgi jaǵdayı', 
        content: (
          <div className="space-y-4">
            <p>Platon batıs <b>idealizmi</b>niń tiykarshısı. Ol mámleketti filosoflar basqarıwı kerek dep esaplaǵan.</p>
            <div className="info-card bg-blue-400/5">
              <h3 className="font-bold">🏛️ Zamanagóy tásiri:</h3>
              <p>Búgingi kúnge shekemgi barlıq "utopiyalıq" mámleket teoriyaları Platonnan baslanǵan. Matematika hám logikanıń abstraktlıǵı da onıń ideyalar teoriyası menen bekkem baylanıslı.</p>
            </div>
          </div>
        )
      }
    ]
  },
  aristotel: {
    id: 'aristotel',
    title: '🔬 Aristotel — Ilimler Atası',
    tabs: [
      { 
        id: 'a1', 
        label: 'Kelis kelib shıǵıwı', 
        content: (
          <div className="space-y-4">
            <p><b>Aristotel</b> (m.á. 384–322) — Platonnıń shákirti, lekin onıń eń úlken tanqıydshısı. Orazda Platon — idealizm, Aristotel bolsa — <b>realizm</b> (tájiriybe) wákili esaplanadı.</p>
            <div className="info-card border-l-4 border-green-500">
              <h3 className="font-bold">🔎 Likey (Lyceum):</h3>
              <p>Ol Afinada óziniń <b>Likey</b> dep atalǵan mektebin ashtı. Úlken Aleksandr (Alexander the Great) onıń eń meshur shákirti bolǵan.</p>
            </div>
          </div>
        )
      },
      { 
        id: 'a2', 
        label: 'Logika hám Fizika', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-green-500 pl-3 py-1 bg-green-500/5 rounded-r">
              Aristotel dúnyanı sistemalastırıwǵa urınǵan birinshi "entsiklopedist" alım. Ol tájiriybege (empirizmge) tiykar salǵan.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-green-500 list-none flex justify-between items-center">
                  🧠 Organon (Logika)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-green-500/20 pt-2">
                  <p>Bul logikqa arnalǵan miynetler jıynaǵı. Ol tuwrı oylaw nızamların (Sillogizm) ashtı hám ilimiy metodın belgiledi.</p>
                  <p className="text-xs italic">"Platon — mening dosım, biraq haqıyqat qımbatlıraq" (Aristotel).</p>
                  <a href="https://archive.org/search.php?query=Organon+Aristotle" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Organon (Logika) ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-green-500 list-none flex justify-between items-center">
                  🔭 Metafizika
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-green-500/20 pt-2">
                  <p>Bolmıstıń eń ulıwmalıq nızawları, "birinshi sebep" hám substantsiya haqqındaǵı fundamental miyneti.</p>
                  <a href="https://archive.org/search.php?query=Metaphysics+Aristotle" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Metafizika ↗</a>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-green-500 list-none flex justify-between items-center">
                  ⚖️ Nikomax etikası
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-green-500/20 pt-2">
                  <p>Ádep-ikramlıq, baxt hám "altın ortasha" (meruert orta) prinpisi haqqındaǵı shıǵarması.</p>
                  <a href="https://archive.org/search.php?query=Nicomachean+Ethics+Aristotle" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Nikomax etikası ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'a3', 
        label: 'Áhmiyeti hám házirgi jaǵdayı', 
        content: (
          <div className="space-y-4">
            <p>Aristotel orta ásirler filosofiyası (Sxolastika) ushın "Eń úlken Ustaz" bolıp qaldı.</p>
            <div className="info-card bg-green-500/5">
              <h3 className="font-bold">🧪 Zamanagóy ilim:</h3>
              <p>Házirgi zaman barlıq ilimleriniń (biologiya, zoologiya, sáyasattanıw) klassifikatsiyası Aristotelden baslanǵan. Ol Jer júzindegi "tanıw protsessi"niń eń kámil sistemasın jaratqan.</p>
            </div>
          </div>
        )
      }
    ]
  },
  renaissance: {
    id: 'renaissance',
    title: '🎨 Oyanıw dáwiri (Renaissance)',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('ren-humanism')}>👤 Gumanizm basqıshı</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('ren-neoplatonism')}>🌙 Neoplatonizm basqıshı</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('ren-natural')}>🌍 Naturfilosofiya basqıshı</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('ren-political')}>🏛️ Sáyasiy filosofiya basqıshı</div>
        </div>

        <div className="info-card mt-4 space-y-4">
          <h3 className="text-gold font-bold border-b border-gold/20 pb-2">📖 Oyanıw dáwiriniń tiykarları (XIV–XVI á.):</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-sm"><b>Antroposentrizm:</b> Orayda Quday emes, bálki Adam turadı. Adam óz qudireti hám talantı menen dunyanıń gúltájı retinde qaraladı.</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-sm"><b>Gumanizm:</b> Adamgershilik ideyalarınıń ústemligi. Jeke adamnıń erkinligi hám kámilligi eń joqarı qádriyat dep tınıldı.</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <p className="text-sm"><b>Ilimiy revolyuciya:</b> Tábiyatdı baqlaw hám tájiriybe arqalı úyreniw. Dinniń ilimge tásiriniń kemeyiwi.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'ren-humanism': {
    id: 'ren-humanism',
    title: '👤 Gumanizm basqıshı',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('petrarka')}>✍️ Franchesko Petrarka</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('erasmus')}>✍️ Erasmus Rotterdamlı</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('mirandola')}>📜 Piko della Mirandola</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Gumanizm — Oyanıw dáwiriniń eń dáslepki hám tiykarǵı basqıshı. Bul basqıshda itibar orta ásirlerdiń diniy qatanlıǵınan adamnıń ishki dúnyasına hám sezimlerine burıldı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Máni:</b> Antik mádeniyattı qayta tiklew hám insan talantın bahaǵa minasiyp dep tabıw.</p>
        </div>
      </div>
    )
  },
  'ren-neoplatonism': {
    id: 'ren-neoplatonism',
    title: '🌙 Neoplatonizm basqıshı',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('kuzanskiy')}>🌙 Nikolay Kuzanskiy</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Bul basqıshda Platon filosofiyası xristianlıq dúnyaqarastı oylastırıw ushın qaytadan úyrenildi. Olayda bolmıstıń birligi hám sheksizligi haqqındaǵı oylar turadı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Máni:</b> Dunyanıń Quday menen birligi (panteizmge jol) hám adam aqılınıń sheksiz imkaniyatları.</p>
        </div>
      </div>
    )
  },
  'ren-natural': {
    id: 'ren-natural',
    title: '🌍 Naturfilosofiya basqıshı',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('bruno')}>🌟 Djordano Bruno</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('galiley')}>🔭 Galileo Galiley</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('kopernik')}>🔭 Nikolai Kopernik</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Tábiyat filosofiyası basqıshı dúnanı tanıwdıń ilimiy metodlarına súyenedi. Bul dáwirde kosmologiya hám fizika tarawlarında úlken bet burıslar boldı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Máni:</b> Jerdiń dunya orayı emesligi (geliotsentrizm) hám tábiyatdıń matematikalıq nızamları.</p>
        </div>
      </div>
    )
  },
  'ren-political': {
    id: 'ren-political',
    title: '🏛️ Sáyasiy filosofiya',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('machiavelli')}>👑 Nikkolo Makiavelli</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('more')}>🏝️ Tomas Mor</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>Sáyasattı diniy sheklewlerden azat etiw hám ideal jámiyet qurıw ideyaları payda boldı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Tiykarǵı g'oya:</b> Sáyasat — bul real háreketler hám nátiyjeler tarawı. Sonday-aq, utopiyalıq ideyalar — barlıq adamlar teń hám baxtlı jasaytuǵın jámiyet modellari payda boldı.</p>
        </div>
      </div>
    )
  },
  machiavelli: {
    id: 'machiavelli',
    title: '👑 Nikkolo Makiavelli — Real Sáyasat Atası',
    tabs: [
      { 
        id: 'ma1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Nikkolo Makiavelli</b> (1469–1527) — İtaliyanıń Florentsiya qalasında tuwılǵan sáyasiy oylawshı hám diplomát. Onıń "Húkimdar" (Il Principe) shıǵarması dunya tariyxındaǵı eń tásirli sáyasiy kitaplardan biri esaplanadı.</p>
          </div>
        )
      },
      { 
        id: 'ma2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-red-600">
              <h3 className="font-bold text-red-600">🎯 "Nátiyje quraldı aqlaydı":</h3>
              <p>Makiavelli sáyasattı etikadan ajıratıp qaradı. Húkimdardıń tiykarǵı maqseti — mámleket turaqlılıǵın saqlaw. Maqsetke erisiw ushın barlıq qurallar (hátte qatalhq ta) orınlı dep esaplanadı.</p>
            </div>
            <p className="text-sm">"Húkimdar — hám arıslan (kúsh), hám túlki (hiyle) bolıwı kerek" dep úyretken.</p>
          </div>
        )
      },
      { 
        id: 'ma3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Makiavelli sáyasattı diniy yaki etikalıq ideallar emes, bálki real faktler tiykarında úyreniwdi baslap berdi.</p>
            <div className="info-card bg-red-600/5">
              <h3 className="font-bold">🏟️ Makiavellizm:</h3>
              <p>Bul termin búgingi kúnde maqset jolında hár qanday hiyle-nayińlarǵa barıw degen máni bildiredi. Biz onı sáyasiy realizm hám milliy mámleket ideyasın qáliplestirgeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  bruno: {
    id: 'bruno',
    title: '🌟 Djordano Bruno — Sheksizlik Danıshpanı',
    tabs: [
      { 
        id: 'br1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Djordano Bruno</b> (1548–1600) — İtaliyalık filosof hám aqın. Ol óziniń erkin kózqarasları ushın Shirkew tárepinen quwdalanǵan hám nátiyjede Rimniń "Gúller maydanında" órtep jiberilgen.</p>
          </div>
        )
      },
      { 
        id: 'br2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-500">🌌 Sheksiz Galaktikalar:</h3>
              <p>Bruno Kopernik ideyaların tereńlestirip, Gáhi de Jer emes, bálki Kun de dunyanıń orayı emes, bálki Dunya — sheksiz, onıń san-sanlaǵan Kunleri hám planetaları bar ekenligin aytqan.</p>
            </div>
            <p className="text-sm">Panteizm: "Quday tábiyattan tısqarı barlıq emes, bálki onıń ishki háreketlendiriwshi kúshi" (Deus in rebus).</p>
          </div>
        )
      },
      { 
        id: 'br3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Brunonıń ideyaları zamanagóy kosmologiyanıń payda bolıwına jol ashtı.</p>
            <div className="info-card bg-orange-500/5">
              <h3 className="font-bold">🔥 Ruxıy mártlik:</h3>
              <p>Ol haqıyqat ushın jaraǵan qurbandıń simvolı. Onıń "Sheksizlik haqqında"ǵı oyları bizge dúnyanıń mánisin diniy doǵmalardan erkin halda tushiniwdi úyretti. Biz onı kosmologiyalıq revolyuciya ushın qádirleymiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  erasmus: {
    id: 'erasmus',
    title: '✍️ Erasmus Rotterdamlı — Gumanistler Patshası',
    tabs: [
      { 
        id: 'er1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Desiderius Erasmus</b> (1466–1536) — Niderlandiyalı bilimdan, teolog hám gumanist. Ol "Evropanıń birinshi grajdanı" dep atalǵan hám ómri boyınsha diniy qatanlıqqa qarshı sawatlılıqtı úgitlegen.</p>
          </div>
        )
      },
      { 
        id: 'er2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-600">🤡 "Ápıwayılıkka maqtay":</h3>
              <p>Bul onıń eń meshur satiralıq shıǵarması. Ol jerde jámiyetlik hám diniy nuskawlardı tanıstıradı, "Ápıwayılık" (Stulti) tilinen soylap, haqıyqıy dánishpanlıq qatanlıqta emes, bálki adamgershilik hám sádeliikte ekenligin kórsetedi.</p>
            </div>
            <p className="text-sm">Hristianlıq gumanizmi: Din — qurı rasimler emes, bálki adamnıń etikalyq jetilisiwi bolıwı kerek.</p>
          </div>
        )
      },
      { 
        id: 'er3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Erasmus Jańa Ósietti dáslepki grek tilindegi matınlerin tayarlap, tariyxıy tanqıydshılıqqa tiykar saldı.</p>
            <div className="info-card bg-blue-600/5">
              <h3 className="font-bold">⚖️ Tolerantlıq:</h3>
              <p>Ol diniy hám sáyasiy toptarlar arasında tınıshlıq hám tolerantlıqtı (baǵrıkeńlik) úgitlegen. Biz onı Evropa mádeniyatınıń intellektual birligin qáliplestirgeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  more: {
    id: 'more',
    title: '🏝️ Tomas Mor — Ádalatlı Jámiyet Yaratuwshısı',
    tabs: [
      { 
        id: 'mo1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Tomas Mor</b> (1478–1535) — Angliya kansleri, gumanist hám ádalat kuresshisi. Ol óziniń kózqaraslarınan bas tartpaǵanı ushın Korol Genrih VIII tárepinen ólim jazasınatútilgen kámil tulǵa.</p>
          </div>
        )
      },
      { 
        id: 'mo2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-emerald-500">
              <h3 className="font-bold text-emerald-500">🗺️ "Utopiya":</h3>
              <p>Mor óziniń fantastikalıq "Utopiya" aralında jeke menshiklik bolmaǵan, hárbir adam teń miynet etetuǵın hám barlıq nárseni ádalatlı bólisetuǵın ideal mámleket modelın sızıp berdi.</p>
            </div>
            <p className="text-sm">Jeke menshikti — barlıq jámiyetlik jamanlıqlardıń tamırı dep esaplaǵan.</p>
          </div>
        )
      },
      { 
        id: 'mo3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Tomas Mordıń ideyaları sotsial-filosofiyanıń hám sotsiallıq ádalat ideyasınıń payda bolıwına úlken tásir kórsetti.</p>
            <div className="info-card bg-emerald-500/5">
              <h3 className="font-bold">🚩 Utopiya dástúri:</h3>
              <p>Búgingi kúnde "utopiya" terminin qálipleskeni usı Mor miyneti menen baylanıslı. Ol hámme ushın teń huqıqlıq hám ádalatlı múnásebetler dástúrin baslap berdi. Biz onı insanpárwar jámiyet haqqındaǵı ármanları ushın qádirleymiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  kopernik: {
    id: 'kopernik',
    title: '🔭 Nikolai Kopernik — Aspan Revolyuciyashısı',
    tabs: [
      { 
        id: 'ko1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Nikolai Kopernik</b> (1473–1543) — Polshalı astronom hám filosof. Ol "Aspan deneleriniń aylanıwı haqqında"ǵı miyneti menen 1500 jıllık dästürli dúnyanı ózgertip jiberdi.</p>
          </div>
        )
      },
      { 
        id: 'ko2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-teal-500">
              <h3 className="font-bold text-teal-500">☀️ Geliotsentrizm:</h3>
              <p>Kopernik Jer dunyanıń orayı emes, bálki Kun orayda turatuǵın hám Jer basqa planetalar sıyaqlı onıń átirapında aylanatuǵın sistemasın matematikalıq dálillep berdi.</p>
            </div>
            <p className="text-sm">Bul ashılıw dúnanıń diniy modelin joqqa shıǵardı hám ilimge itibor qaratıwdı talap etti.</p>
          </div>
        )
      },
      { 
        id: 'ko3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Kopernik "Kopernik revolyuciyası" dep atalǵan jańa dáwir ilimine tiykar saldı.</p>
            <div className="info-card bg-teal-500/5">
              <h3 className="font-bold">🌍 Metodologiya:</h3>
              <p>Ol tábiyat hádiyselelerin matematikalıq nızamlar arqalı túsindiriw dástúrin baslap berdi. Biz onı dunjaga bolǵan kózqarasımızdı bütinley ózgertkeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  mirandola: {
    id: 'mirandola',
    title: '📜 Piko della Mirandola — Adam Quwareti',
    tabs: [
      { 
        id: 'mi1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Djovanni Piko della Mirandola</b> (1463–1494) — İtaliyalık danıshpan, gumanist. 23 jasında-aq dunya barlıq bilimlerin birlestiriwge urınǵan "talant iyasi".</p>
          </div>
        )
      },
      { 
        id: 'mi2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-500">🕊️ "Adam qádri haqqında":</h3>
              <p>Onıń boyınsha, Quday adamdı belgili bir táǵdir menen jaratpaǵan, bálki oǵan erkinlik bergen. Adam — ózin-ózi "haywanlıq" dárjesine túsiriwi yaki "perisheler" deńgeyli joqarılatıwı múmkin bolǵan birden-bir varlıq.</p>
            </div>
            <p className="text-sm">Barlıq dinler hám filosofiyalardaǵı "haqıyqat"tıń ózegi — bir ekenligini qorǵadı (Sinkretizm).</p>
          </div>
        )
      },
      { 
        id: 'mi3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Piko gumanizmnıń manipfestin jazdı.</p>
            <div className="info-card bg-purple-500/5">
              <h3 className="font-bold">📈 Erkinlik ideyası:</h3>
              <p>Adamnıń erkin tańlawı haqqındaǵı ideyaları keyingi dáwirlerde "jeke adamnıń huquqları" teoriyasına tiykar boldı. Biz onı insannıń ishki sheksiz quwaretine isengenligi ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  petrarka: {
    id: 'petrarka',
    title: '✍️ Franchesko Petrarka — Gumanizm Atası',
    tabs: [
      { 
        id: 'pe1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Franchesko Petrarka</b> (1304–1374) — Italiyalı ullı aqın hám filosof. Ol Oyanıw dáwiriniń hám gumanistlik mádeniyattıń tiykarshısı retinde qabıllanadı.</p>
          </div>
        )
      },
      { 
        id: 'pe2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-rose-500">
              <h3 className="font-bold text-rose-500">👤 Jeke Adam Orayda:</h3>
              <p>Petrarka itiborın diniy dogmalardan adamnıń jeke sezimlerine, azaplaryna hám ruwxıy izlenislerine burdı. Ol xristianlıqtı adamgershilik menen birlestiriwge urındı.</p>
            </div>
            <p className="text-sm">"Adam — oylaytuǵun hám sezetuǵın gáwhar" dep esaplaǵan hám ishki óz-ózin tanıwdı eń joqarı bilim dep bilgen.</p>
          </div>
        )
      },
      { 
        id: 'pe3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Petrarka antik grek hám rim qoljazbaların úyreniw hám saqlap qalıw dástúrin baslap berdi.</p>
            <div className="info-card bg-rose-500/5">
              <h3 className="font-bold">📚 Gumanistlik mányas:</h3>
              <p>Onıń "Sonnets" (qosıqlar jıynaǵı) hám filosofiyalıq dialógları Evropada jańa "Individuallıq" dáwirin ashtı. Biz onı insanǵa bolǵan jańa kózqarastı qáliplestirgeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  kuzanskiy: {
    id: 'kuzanskiy',
    title: '🌙 Nikolay Kuzanskiy — Sheksizlik Ustazı',
    tabs: [
      { 
        id: 'ku1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Nikolay Kuzanskiy</b> (1401–1464) — nemis filosofi, teolog, matematik hám kardinal. Ol orta ásirler oylawınan jańa dáwir oylawına ótiwdegi eń úlken kópir bolıp esaplanadı.</p>
          </div>
        )
      },
      { 
        id: 'ku2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-sky-600">
              <h3 className="font-bold text-sky-600">🧠 "Bilimli bilmezlik":</h3>
              <p>Ullı haqıyqat (Quday) sheksiz bolǵanı ushın, adam aqılı onı tolıq iyeley almaydı. Biz qanshelli kóp bilsek, ózimizdiń bilmezligimizdi sonshelli tereń tushinemiz (Docta ignorantia).</p>
            </div>
            <p className="text-sm">"Qarama-qarsılıqlardıń sáykesligi": Dunyadaǵı barlıq qarsı nárseler Qudayda birlesedi hám sáykes keledi.</p>
          </div>
        )
      },
      { 
        id: 'ku3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Kuzanskiy dunyanıń sheksizligi haqqındaǵı oyları menen Bruno hám Galileyge tásir kórsetti.</p>
            <div className="info-card bg-sky-600/5">
              <h3 className="font-bold">🌍 Panteizmge jol:</h3>
              <p>Ol Qudaydı barlıq nárseniń ishinde dep qarap, tábiyatdı úyreniwge diniy tús berdi. Biz onı matematikalıq logika hám sheksizlik tushinigini rawajlandırdǵanı ushın qádirleymiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  galiley: {
    id: 'galiley',
    title: '🔭 Galileo Galiley — Ilim Atası',
    tabs: [
      { 
        id: 'ga1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Galileo Galiley</b> (1564–1642) — Italiyalı ullı alım, astronom, fizik hám filosof. Ol dúnanı tanıwdıń tájiriybelik-matematikalıq metodına tiykar salǵan.</p>
          </div>
        )
      },
      { 
        id: 'ga2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-500">📐 Tábiyat — Matematika tilinde:</h3>
              <p>Galiley tábiyatdı diniy tekstler emes, bálki matematikalıq esap-kitaplar hám baqlawlar arqalı úyreniw kerek ekenligin qorǵadı.</p>
            </div>
            <p className="text-sm">"Aytsa da, ol aylanbaqta!" — onıń geliotsentrizm ushın bergen janpıyar kuressi zamanagóy erkin oylawdıń simvolına aylandi.</p>
          </div>
        )
      },
      { 
        id: 'ga3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Teleskop jaratıw hám dástúriy Aristotel fizikasın qatal tınqıydlaw.</p>
            <div className="info-card bg-blue-500/5">
              <h3 className="font-bold">🔬 Zamanagóy metod:</h3>
              <p>Ol ilimiy teoriyalardı tájiriybe menen tekseriw standartın ornatıtı. Biz onı oylawdıń dinden azat bolıwına hám házirgi zaman fizikasınıń jaratılıwına qosqal úlesi ushın qádirlaymiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  modern: {
    id: 'modern',
    title: '🔬 Jańa dáwir (XVII–XIX á.)',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('mod-systems')}>🧠 Ullı sistemalar dáwiri</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('mod-enlightenment')}>💡 Aǵartıwshılıq dáwiri</div>
          <div className="bg-gold/10 border border-gold p-4 text-center rounded-xl font-bold cursor-pointer hover:bg-gold/25 transition-all shadow-md" onClick={() => (window as any).nav?.('mod-german')}>🏛️ Nemis klassik filosofiyası</div>
        </div>

        <div className="info-card mt-4 space-y-4">
          <h3 className="text-gold font-bold border-b border-gold/20 pb-2">📖 Jańa dáwir filosofiyasınıń máni:</h3>
          <p>Jańa dáwir — bul ilimiy-tehnikalıq progresstiń, aqıl-oydıń diniy doǵmalardan tolıq azat bolıwınıń hám dúnyanı tanıwdıń jańa metodologiyasınıń rawajlanıw dáwiri.</p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-sm"><b>Metodologiya:</b> Invariantlıq, Racionalizm hám Empirizm baǵdarları arasındaǵı gúres. Bilimniń deregi tájiriybe me (Bekon) álde aqıl me (Dekart)?</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-sm"><b>Subyektivlik:</b> Adam itibarı "obyekt"ten "subyekt"ke burıldı. "Men oylayman, demek men barman" principi ornatıldı.</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-gold text-dark font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <p className="text-sm"><b>Sotsiallıq teoriya:</b> Jámiyetlik kelisim, tábiyiy huquqlar hám mámleket basqarıwınıń racional modelleri qáliplesti.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'mod-systems': {
    id: 'mod-systems',
    title: '🧠 Ullı sistemalar dáwiri',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('descartes')}>🧠 Rene Dekart</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('bacon')}>🧪 Frensis Bekon</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('hobbes')}>🛡️ Tomas Gobbs</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('spinoza')}>💎 Barux Spinoza</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('locke')}>✍️ Djon Lok</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('leibniz')}>🔢 G.V. Leybnic</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>XVII ásir — batıs filosofiyasında "Ullı sistemalar" dáwiri dep ataladı. Bul dáwirde Dekart, Bekon, Spinoza sıyaqlı danıshpanlar dúnyanıń pútinligi haqqındaǵı kompleksli teoriyalardı (sistemalarnı) jarattı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Tiykarǵı másele:</b> Haqıyqat bilimge erisiwdiń eń tuwrı jolı qaysı?</p>
        </div>
      </div>
    )
  },
  'mod-enlightenment': {
    id: 'mod-enlightenment',
    title: '💡 Aǵartıwshılıq dáwiri',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('berkeley')}>👁️ Djordj Berkliy</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('hume')}>🔍 Devid Yum</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('voltaire')}>✍️ Fransua Volter</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('rousseau')}>🌳 Jan-Jak Russo</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>XVIII ásir — Aǵartıwshılıq dáwiri. Bul dáwirde aqıl-oydıń (Racionalizm) kúshi menen jámiyetti qaranlıqtan hám nadanlıqtan qutqarıw ideyaları rawajlandı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Máni:</b> Bilimli bolıw, erkinlik, teńlik hám mádeniy progress.</p>
        </div>
      </div>
    )
  },
  'mod-german': {
    id: 'mod-german',
    title: '🏛️ Nemis klassik filosofiyası',
    content: (
      <div className="flex flex-col gap-2.5">
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('kant')}>📐 Immanuil Kant</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('fixte')}>🧠 Iogann Fixte</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('shelling')}>🌿 Fridrix Shelling</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('hegel')}>🏗️ Georg Gegel</div>
        <div className="bg-white/5 border border-gold p-4 rounded cursor-pointer hover:bg-white/10" onClick={() => (window as any).nav?.('feyerbax')}>👤 Lyudvig Feyerbax</div>
        <div className="info-card mt-4 space-y-3">
          <h3 className="text-gold font-bold">📜 Ulıwmalıq magʻlumat:</h3>
          <p>XVIII ásirdiń sońı hám XIX ásirdiń bası — filosofiya tariyxınıń eń shıńı. Nemis danıshpanları adam sanası, etika, tábiyat hám dialektika boyınsha klassik teoriyalardan ibarat ullı sistemalarnı jarattı.</p>
          <p className="text-sm border-t border-gold/10 pt-2"><b>Máni:</b> Racional oylawdıń joqarı forması, subyektivlik hám obyektivliktiń sáykesligi hám tariyxıy progress ideyası.</p>
        </div>
      </div>
    )
  },
  descartes: {
    id: 'descartes',
    title: '🧠 Rene Dekart — Racionalizm Atası',
    tabs: [
      { 
        id: 'de1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-indigo-500 pl-3 py-1 bg-indigo-500/5 rounded-r">
              <b>Rene Dekart</b> (1596–1650) — Fransiyalı filosof, matematik hám fizik. Jańa dáwir filosofiyasınan baslap barlıq ilimler poydevorın qaytadan qurıwǵa urınǵan.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-500 list-none flex justify-between items-center">
                  🎓 Bilim alıwı hám sayaxatları
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-500/20 pt-2">
                  <p>Jesuit kolledjinde oqıp, matematikanıń duryustligine hám filosofiyanıń shataspalıǵına hayran qaladı. Keyin áskeriy xızmette bolıp, Evropanı kezip shıǵadı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-500 list-none flex justify-between items-center">
                  📚 Tiykarǵı miynetleri
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-500/20 pt-2">
                  <p>Onıń miynetleri modern oylawdıń baslaması boldı:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="https://archive.org/search.php?query=Discours+de+la+methode+Descartes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Metod haqqında pikirler (1637) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Meditationes+de+prima+philosophia+Descartes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Metafizikalıq oylanıwlar (1641) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Les+Passions+de+l%27ame+Descartes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ruwxtıń qumarları (1649) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'de2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-indigo-500 pl-3 py-1 bg-indigo-500/5 rounded-r">
              Dekart racionalizmge tiykar salıp, dúnanı tanıwdıń matematikalıq metodın usınıs etedi. Onıń filosofiyası "Metodikalıq gúman"dan baslanadı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-500 list-none flex justify-between items-center">
                  1. Metod haqqında pikirler (1637)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-500/20 pt-2">
                  <p>Dekart tanısıwdıń racional metodın islep shıqtı. Onıń metodınıń tiykarı — <b>Metodikalıq gúman</b>. Haqıyqatlıǵı gúmansız bolǵan nárse ǵana bilimniń tiykarı bolıwı kerek.</p>
                  <p>Haqıyqıy dep tek anıq hám ayqın nárseni kerek, quramalı máseleni kishi bólimlerge bóliw, ápiwayıdan quramalıǵa qaray basqıshpa-basqısh ótiw.</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-500 list-none flex justify-between items-center">
                  2. Metafizikalıq oylanıwlar (1641)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-500/20 pt-2">
                  <p>Dekart sánanı (oylawdı) deneden bólek substansiya retinde qaraydı (Dualizm). Oylaw — bul adamnıń eń tiykarǵı máni.</p>
                  <p className="font-bold italic">"Cogito, ergo sum" — Oylayman, demek men barman.</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-500 list-none flex justify-between items-center">
                  3. Ruwxtıń qumarları (1649)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-500/20 pt-2">
                  <p>Bul miynetinde Dekart fiziologiya hám psixologiyanı baylanıstırdı. Ol sezimlerdiń denemizdegi háreketlerge baylanıslı ekenligin túsindirdi.</p>
                  <p>Adam óz qumarların aqıl-oy menen basqarıwı kerek.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'de3', 
        label: 'Fizika', 
        content: (
          <div className="space-y-4">
            <p>Dekart fizikada <b>Mexanitsizm</b> tárepdarı edi. Ol dúnanı materiyadan ibarat úlken bir mexanizm retinde túsindirdi. Materiyanıń tiykarǵı qásiyeti — <b>sozılmalılıq</b> (extensa).</p>
            <div className="info-card bg-indigo-500/5">
               <p>Dúnyada boslıq joq, barlıǵı materiya (efir) menen tolǵan. Háreket impuls arqalı bir deneden ekinshisine ótedi.</p>
            </div>
          </div>
        )
      },
      {
        id: 'de4',
        label: 'Oylaw',
        content: (
          <div className="space-y-4">
            <p>Dekart sánanı (oylawdı) deneden bólek substansiya retinde qaraydı (Dualizm). Oylaw — bul adamnıń eń tiykarǵı máni.</p>
            <div className="info-card border-l-4 border-indigo-500 font-bold text-lg">
              "Cogito, ergo sum" — Oylayman, demek men barman.
            </div>
            <p className="text-sm">Bul dálil sánanıń ózin-ózi uǵınıwınıń dáslepki noqatı.</p>
          </div>
        )
      },
      {
        id: 'de5',
        label: 'Qumarlar',
        content: (
          <div className="space-y-4">
             <p>"Ruwxtıń qumarlar" (Passions of the Soul) miynetinde Dekart fiziologiya hám psixologiyanı baylanıstırdı. Ol sezimlerdiń denemizdegi háreketlerge (ruwxıy samallarǵa) baylanıslı ekenligin túsindirdi.</p>
             <p className="text-sm italic">Adam óz qumarların aqıl-oy menen basqarıwı kerek.</p>
          </div>
        )
      },
      {
        id: 'de6',
        label: 'Tiykarǵı túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-indigo-500/30 rounded">
                <span className="text-indigo-500 font-bold block">Innatizm:</span>
                <p className="text-sm mt-1">Tuwma ideyalar (Quday, matematika) sánamızda dáslep bar.</p>
             </div>
             <div className="p-3 bg-white/5 border border-indigo-500/30 rounded">
                <span className="text-indigo-500 font-bold block">Dualizm:</span>
                <p className="text-sm mt-1">Dúnyanıń eki ǵárezsiz substansiyadan (oylaw hám sozılmalılıq) ibaratlıǵı.</p>
             </div>
          </div>
        )
      }
    ]
  },
  bacon: {
    id: 'bacon',
    title: '🧪 Frensis Bekon — Empirizm Tiykarsısı',
    tabs: [
      { 
        id: 'ba1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-amber-600 pl-3 py-1 bg-amber-600/5 rounded-r">
              <b>Frensis Bekon</b> (1561–1626) — Angliyalı filosof, Lord-kantsler. "Bilim — kúsh" (Scientia potentia est) degen uran menen belgili.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-600 list-none flex justify-between items-center">
                  ⚖️ Sáyasiy karyerasi
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-600/20 pt-2">
                  <p>Lord-kancler lawazımına shekem kóterilgen. Bir waqıttıń ózinde mámleket basqarıwı hám ilimiy izertlewler menen de shuǵıllanǵan.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-600 list-none flex justify-between items-center">
                  📚 Tiykarǵı miynetleri
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-600/20 pt-2">
                  <p>Inflyuentsiyalı shıǵarmaları:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="https://archive.org/search.php?query=Novum+Organum+Francis+Bacon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Jańa Organon (1620) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=The+Advancement+of+Learning+Francis+Bacon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ilimlerdiń qádiri hám ósiwi haqqında (1623) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=New+Atlantis+Francis+Bacon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Jańa Atlantida (1627) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ba2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-amber-600 pl-3 py-1 bg-amber-600/5 rounded-r">
              Bekon empirizmge tiykar salıp, dúnanı tanıwdıń induktiv metodın usınıs etedi. Ol ilim-pánniń jańa dunya qurıwdaǵı kúshine isendi.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-600 list-none flex justify-between items-center">
                  1. Jańa Organon (1620)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-600/20 pt-2">
                  <p>Bekon <b>Induktsiya</b> metodınıń tiykarshısı. Ol Aristotelge qarsı shıǵıp, dúnanı tanıw ushın tek ǵana baqlaw hám tájiriybege súyeniw kerek ekenligin aytadı.</p>
                  <p>Adam aqılın haqıyqattan adastıratuǵın 4 qátelik (Idolalar) haqqında jazǵan.</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-600 list-none flex justify-between items-center">
                  2. Ilimlerdiń qádiri hám ósiwi haqqında (1623)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-600/20 pt-2">
                  <p>Bul miynetinde ilimlerdi klassifikatsiyalastırǵan hám olardıń adamzat jámiyetindegi áhmiyetin túsindirgen.</p>
                  <p className="font-bold">"Bilim — kúsh" (Scientia potentia est).</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-600 list-none flex justify-between items-center">
                  3. Jańa Atlantida (1627)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-600/20 pt-2">
                  <p>Bekon óziniń utopikalıq shıǵarmasında ilim-pánniń húkimdarlıǵı astındaǵı jámiyetti súwretledi. Texnokratiya ideyasınıń dáslepki kórinisi.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ba3', 
        label: 'Tablica', 
        content: (
          <div className="space-y-4">
            <p>Eksperiment nátiyjelerin analizlew ushın Bekon "Ashıw tablicaların" (Tables of Investigation) usInadı:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><b>Barlıq tablicası:</b> Hádiyse bar bolǵan jaǵdaylar.</li>
              <li><b>Joqlıq tablicası:</b> Hádiyse joq bolǵan jaǵdaylar.</li>
              <li><b>Dáreje tablicası:</b> Olar arasındaǵı ózgerisler.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'ba4',
        label: 'Tábiyat',
        content: (
          <div className="space-y-4">
            <p>Bekon boyınsha, tábiyat — bul adamnıń húkimdarlıq obyekti. Biz tábiyatdıń nızamlarına boysındırar ekenbiz, oǵan buyrıq bere alamız.</p>
            <p className="text-sm">Ilimniń maqseti — adamzat ómiriniń qolaylıǵın arttırıw.</p>
          </div>
        )
      },
      {
        id: 'ba5',
        label: 'Jańa Atlantida',
        content: (
          <div className="space-y-4">
            <p>Bekon óziniń utopikalıq shıǵarmasında ilim-pánniń húkimdarlıǵı astındaǵı jámiyetti súwretledi. Onda "Salamon úyi" (alimlar akademiyası) mámleketti basqaradı.</p>
            <p className="text-sm">Bul — texnokratiya ideyasınıń dáslepki kórinisi.</p>
          </div>
        )
      },
      {
        id: 'ba6',
        label: 'Tiykarǵı túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-amber-600/30 rounded">
                <span className="text-amber-600 font-bold block">Idolalar (Butlar):</span>
                <p className="text-sm mt-1">Adam aqılın haqıyqattan adastıratuǵın 4 qátelik (urıs, úńgir, maydan, teatr).</p>
             </div>
             <div className="p-3 bg-white/5 border border-amber-600/30 rounded">
                <span className="text-amber-600 font-bold block">Experimentum crucis:</span>
                <p className="text-sm mt-1">Sheshiwshi eksperiment, haqıyqatdı dálillewshi sınaq.</p>
             </div>
          </div>
        )
      }
    ]
  },
  locke: {
    id: 'locke',
    title: '✍️ Djon Lok — Liberalizm hám Empirizm',
    tabs: [
      { 
        id: 'lo1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-blue-500 pl-3 py-1 bg-blue-500/5 rounded-r">
              <b>Djon Lok</b> (1632–1704) — Angliyalı filosof, pedagog hám mámleketlik isker. Empirizmniń tiykarǵı sistemalstırıwshısı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-500 list-none flex justify-between items-center">
                  🩺 Táwir hám Sáyasat
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-500/20 pt-2">
                  <p>Oksfordta meditsina úyrengen. Lord Shaftsburidiń jeke shıpakeri hám másláhátshisi bolıp islegen, bul onıń sáyasiy kózqaraslarına úlken tásir etken.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-500 list-none flex justify-between items-center">
                  📚 Tiykarǵı miynetleri
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-500/20 pt-2">
                  <p>Fundamental miynetleri:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="https://archive.org/search.php?query=An+Essay+Concerning+Human+Understanding+John+Locke" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Adam aqıl-oyı haqqında tájiriybe (1689) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Two+Treatises+of+Government+John+Locke" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Basqarıw haqqında eki traktat (1689) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'lo2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-blue-500 pl-3 py-1 bg-blue-500/5 rounded-r">
              Lok empirizmniń tiykarǵı sistemalstırıwshısı retinde adam aqılınan tuwma ideyalardı joqqa shıǵaradı hám tájiriybeni hámme nárseniń deregi dep biledi.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-500 list-none flex justify-between items-center">
                  1. Adam aqıl-oyı haqqında tájiriybe (1689)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-500/20 pt-2">
                  <p>Lok Dekarttıń "tuwma ideyalar" teoriyasın tanqıydladı. Adam sánasında dáslepten hesh qanday ideya joq. Sána — bul <b>"taza taxta"</b> (Tabula rasa).</p>
                  <p>Tájiriybe eki túrge bólinedi: Sırtqı (Sezim) hám Ishki (Refleksiya).</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-blue-500 list-none flex justify-between items-center">
                  2. Basqarıw haqqında eki traktat (1689)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-blue-500/20 pt-2">
                  <p>Mámleket — bul adamnıń <b>Ómiri, Azatlıǵı hám Múlkin</b> qorǵaw ushın jaratılǵan. Liberalizm hám hákimiyat bólistiriliwi teoriyası islep shıǵılǵan.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'lo3', 
        label: 'Tájriybe', 
        content: (
          <div className="space-y-4">
            <p>Lok tájiriybeni eki túrge bóledi:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><b>Sırtqı tájiriybe</b> (Sezim): Nárselerdiń qásiyetlerin sezim aǵzalari arqalı qabıllaw.</li>
              <li><b>Ishki tájiriybe</b> (Refleksiya): Sánanıń óz háreketlerin baqlawı.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'lo4',
        label: 'Support',
        content: (
          <div className="space-y-4">
            <p>Sırtqı nárselerdiń bizde payda etetuǵın qásiyetlerin Lok eki dárejege bóledi:</p>
            <ul className="list-decimal pl-5 text-sm space-y-1">
              <li><b>Birlemshi qásiyetler:</b> Nárselerden ayrılmaytuǵın (forma, háreket, san).</li>
              <li><b>Ekilemshi qásiyetler:</b> Bizde payda bolatuǵın sezimler (reń, dám, dawıs).</li>
            </ul>
            <p className="text-sm mt-2">Substansiya — bul usı qásiyetlerdiń "turaǵı" (support), biraq onıń mánisin biz tolıq bile almaymız.</p>
          </div>
        )
      },
      {
        id: 'lo5',
        label: 'Jámiyet hám adam',
        content: (
          <div className="space-y-4">
            <p>Lok — Liberalizmning atası. Adamlar tábiyiy jaǵdayda erkin hám teń. Mámleket — bul adamnıń <b>Ómiri, Azatlıǵı hám Múlkin</b> qorǵaw ushın jaratılǵan.</p>
            <div className="info-card border-l-4 border-blue-600">
               <p className="text-sm">Hákimiyat bólistiriliwi (Nızam shıǵarıwshı hám Atqaruvshı) teoriyasın islep shıqtı.</p>
            </div>
          </div>
        )
      },
      {
        id: 'lo6',
        label: 'Tiykarǵı túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-blue-600/30 rounded">
                <span className="text-blue-500 font-bold block">Tabula rasa:</span>
                <p className="text-sm mt-1">Adam sánasınıń dáslepki "taza taxta" jaǵdayı.</p>
             </div>
             <div className="p-3 bg-white/5 border border-blue-600/30 rounded">
                <span className="text-blue-500 font-bold block">Liberalizm:</span>
                <p className="text-sm mt-1">Jeke azatlıq hám huquqlardı barlıǵınan joqarı qoyıw.</p>
             </div>
          </div>
        )
      }
    ]
  },
  leibniz: {
    id: 'leibniz',
    title: '🔢 G.V. Leybnic — Monadologiya hám Logika',
    tabs: [
      { 
        id: 'lei1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-purple-600 pl-3 py-1 bg-purple-600/5 rounded-r">
              <b>Gotfrid Vilgelm Leybnic</b> (1646–1716) — Nemis filosofı, matematik hám entsiklopediyalı alımı. Ol barlıq ilimlerdi bir sistemada birlestiriwdi arman etken.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-purple-600 list-none flex justify-between items-center">
                  🧠 Universal dahiya
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-purple-600/20 pt-2">
                  <p>Matematikada differentsial hám integral esaplawdı Nyutonnan ǵárezsiz jarattı. Ikkilik sanoq sistemasın (0 hám 1) islep shıqty, bul modern kompyuterlerdiń tıykarı boldı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-purple-600 list-none flex justify-between items-center">
                  📚 Tiykarǵı miynetleri
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-purple-600/20 pt-2">
                  <p>Onıń miynetleri:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="https://archive.org/search.php?query=Theodicee+Leibniz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Teoditsiya (1710) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Monadologie+Leibniz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Monadologiya (1714) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Nouveaux+essais+sur+l%27entendement+humain+Leibniz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Adam aqıl-oyı haqqında jańa oylawlar (1704) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'lei2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-purple-600 pl-3 py-1 bg-purple-600/5 rounded-r">
              Leybnic racionalizm dástúrin dawam ettirip, dúnanıń ruwxıy atomlardan (monadalardan) ibaratlıǵın hám koinottaǵı aldınnan ornatılǵan garmoniyanı túsindirdi.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-purple-500 list-none flex justify-between items-center">
                  1. Monadologiya (1714)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-purple-600/20 pt-2">
                  <p>Dúnyanıń tiykarı — <b>Monadalar</b> (ruwxıy atomlar). Olar — bólinbeytuǵın, óz-ózinen bar bolǵan ruwxıy birlikler.</p>
                  <p>Barlıq monadalar arasında Quday tárepinen ornatılǵan garmoniya bar.</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-purple-500 list-none flex justify-between items-center">
                  2. Teoditsiya (1710)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-purple-600/20 pt-2">
                  <p>Qudaydı aqlaw teoriyası. "Bul dunya — barlıq múmkin bolǵan dunyalarduń eń jaqsısı". Jamánlıq bolsa ulıwma garmoniyanıń bir bólegi.</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-purple-500 list-none flex justify-between items-center">
                  3. Adam aqıl-oyı haqqında jańa oylawlar (1704)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-purple-600/20 pt-2">
                  <p>Loktıń empirizmine qarsı jazılǵan. Leybnic: "Sánada aqıldıń ózinen basqa, aldınnan hesh nárse joq" dep dálilledi.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'lei3', 
        label: 'Monadalar tártibi', 
        content: (
          <div className="space-y-4">
            <p>Dúnyanıń tiykarı — materiallıq atomlar emes, bálki ruwxıy atomlar, yaǵnıy <b>Monadalar</b>dır. Monadalar — bul óz-ózinen bar bolǵan, "aynaları hám esikleri joq" ruwxıy birllikler.</p>
            <div className="info-card border-l-4 border-purple-600">
               <p className="text-sm">Barlıq monadalar arasında <b>Aldınnan ornatılǵan garmoniya</b> (Pre-established harmony) bar.</p>
            </div>
          </div>
        )
      },
      {
        id: 'lei4',
        label: 'Etika',
        content: (
          <div className="space-y-4">
            <p>Leybnic boyınsha, biz jasap atırǵan dunya — <b>"Barlıq múmkin bolǵan dunyalardıń eń jaqsısı"</b>. Quday dúnanı jaratqanda eń racional hám garmoniyalı varianttı tańlaǵan.</p>
            <p className="text-sm">Jamánlıqtıń barlıǵı — bul ulıwma garmoniyanıń bir bólegi hám adam erkinliginiń nátiyjesi (Teoditsiya).</p>
          </div>
        )
      },
      {
        id: 'lei5',
        label: 'Tiykarǵı túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-purple-600/30 rounded">
                <span className="text-purple-500 font-bold block">Monada:</span>
                <p className="text-sm mt-1">Dúnyanıń dáslepki, bólinbeytuǵın ruwxıy birligi.</p>
             </div>
             <div className="p-3 bg-white/5 border border-purple-600/30 rounded">
                <span className="text-purple-500 font-bold block">Teoditsiya:</span>
                <p className="text-sm mt-1">"Qudaydı aqlaw" — dunyaǵa jamánlıqtıń mánisin túsindiriw.</p>
             </div>
          </div>
        )
      }
    ]
  },
  berkeley: {
    id: 'berkeley',
    title: '👁️ Djordj Berkliy — Subyektiv Idealizm',
    tabs: [
      { 
        id: 'be1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-cyan-600 pl-3 py-1 bg-cyan-600/5 rounded-r">
              <b>Djordj Berkliy</b> (1685–1753) — Irlandiyalı filosof hám episkop. Onıń filosofiyası <b>"Esse est percipi"</b> (Bar bolıw — bul qabıllanıw bolatınlıǵı) principiine tiykarlanǵan.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-cyan-600 list-none flex justify-between items-center">
                  🏝️ Amerika missiyası
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-cyan-600/20 pt-2">
                  <p>Berkliy Amerikada (Bermuda atawları) kolledj ashıw armanı menen jasap, bir neshe jıl sayaxat etken. Ol jerdegi tálim hám mádeniyatqa úlken tásir kórsetken (Kaliforniya universiteti Berkliy onıń atına qoyılǵan).</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-cyan-600 list-none flex justify-between items-center">
                  📚 Tiykarǵı shıǵarmaları
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-cyan-600/20 pt-2">
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <a href="https://archive.org/search.php?query=A+Treatise+Concerning+the+Principles+of+Human+Knowledge+Berkeley" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Adam biliwiniń prinsipleri haqqında traktat (1710) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Three+Dialogues+between+Hylas+and+Philonous+Berkeley" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Gilas hám Filonus arasındaǵı úsh söylesiw (1713) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'be2', 
        label: 'Birlemshi hám ekilemshi qásiyetler', 
        content: (
          <div className="space-y-4">
            <p>Berkliy Loktıń qásiyetlerdi bóliwin tanqıydladı. Ol hámme qásiyetler (forma da, reń de) tek ǵana subyekttiń sánasında bar ekenligin dálilledi.</p>
            <div className="info-card border-l-4 border-cyan-600">
               <p className="text-sm">Nárseler — bul sezimlerdiń jıyındısı (Kompleks sensatsiyalar). Sánadan sirtqı materiallıq dúnya joq.</p>
            </div>
          </div>
        )
      },
      {
        id: 'be3',
        label: 'Tiykarǵı túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-cyan-600/30 rounded">
                <span className="text-cyan-500 font-bold block">Esse est percipi:</span>
                <p className="text-sm mt-1">"Bar bolıw — qabıllanıw demek". Bir nárse kimdir oǵan qarap turǵanda ǵana bar boladı.</p>
             </div>
             <div className="p-3 bg-white/5 border border-cyan-600/30 rounded">
                <span className="text-cyan-500 font-bold block">Idealizm:</span>
                <p className="text-sm mt-1">Dúnyanıń máni — adam sánasındaǵı sezimler ekenligi haqqındaǵı teoriya.</p>
             </div>
          </div>
        )
      }
    ]
  },
  hume: {
    id: 'hume',
    title: '🔍 Devid Yum — Skeptitsizm hám Agnostitsizm',
    tabs: [
      { 
        id: 'hu1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-amber-700 pl-3 py-1 bg-amber-700/5 rounded-r">
              <b>Devid Yum</b> (1711–1776) — Shotlandiyalı filosof, tariyxshı hám ekonomist. Britaniya empirizmining radikal wákili.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-700 list-none flex justify-between items-center">
                  🔍 Alım hám Diplomat
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-amber-700/20 pt-2">
                  <p>Yum bibliotekar hám diplomat bolıp islegen. Onıń "Angliya tariyxı" miyneti onı óz dáwiriniń eń tanımalı tariyxshısına aylandırdı. Ol ózi "adamdı hámme nárseniń ólshemi" dep biliwdi usınıs etken.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-amber-700 list-none flex justify-between items-center">
                  📚 Tiykarǵı shıǵarmaları
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-amber-700/20 pt-2">
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <a href="https://archive.org/search.php?query=A+Treatise+of+Human+Nature+David+Hume" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Adam tábiyatı haqqında traktat (1739) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=An+Enquiry+Concerning+Human+Understanding+David+Hume" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Adam biliwi haqqında izleniwler (1748) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'hu2', 
        label: 'Biliw processi', 
        content: (
          <div className="space-y-4">
            <p>Yum sánadagı barlıq mazmundı eki túrge bóledi: <b>Tásirler</b> (Impressions) hám <b>Ideyalar</b> (Ideas). Bilim sezimlerden kelip shıǵadı, biraq biz nárselerdiń haqıyqıy mánisin bile almaymız.</p>
          </div>
        )
      },
      { 
        id: 'hu3', 
        label: 'Sebeplilik teoriyası', 
        content: (
          <div className="space-y-4">
            <p>Yum sebeplilik baylanısın tanqıydladı. Biz tek bir hádiyseniń ekinshisinen keyin keletuǵının kóremiz, biraq olar arasındaǵı zárúrli baylanıstı sezimler arqalı dálilley almaymız.</p>
            <div className="info-card border-l-4 border-rose-600">
               <p className="text-sm">Sebeplilik — bul tek qana bizdiń psixologiyalıq <b>ádetimiz</b> (habit).</p>
            </div>
          </div>
        )
      },
      {
        id: 'hu4',
        label: 'Etika',
        content: (
          <div className="space-y-4">
            <p>Yumnıń etikası sezimlerge (emociyalara) tiykarlanǵan. Jaqsı hám jamán — bul aqıl-oydıń dálili emes, bálki simpatiya sezimidir.</p>
          </div>
        )
      },
      {
        id: 'hu5',
        label: 'Jámiyet',
        content: (
          <div className="space-y-4">
            <p>Jámiyet mútájlikler hám adamlar arasındaǵı ortaq mápler (utilitarizm) tiykarında qáliplesedi.</p>
          </div>
        )
      },
      {
        id: 'hu6',
        label: 'Tiykarǵı túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-rose-600/30 rounded">
                <span className="text-rose-500 font-bold block">Skeptitsizm:</span>
                <p className="text-sm mt-1">Dúnyanı hám onıń nızamlılıqların tolıq tanıw múmkin ekenligine gúman menen qaraw.</p>
             </div>
             <div className="p-3 bg-white/5 border border-rose-600/30 rounded">
                <span className="text-rose-500 font-bold block">Agnostitsizm:</span>
                <p className="text-sm mt-1">Dúnyanıń obyektiv mánisin biliw qabiletiniń sheklengenligi.</p>
             </div>
          </div>
        )
      }
    ]
  },
  kant: {
    id: 'kant',
    title: '📐 Immanuil Kant — Tanqıydiy Filosofiya Orayı',
    tabs: [
      { 
        id: 'ka1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-orange-600 pl-3 py-1 bg-orange-600/5 rounded-r">
              <b>Immanuil Kant</b> (1724–1804) — Nemis klassik filosofiyasınıń tiykarshısı. Ol Kyonigsberg qalasında tuwılǵan hám pútin ómirin sol jerde ilimge baǵıshlaǵan. Onıń dóretiwshiligi "Tanqıydiy basqısh"qa ótkeriliwi menen dúnya oylawın ózgertti.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-orange-600 list-none flex justify-between items-center">
                  ⏰ Kyonigsbergtıń "saatı"
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-orange-600/20 pt-2">
                  <p>Kant óziniń turaqlı tártibi menen tanılǵan. Adamlar óz saatların onıń kúndelikli sayamanǵa shıǵıwına qarap toǵırlaytuǵın bolǵan. Onıń barlıq ómeri ilim hám oylawǵa baǵıshlandí.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-orange-600 list-none flex justify-between items-center">
                  📚 Tiykarǵı shıǵarmaları
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-orange-600/20 pt-2">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      <a href="https://archive.org/search.php?query=Critique+of+Pure+Reason+Immanuel+Kant" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Taza aqıldıń sınawlaǵı" (1781) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Critique+of+Practical+Reason+Immanuel+Kant" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Ámeliy aqıldıń sınawlaǵı" (1788) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Critique+of+Judgement+Immanuel+Kant" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Pikir qabiletiniń sınawlaǵı" (1790) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ka2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-gold pl-3 py-1 bg-gold/5 rounded-r">
              Kant filosofiyası "Koperniksha burılıs" jasatı. Ol itibarın sırtqı dúnyadan adamnıń bilimmendirlik (tanıw) qábiletiniń ózine qarattı. Onıń táliymatı úsh tiykarlı miynet arqalı túsindiriledi:
            </p>

            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-orange-600 list-none flex justify-between items-center">
                  1. Taza aqıldıń sınawlaǵı (1781)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-orange-600/20 pt-2">
                  <p>Bul kitapta Kant adam aqılınıń múmkinshiliklerin úyrenedi. Ol <b>"Ózi-ózindegi nárse" (Ding an sich)</b> túsinigin alǵa súredi.</p>
                  <p>Biz nárselerdiń mánisin (noumenlar) emes, bálki bizge kóriniwin (fenomenlar) ǵana bile alamız. Bilim — tájiriybe (a posteriori) hám oylaw formaları (a priori) sintezinen ibarat.</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-orange-600 list-none flex justify-between items-center">
                  2. Ámeliy aqıldıń sınawlaǵı (1788)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-orange-600/20 pt-2">
                  <p>Etika hám ádep-ikramlıq máselesi orayǵa qoyılǵan. Kant <b>"Kategoriyalıq imperativ"</b> nızamın islep shıqtı.</p>
                  <p><i>"Sonday háreket et, seniń háreketleriń ulıwmalıq nızamǵa aylansın"</i>. Adamgershilik — bul máp-múmkinshiliksiz jaǵımlılıq. Ol ilim (aqıl) hám etika (erkinlik) arasındaǵı kópir sıpatında "kórkem óner"di kórsetedi.</p>
                </div>
              </details>

              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-orange-600 list-none flex justify-between items-center">
                  3. Pikir qabiletiniń sınawlaǵı (1790)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-orange-600/20 pt-2">
                  <p>Bul miynetinde Kant estetika (gózzallıq) hám tábiyatdıń maqsetliligi haqqında jazadı.</p>
                  <p>Gózzallıq — bul máp-múmkinshiliksiz jaǵımlılıq. Ol ilim (aqıl) hám etika (erkinlik) arasındaǵı kópir sıpatında "kórkem óner"di kórsetedi.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'ka3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Kant filosofiyanı dogmatizmlik hám skeptitsizmlik qápelerinen qutqarıp, "tanqıydiy" metodtı ornatıtı. Ol dúnanı tanıwdıń sánamıza baylanıslı ekenligin dálilledi.</p>
            <div className="info-card bg-orange-600/5">
              <h3 className="font-bold">⚖️ Gumanizm hám Huquq:</h3>
              <p>Adamdı hesh qashan maqsetke erisiw quralı retinde qollanbaw kerek, ol — maqsetniń ózi. Bul ideya házirgi zaman huquqıy mámleket hám insan huquqları teoriyasınıń poydevorı boldı.</p>
            </div>
          </div>
        )
      },
      {
        id: 'ka4',
        label: 'Túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-orange-600/30 rounded">
                <span className="text-orange-600 font-bold block">A priori:</span>
                <p className="text-sm mt-1">Tájiriybege shekemgi, tájiriybege baylanıssız bilim (mısalı, matematika).</p>
             </div>
             <div className="p-3 bg-white/5 border border-orange-600/30 rounded">
                <span className="text-orange-600 font-bold block">A posteriori:</span>
                <p className="text-sm mt-1">Tájiriybe arqalı erisiletuǵın, sezimlerge súyenetuǵın bilim.</p>
             </div>
             <div className="p-3 bg-white/5 border border-orange-600/30 rounded">
                <span className="text-orange-600 font-bold block">Antinomiya:</span>
                <p className="text-sm mt-1">Aqıl shegarasına kelgende payda bolatuǵın eki bir-birine qarsı, biraq birdey dálillense bolatuǵın pikirdit (mısalı: dunya shekli — dunya sheksiz).</p>
             </div>
          </div>
        )
      }
    ]
  },
  fixte: {
    id: 'fixte',
    title: '🧠 Iogann Fixte — Subyektiv Idealizm',
    tabs: [
      { 
        id: 'fi1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-lime-600 pl-3 py-1 bg-lime-600/5 rounded-r">
              <b>Iogann Gotlib Fixte</b> (1762–1814) — Kanttdıń shákirti, nemis idealizminiń úlken wákili. Ol filosofiyanı qatal sistemaǵa aylandırıwǵa urındı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-lime-600 list-none flex justify-between items-center">
                  👤 Sánanıń aktivligi
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-lime-600/20 pt-2">
                  <p>Fixte boyınsha, "Men" passiv baqlawshı emes, bálki dunya hám óz-ózinen jaratıwshı kúsh. Onıń filosofiyası "Aktivlik" printsipine tiykarlanǵan.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-lime-600 list-none flex justify-between items-center">
                  📚 Tiykarǵı shıǵarmaları
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-lime-600/20 pt-2">
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <a href="https://archive.org/search.php?query=Foundations+of+Natural+Right+Fichte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Ilimniń tálimatı" (1794) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=The+Vocation+of+Man+Fichte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Adamnıń maqseti" (1800) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Addresses+to+the+German+Nation+Fichte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Nemis milletine múrájatlar" (1808) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'fi2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-lime-600">
              <h3 className="font-bold text-lime-600">👤 "Men" (Das Ich) filosofiyası:</h3>
              <p>Fixte boyınsha, barlıq nárseniń baslanǵıshı — "Men"dir. "Men" ózin-ózi uǵınadı hám "Men emes"ti (sirtqı dúnanı) jaratadı. Dúnyadaǵı hárbir nárse adam sánasınıń iskerligi jemisidir.</p>
            </div>
            <p className="text-sm">Filosofiya — bul passiv baqlaw emes, bálki aktiv háreket. Adam — oz erkinligi ushın gúresiwshi kúsh.</p>
          </div>
        )
      }
    ]
  },
  voltaire: {
    id: 'voltaire',
    title: '🕯️ Fransua Volter — Aǵartıwshılıq Dáwiri',
    tabs: [
      { 
        id: 'vo1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-yellow-600 pl-3 py-1 bg-yellow-600/5 rounded-r">
              <b>Fransua-Mari Arue (Volter)</b> (1694–1778) — Fransiyalı aqın, filosof hám publitsist. Evropa "aqıl-oyı patshası"na aylandı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-yellow-600 list-none flex justify-between items-center">
                  🕯️ Aǵartıwshılıq gúreskeri
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-yellow-600/20 pt-2">
                  <p>Volter diniy fanatizmge hám qatanlıqtı tanqıydlaǵan shıǵarması.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-yellow-600 list-none flex justify-between items-center">
                  📚 Tiykarǵı miynetleri
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-yellow-600/20 pt-2">
                  <p>Onıń shıǵarmaları:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="https://archive.org/search.php?query=Lettres+philosophiques+Voltaire" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Filosofiyalıq xatlar (1734) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Candide+Voltaire" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Kandid yaki Optimizm (1759) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Dictionnaire+philosophique+Voltaire" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Filosofiyalıq sózlik (1764) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'vo2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-yellow-600 pl-3 py-1 bg-yellow-600/5 rounded-r">
              Volter aǵartıwshılıq ideyaların propaganda etip, adamzattıń diniy doǵmalardan azat bolıwı hám aqıl-oy ústinligi ushın gúrestsı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-yellow-600 list-none flex justify-between items-center">
                  1. Filosofiyalıq xatlar (1734)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-yellow-600/20 pt-2">
                  <p>Angliyanıń sáyasiy dázimi hám erkinligin maqtanıp, Fransiyadaǵı qatanlıqtı tanqıydlaǵan shıǵarması.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-yellow-600 list-none flex justify-between items-center">
                  2. Kandid yaki Optimizm (1759)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-yellow-600/20 pt-2">
                  <p>Leybnicniń optimizmine satiralıq tanqıydlaǵan meshur qısqa romanı.</p>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'vo3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Volter tariyxtı ilimiy hám sotsiallıq progress kózqarasınan úyreniwdi baslap berdi. Ol jámiyetti reforma etiw múmkin ekenligine isendi.</p>
            <div className="info-card bg-yellow-600/5">
              <h3 className="font-bold">🕯️ Aqıl-oy progressi:</h3>
              <p>Volter Fransuz revolyuciyasınıń ideologiyalıq tayarlıqshısı boldı. Biz onı gumanizm hám erkin oylaw ushın qádirlaymiz.</p>
            </div>
          </div>
        )
      },
      {
        id: 'vo4',
        label: 'Túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-yellow-600/30 rounded">
                <span className="text-yellow-600 font-bold block">Tolerantlıq:</span>
                <p className="text-sm mt-1">Basqa adamnıń pikirine hám isenimine tózimlilik penen qaraw.</p>
             </div>
             <div className="p-3 bg-white/5 border border-yellow-600/30 rounded">
                <span className="text-yellow-600 font-bold block">Progress:</span>
                <p className="text-sm mt-1">Ilim hám aqıl-oydıń rawajlanıwı arqalı jámiyettiń jaqsılanıwı.</p>
             </div>
          </div>
        )
      }
    ]
  },
  feyerbax: {
    id: 'feyerbax',
    title: '👤 Lyudvig Feyerbax — Adam Oraylıq Materializm',
    tabs: [
      { 
        id: 'fey1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-red-500 pl-3 py-1 bg-red-500/5 rounded-r">
              <b>Lyudvig Andreas Feyerbax</b> (1804–1872) — nemis filosofı-materialisti. Ol nemis klassikalıq filosofiyasın materializm menen juwmaqladı.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-red-500 list-none flex justify-between items-center">
                  🕊️ Din tanqıydshısı
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-red-500/20 pt-2">
                  <p>Feyerbax "Xristianlıqtıń máni" miynetinde dindi psixologiyalıq kózqarastan analizledi. Ol "Adam adamǵa Quday bolsın" degen ideyanı alǵa súrdi.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-red-500 list-none flex justify-between items-center">
                  📚 Tiykarǵı shıǵarmaları
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-red-500/20 pt-2">
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <a href="https://archive.org/search.php?query=The+Essence+of+Christianity+Feuerbach" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Xristianlıqtıń máni" (1841) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=Principles+of+the+Philosophy+of+the+Future+Feuerbach" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Bolajaq filosofiya tiykarları" (1843) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'fey2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-red-500">
              <h3 className="font-bold text-red-500">👤 Adam — Filosofiyanıń birden-bir obyekti:</h3>
              <p>Feyerbax boyınsha, "Quday adamdı jaratpaǵan, bálki adam óziniń eń jaqsı qásiyetlerin Qudayǵa júklep, onı ózi jaratqan". Biz idealistlik oylardan real, deneli Adamǵa qaytıwımız kerek.</p>
            </div>
            <p className="text-sm">Adam — tábiyatdıń bólegi. Onıń sezimleri hám háreketleri filosofiyanıń tiykarı bolıwı kerek.</p>
          </div>
        )
      },
      { 
        id: 'fey3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Feyerbax dindi sotsiallıq hám psixologiyalıq nárse retinde túsindirdi. Onıń miynetleri Marks hám Engelske úlken tásir kórsetti.</p>
            <div className="info-card bg-red-500/5">
              <h3 className="font-bold">🤝 Súyip jasaw etikası:</h3>
              <p>Ol "Adam adam ushın Quday" dep esapladı hám adamlardıń bir-birin súyiwi eń joqarı qádriyatı ekenligin ayttı. Biz onı gumanizm hám real oylawdı qorǵaǵanı ushın úyrenemiz.</p>
            </div>
          </div>
        )
      },
      {
        id: 'fey4',
        label: 'Túsinikler',
        content: (
          <div className="grid grid-cols-1 gap-3">
             <div className="p-3 bg-white/5 border border-red-500/30 rounded">
                <span className="text-red-500 font-bold block">Antropologizm:</span>
                <p className="text-sm mt-1">Filosofiyanıń orayına real, biologiyalıq hám materiallıq adamdı qoyıw.</p>
             </div>
             <div className="p-3 bg-white/5 border border-red-500/30 rounded">
                <span className="text-red-500 font-bold block">Materializm:</span>
                <p className="text-sm mt-1">Dúnyanıń tiykarı materiallıq bolmıs ekenligi haqqındaǵı kózqaras.</p>
             </div>
             <div className="p-3 bg-white/5 border border-red-500/30 rounded">
                <span className="text-red-500 font-bold block">Alienaciya (Jótlewi):</span>
                <p className="text-sm mt-1">Adamdıń óz kúsh hám qásiyetlerin dinge júklep, ózinen ajıratıp qarawı.</p>
             </div>
          </div>
        )
      }
    ]
  },
  spinoza: {
    id: 'spinoza',
    title: '💎 Barux Spinoza — Panteizm Shıńı',
    tabs: [
      { 
        id: 'sp1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Barux Spinoza</b> (1632–1677) — Amsterdamda tuwılǵan, evrey mektebinden "erkin oylawı" ushın harydalǵan (afedra) alım. Onıń turmısı júdá sapaatlı bolıp, ózi kerekli pullı optikalıq linzalardı shılıp tapqan.</p>
          </div>
        )
      },
      { 
        id: 'sp2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-cyan-500 pl-3 py-1 bg-cyan-500/5 rounded-r">
              Spinoza monizm baǵdarınıń eń úlken wákili. Ol Quday hám Tábiyattı bir pútinlikte (Panteizm) túsindirgen.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-cyan-500 list-none flex justify-between items-center">
                  🌌 "Deus sive Natura" (Quday yaki Tábiyat)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-cyan-500/20 pt-2">
                  <p>Dúnyada tek bir ǵana <b>Substansiya</b> bar, ol da bolsa Quday. Quday dúnnyanıń sirtında emes, bálki dunya — bul Qudaydıń ózi. Tábiyat — bul "jaratıwshı tábiyat" hám "jaratılǵan tábiyat"tan ibarat.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-cyan-500 list-none flex justify-between items-center">
                  📚 Etika (Geometriyalıq usılda)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-cyan-500/20 pt-2">
                  <p>Onıń eń úlken miyneti. Bunda etika nızamları geometriya teoremalari sıyaqlı isbatlanǵan. Spinoza ushın baxıt — bul "Qudaydı intellektual súyiw" (Amor intellectualis Dei) bolıp tabıladı.</p>
                  <a href="https://archive.org/search.php?query=Ethics+Spinoza" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Etika ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'sp3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Spinoza sáyasiy filosofıyada da úlken rol oynadı. Ol erkinlik haqqındaǵı teoriyanı (Determinism ishindegi erkinlik) jaratqan.</p>
            <div className="info-card bg-cyan-500/5">
              <h3 className="font-bold">⚖️ Erkinlik — bul túsunilgen zárúrlik:</h3>
              <p>Adam nárselerdiń sebeplerin túsingende ǵana erkin boladı. Biz onı dúnnyanıń materiallıq hám ruwxıy pútinligin túsindirgeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  shelling: {
    id: 'shelling',
    title: '🌿 Fridrix Shelling — Tábiyat Filosofı',
    tabs: [
      { 
        id: 'sh1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Fridrix Vilgelm Shelling</b> (1775–1854) — nemis idealizminiń úlken wákilleriniń biri. Ol júdá jaslayın (23 jasında) professor bolǵan hám tábiyat penen ruxdı birlestiriwge urınǵan.</p>
          </div>
        )
      },
      { 
        id: 'sh2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <div className="info-card border-l-4 border-green-600">
              <h3 className="font-bold text-green-600">🌿 Tábiyat — bul "kózge kórinetuǵın ruh":</h3>
              <p>Shelling boyınsha, tábiyaat jansız materia emes, bálki sánasız rawajlanıp atırǵan ruh. Ruh bolsa "kózge kóriniytun bolmaǵan tábiyat". Olar bir-biriniń eki tárepi.</p>
            </div>
            <p className="text-sm">Ol "Absolyut sáykeslik" (Identicality) teoriyasın jaratıp, dunya birpútin ruwxıy háreket ekenligin dálilledi.</p>
          </div>
        )
      }
    ]
  },
  hegel: {
    id: 'hegel',
    title: '🏗️ Georg Gegel — Dialektika Shıńı',
    tabs: [
      { 
        id: 'he1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p><b>Georg Vilgelm Fridrix Gegel</b> (1770–1831) — batıs filosofiyası tariyxındaǵı eń úlken hám qıyın sistemalardıń birin jaratqan danıshpan. Ol búkil dúnnyanı "Muthlaq Ruwxtıń" rawajlanıwı sıpatında túsindirdi.</p>
          </div>
        )
      },
      { 
        id: 'he2', 
        label: 'Filosofiyalıq kózqarasları', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-indigo-600 pl-3 py-1 bg-indigo-600/5 rounded-r">
              "Hámme nárse racionaldı, hámme racional nárse reallı" degen meshur printsipi bar. Ol dialektikanı ilimiy metod retinde joqarı deńgeygge jetkerdi.
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-600 list-none flex justify-between items-center">
                  🌀 Triada (Rawajlanıw basqıshı)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-indigo-600/20 pt-2">
                  <p>Hárbir nárse úsh basqıshta rawajlanadı: <b>Tezis</b> (tastıyıqlaw) → <b>Antitezis</b> (biykarlaw) → <b>Sintez</b> (birlestiriw). Bul spiral tárizli rawajlanıw dunya tariyxınıń nızamı.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-indigo-600 list-none flex justify-between items-center">
                  📚 Ruwx fenomenologiyası (1807)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-indigo-600/20 pt-2">
                  <p>Onıń eń meshur hám qıyın miyneti. Bunda insan sánasınıń ápiwayı sezimlerden "Muthlaq bilimge" shekemgi jolı túsindirilgen.</p>
                  <a href="https://archive.org/search.php?query=Phenomenology+of+Spirit+Hegel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block mt-1">Ruwx fenomenologiyası ↗</a>
                </div>
              </details>
            </div>
          </div>
        )
      },
      { 
        id: 'he3', 
        label: 'Ilimge qosqan úlesi', 
        content: (
          <div className="space-y-4">
            <p>Gegel tariyx filosofiyası, huquq filosofiyası hám estetika boyınsha klassikalıq sistemalardı jarattı.</p>
            <div className="info-card bg-indigo-600/5">
              <h3 className="font-bold">🎭 Panlogizm:</h3>
              <p>Ol dúnnyanı "Logikalıq aqıldıń sáwleleniwi" dep bildi. Biz onı rawajlanıwdıń ulıwmalasqan nızamların (Dialektika) ashıp bergeni ushın úyrenemiz.</p>
            </div>
          </div>
        )
      }
    ]
  },
  contemporary: {
    id: 'contemporary',
    title: '🏙️ Házirgi zaman filosofiyası (XX–XXI á.)',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-orange-500/10 border border-orange-400 p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-orange-500/20 transition-all group" onClick={() => (window as any).nav?.('existentialism')}>
            <div>
              <h3 className="text-xl font-bold text-orange-400">🚪 Ekzistentsializm</h3>
              <p className="text-xs opacity-60">Jasaw mánisi hám erkinlik</p>
            </div>
            <div className="text-orange-400 opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
          <div className="bg-sky-500/10 border border-sky-400 p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-sky-500/20 transition-all group" onClick={() => (window as any).nav?.('phenomenology')}>
            <div>
              <h3 className="text-xl font-bold text-sky-400">🌀 Fenomenologiya</h3>
              <p className="text-xs opacity-60">Sána dúzilisi hám tájiriybe</p>
            </div>
            <div className="text-sky-400 opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
          <div className="bg-purple-500/10 border border-purple-400 p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-purple-500/20 transition-all group" onClick={() => (window as any).nav?.('positivism')}>
            <div>
              <h3 className="text-xl font-bold text-purple-400">🔬 Pozitivizm hám Analitika</h3>
              <p className="text-xs opacity-60">Ilimiy til hám mantiq</p>
            </div>
            <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-all font-bold">→</div>
          </div>
        </div>

        <div className="info-card mt-4 space-y-4 bg-white/5 border-white/10">
          <h3 className="text-gold font-bold border-b border-gold/20 pb-2">🌟 Házirgi zaman oylawı:</h3>
          <p className="text-sm leading-relaxed text-justify">
            Házirgi zaman filosofiyası Klassikalıq filosofiyadan "krizisler" arqalı ajıralıp shıqtı. Ol endi ullı sistemalardan emes, bálki <b>insannıń konkret problemalarınan</b>, tilinen, oylawındaǵı qáte-kemshiliklerden hám pánniń shegarlarınan baslanadı.
          </p>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-3 bg-white/5 rounded border-l-2 border-gold">
               <p className="text-xs"><b>Irracionalizm:</b> Aqıl hám logikadan tısqarıdaǵı erik, sezim hám túslerdi úyreniw.</p>
            </div>
            <div className="p-3 bg-white/5 rounded border-l-2 border-gold">
               <p className="text-xs"><b>Postmodernizm:</b> Ulıwmalıq haqıyqatlardı biykarlaw hám hár túrli kózqaraslardıń teńligin tanlaw.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  hobbes: {
    id: 'hobbes',
    title: '🛡️ Tomas Gobbs — Leviatan hám Mámleket',
    tabs: [
      { 
        id: 'ho1', 
        label: 'Ómiri hám dóretiwshiligi', 
        content: (
          <div className="space-y-4">
            <p className="text-justify border-l-4 border-slate-600 pl-3 py-1 bg-slate-600/5 rounded-r">
              <b>Tomas Gobbs</b> (1588–1679) — Angliyalı filosof, sotsiallıq kelisim teoriyasınıń tiykarshılarınıń biri. Ol ózin "qorqınısh penen egis" dep ataǵan (İspan Armadası kelgen jılı tuwılǵanı ushın).
            </p>
            <div className="space-y-3">
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-slate-600 list-none flex justify-between items-center">
                  🛡️ Leviatan (1651)
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm space-y-2 border-t border-slate-600/20 pt-2">
                  <p>Onıń eń meshur miyneti. Bunda mámleket "Ullı Leviatan" — adamlar óz azatlıǵın tınıshlıq ushın tapsırǵan quwatlı sistema sıpatında súwretlenedi.</p>
                </div>
              </details>
              <details className="info-card group cursor-pointer">
                <summary className="font-bold text-slate-600 list-none flex justify-between items-center">
                  📚 Tiykarǵı miynetleri
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 text-sm border-t border-slate-600/20 pt-2">
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <a href="https://archive.org/search.php?query=Leviathan+Hobbes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Leviatan" (1651) ↗</a>
                    </li>
                    <li>
                      <a href="https://archive.org/search.php?query=De+Cive+Hobbes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">"Fuqara haqqında" (1642) ↗</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        )
      }
    ]
  },
  existentialism: {
    id: 'existentialism',
    title: '🚪 Ekzistentsializm (Jasaw mánisi)',
    content: (
      <div className="space-y-6">
        <div className="info-card bg-orange-500/5 border-orange-500/20">
          <p>Ekzistentsializm — bul adamnıń jeke jasawın, onıń erkinligin hám juwapkershiligi máselesin orayǵa qoyıwshı baǵdar.</p>
        </div>
        <div className="grid grid-cols-1 gap-3 font-bold text-center">
          <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-xl cursor-not-allowed opacity-50">Sartr (Tez arada)</div>
          <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-xl cursor-not-allowed opacity-50">Kamyu (Tez arada)</div>
          <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-xl cursor-not-allowed opacity-50">Xaydegger (Tez arada)</div>
        </div>
      </div>
    )
  },
  phenomenology: {
    id: 'phenomenology',
    title: '🌀 Fenomenologiya',
    content: (
      <div className="space-y-6">
        <div className="info-card bg-sky-500/5 border-sky-500/20">
          <p>Fenomenologiya — bul sananıń predmetlerge baǵdarlanǵan dúzilisin (intencionallıqtı) úyreniwshi filosofiyalıq metod.</p>
        </div>
        <div className="grid grid-cols-1 gap-3 font-bold text-center">
          <div className="bg-sky-500/10 border border-sky-500/30 p-4 rounded-xl cursor-not-allowed opacity-50">Gusserl (Tez arada)</div>
        </div>
      </div>
    )
  },
  positivism: {
    id: 'positivism',
    title: '🔬 Pozitivizm hám Analitika',
    content: (
      <div className="space-y-6">
        <div className="info-card bg-purple-500/5 border-purple-500/20">
          <p>Dúnyanı túsiniw ushın tek ǵana ilimiy tastıyıqlanǵan faktlerge hám logikalıq analizge súyeniw kerek dep esaplaydı.</p>
        </div>
        <div className="grid grid-cols-1 gap-3 font-bold text-center">
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-xl cursor-not-allowed opacity-50">Vitgenshteyn (Tez arada)</div>
        </div>
      </div>
    )
  },
}
};

export const DICTIONARY: Record<Language, { term: string; def: string }[]> = {
  qr: [
    { term: 'A posteriori', def: 'Tájiriybe arqalı erisiletuǵın, sezimlerge súyenetuǵın bilim.' },
    { term: 'A priori', def: 'Tájiriybege shekemgi, tájiriybege baylanıssız bilim (mısalı, matematika).' },
    { term: 'Abstraktlıq', def: 'Nárselerden ajıratılǵan, qandayda bir ulıwmalıq mánini túsindiriwshi túsinik.' },
    { term: 'Absolyut sáykeslik', def: 'Ruwx hám Tábiyatdıń birlesken dáslepki noqatı (Shelling).' },
    { term: 'Agnostitsizm', def: 'Dúnyanıń obyektiv mánisin biliw qabiletiniń sheklengenligi.' },
    { term: 'Aksiologiya', def: 'Qadriyatlar haqqındaǵı filosofiyalıq tálimot.' },
    { term: 'Alienaciya (Jótlewi)', def: 'Adamdıń óz kúsh hám qásiyetlerin dinge júklep, ózinen ajıratıp qarawı.' },
    { term: 'Antinomiya', def: 'Aqıl shegarasına kelgende payda bolatuǵın eki bir-birine qarsı, biraq birdey dálillense bolatuǵın pikir (mısalı: dunya shekli — dunya sheksiz).' },
    { term: 'Antropologizm', def: 'Filosofiyanıń orayına real, biologiyalıq hám materiallıq adamdı qoyıw.' },
    { term: 'Antropotsentrizm', def: 'Álemnıń hám filosofiyanıń orayına adamdı qoyıwshı dúnyatanım.' },
    { term: 'Apatia', def: 'Hárbir jaǵdayda ishki tınshlıqtı hám sabyrlılıqtı saqlaw (Stoitsizm).' },
    { term: 'Apeiron', def: 'Belgisiz, sheksiz hám máńgi materiya (Anaksimander).' },
    { term: 'Aponia', def: 'Denelik azaplardan qutılıw háleti (Epikur).' },
    { term: 'Aporiya', def: 'Logikalıq qıyınshılıq yaki paradoks (Zenon).' },
    { term: 'Arxe', def: 'Barlıq nársenin baslama tamırı, dúnyanıń birinshi tiykari.' },
    { term: 'Ataraksiya', def: 'Ruwxtıń tınıshlıǵı, hárqanday qáweter hám azaplardan azat bolıw jaǵdayı.' },
    { term: 'Atom', def: 'Bóliniui múmkin bolmaǵan eń kishi bólekshe (Demokrit).' },
    { term: 'Atribut', def: 'Substansiyanıń mánisli qásiyetleri (Spinoza).' },
    { term: 'Aufhebung (Almastırıw)', def: 'Eskirgen nárseni biykar etip, onıń ishinde jaqsı tárepleriniń saqlap qalıp joqarı deńgeyli ótish (Gegel).' },
    { term: 'Aximsa', def: 'Zıyan jetkizbeu, tiri janlıqlardı qádirlew printsipi (Jainizm).' },
    { term: 'Bolmıs', def: 'Nárselerin bar bolıwı, mawjudlıq, real dunyanıń ulıwmalıq xarakteri.' },
    { term: 'Deontologiya', def: 'Parız hám niyetke tiykarlanǵan etika baǵdarı.' },
    { term: 'Determinizm', def: 'Dúnyadaǵı hámme nárselerdiń belgili bir sebeplerge baylanıslı ekenligi haqqındaǵı táliymat.' },
    { term: 'Deus sive Natura', def: 'Quday yaki Tábiyat — olardı bir dep biliw (Spinoza).' },
    { term: 'Dialektika', def: 'Zıtlıqlar birligin hám olardıń gúresin úyreniwshi rawajlanıw filosofiyası.' },
    { term: 'Ding an sich', def: '\"Ózi-ózindegi nárse\" (Kant).' },
    { term: 'Docta ignorantia', def: 'Bilimli bilmezlik — aqıldıń sheklengenin túsiniw (Kuzanskiy).' },
    { term: 'Dualizm', def: 'Dúnyanıń eki ǵárezsiz baslamadan (materiya hám ruwx) ibarat ekenligin tastıyıqlawshı kózqaras.' },
    { term: 'Ekzistentsializm', def: 'Adamnıń jasawı, onıń erkinligi hám juwapkershiligi máselesin orayǵa qoyıwshı filosofiyalıq baǵdar.' },
    { term: 'Emerjentlik', def: 'Sistemalı analitikte, birlestiń bóleklerinde bolmaǵan jańa qásiyettiń payda bolıwı.' },
    { term: 'Empirizm', def: 'Bilimniń tiykarı sezim hám tájiriybe dep esaplaydı.' },
    { term: 'Epoxe', def: 'Haqıyqat haqqında turaqlı bir nárse aytıwdan bas tartıw (Skeptitsizm).' },
    { term: 'Esse est percipi', def: '\"Bar bolıw — bu qabıllanıw bolatınlıǵı\" (Berkliy).' },
    { term: 'Geliotsentrizm', def: 'Kúnniń koinot orayı ekenligi haqqındaǵı ilimiy kózqaras (Kopernik).' },
    { term: 'Gnoseologiya', def: 'Bilim teoriyası, insannıń dúnyanı tanıw imkániyatların úyrenedi.' },
    { term: 'Gózzallıq', def: 'Adamda ruwxıy lezzet beretuǵın, garmonikalıq qubılıs.' },
    { term: 'Gumanizm', def: 'Adam qádir-qımbatın hám onıń erkinligin eń joqarı baha dep tabıwshı baǵdar.' },
    { term: 'Homo homini lupus est', def: '\"Adam adamǵa qasqır\" — tábiyiy jaǵdaydaǵı adamlar qatnasınıń kórsetkishi (Gobbs).' },
    { term: 'Idealizm', def: 'Ruh hám oy nárse hám materyadan birinshi dep esaplaytın kózqaras.' },
    { term: 'Innatizm', def: 'Tuwma ideyalar (Quday, matematika) sánamızda dáslep bar (Dekart).' },
    { term: 'İntellektual intuiciya', def: 'Sánanıń óz-óziniń háreketin sol waqıttıń ózinde baqlawı.' },
    { term: 'Karma', def: 'Hind filosofiyasında ámeller nátiyjesı.' },
    { term: 'Katarsis', def: 'Ruwxıy tazalanıw háleti (Estetika).' },
    { term: 'Kategoriya', def: 'Filosofiyadaǵı eń ulıwmalıq tusinikler (bolmıs, zaman, kewislik h.b.).' },
    { term: 'Kategoriyalıq imperativ', def: 'Kanttıń etikalıq nızamı: \"Sonday háreket et, seniń háreketleriń ulıwmalıq nızamǵa aylansın\".' },
    { term: 'Kogito', def: 'Dekarttıń \"Oylayman, demek men barman\" principi (Cogito, ergo sum).' },
    { term: 'Leviatan', def: 'Absolyut hákimiyatqa iye bolǵan mámleketniń simvolı (Gobbs).' },
    { term: 'Logos', def: 'Dúnyalıq aqıl, nızamlılıq, sóz yaki túsinik degen mánislerdi ańlatıwshı termin.' },
    { term: 'Makiavellizm', def: 'Maqset jolında hár qanday qatalhq yaki hiyle-nayińlarǵa barıw (Makiavelli).' },
    { term: 'Materializm', def: 'Materia birinshi, oy ikkinshi dep esaplaytın kózqaras.' },
    { term: 'Meniń-men (Self-positing)', def: 'Sánanıń ózin-ózi barlıq dep belgilewi hám háreketi (Fixte).' },
    { term: 'Metafizika', def: 'Dúnyanıń eń ulıwmalıq tiykarların úyreniwshi filosofiya bólimi.' },
    { term: 'Metempsixoz', def: 'Janlardıń bir deneden ekinshisine kóship júriwi haqqındaǵı táliymat (Pifagor).' },
    { term: 'Mifologiya', def: 'Dúnyanı fantastikalıq obrazlar arqalu túsindiriw forması.' },
    { term: 'Modus', def: 'Substansiyanıń konkret kórinisleri yaki jaǵdayları (Spinoza).' },
    { term: 'Monada', def: 'Dúnyanıń dáslepki, bólinbeytuǵın ruwxıy birligi (Leybnic).' },
    { term: 'Monizm', def: 'Dúnyanıń bir ǵana tıykarı (materia yaki ruh) bar degen kózqaras.' },
    { term: 'Nirvana', def: 'Buddizmde azaptardan azat bolıw hám joqarı baxıtqa erisiw háleti.' },
    { term: 'Panlogizm', def: 'Dunyaniń hámme bólekleriniń máni — logika ekenligi haqqındaǵı kózqaras (Gegel).' },
    { term: 'Panteizm', def: 'Quday menen tábiyatdı bir dep biliwshi, Qudaydıń barlıq nárselerdiń ishinde bar ekenligi haqqındaǵı táliymat.' },
    { term: 'Pluralizm', def: 'Dúnyanıń kóp sanlı túrli elementlerden ibarat ekenligi haqqındaǵı táliymat.' },
    { term: 'Pneuma', def: 'Hawa, dúnyanı hám adamdı háreketlendiriwshi kúsh (Anaksimen).' },
    { term: 'Progress', def: 'Ilim hám aqıl-oydıń rawajlanıwı arqalı jámiyettiń jaqsılanıwı.' },
    { term: 'Racionalizm', def: 'Bilimniń tiykarı aq-oy hám logika dep esaplaydı.' },
    { term: 'Sansara', def: 'Ruhíń qayta-qayta tuwılıw tsikli.' },
    { term: 'Sinkretizm', def: 'Hár túrli diniy yaki filosofiyalıq kózqaraslardıń birligi (Piko della Mirandola).' },
    { term: 'Skeptitsizm', def: 'Dúnyanı hám haqıyqattı biliw múmkin ekenligine gúman menen qarawshı kózqaras.' },
    { term: 'Sub specie aeternitatis', def: 'Hámme nárseni máńgilik kózqarasınan qaraw (Spinoza).' },
    { term: 'Substansiya', def: 'Óz-ózinen bar bolǵan, dúnanıń tiykarı.' },
    { term: 'Tabula rasa', def: 'Adam sánasınıń dáslepki \"taza taxta\" jaǵdayı (Lok).' },
    { term: 'Teoditsiya', def: '\"Qudaydı aqlaw\" — dunyaǵa jamánlıqtıń mánisin túsindiriw.' },
    { term: 'Tolerantlıq', def: 'Basqa adamnıń pikirine hám isenimine tózimlilik penen qaraw (Volter).' },
    { term: 'Triada', def: 'Rawajlanıw basqıshı: Tezis → Antitezis → Sintez (Gegel).' },
    { term: 'Ulıwmalıq erik', def: 'Jámiyetniń ortaq máp hám adalat ushın baǵdarlanǵan erki (Russo).' },
    { term: 'Utilitarizm', def: 'Maqset — eń kóp adamǵa eń kóp payda keltiriw degen etikalıq kózqaras.' },
    { term: 'Utopiya', def: 'Ideal, ádalatlı, biraq ámelge asıwı qıyın bolǵan jámiyetlik dúzim haqqındaǵı arzu-úmit.' },
  ]
};
