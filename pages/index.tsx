import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      title: t('products.item1.title'),
      desc: t('products.item1.desc'),
      category: 'AI Tools',
      link: 'https://kairosroute.gumroad.com/l/ai-playbook',
      badge: 'New'
    },
    {
      id: 2,
      title: t('products.item2.title'),
      desc: t('products.item2.desc'),
      category: 'Automation',
      link: 'https://kairosroute.gumroad.com',
      badge: 'Popular'
    },
    {
      id: 3,
      title: t('products.item3.title'),
      desc: t('products.item3.desc'),
      category: 'Digital Assets',
      link: 'https://www.redbubble.com/people/KairosRoute',
      badge: ''
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      <Head>
        <title>Kairos Route | Premium Tech & Digital Products</title>
        <meta name="description" content="Professional marketplace for AI tools, digital apps, and creative automation by Kairos Route." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 relative overflow-hidden rounded-xl border border-white/10 p-1 bg-white/5">
              <img src="/logo-kairos.png" alt="Kairos" className="w-full h-full object-contain logo-glow" />
            </div>
            <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 group-hover:to-white transition-all">KAIROS ROUTE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="#products" className="hover:text-white transition-colors">Products</Link>
            <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <div className="flex items-center gap-6 ml-4 pl-8 border-l border-white/10">
              <button 
                onClick={() => router.push(router.asPath, undefined, { locale: 'en' })}
                className={`hover:text-white transition-colors ${locale === 'en' ? 'text-white underline underline-offset-8 decoration-purple-500' : ''}`}
              >
                EN
              </button>
              <button 
                onClick={() => router.push(router.asPath, undefined, { locale: 'es' })}
                className={`hover:text-white transition-colors ${locale === 'es' ? 'text-white underline underline-offset-8 decoration-purple-500' : ''}`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative pt-40 pb-32 md:pt-64 md:pb-48 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/10 blur-[150px] rounded-full -z-10 animate-pulse" />
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-bold tracking-[0.2em] uppercase text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
              Digital Ecosystem 2.0
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 leading-[0.9]">
              PREMIUM <br /> SOLUTIONS.
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 mb-14 leading-relaxed font-light">
              High-performance tools, AI applications, and elite digital assets designed for those who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#products" className="group px-10 py-5 bg-white text-black font-black rounded-full hover:bg-purple-50 transition-all transform hover:scale-105 flex items-center gap-2">
                BROWSE CATALOG <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="https://kairosroute.gumroad.com" className="px-10 py-5 border border-white/10 hover:border-white/30 hover:bg-white/5 font-black rounded-full transition-all text-sm tracking-widest uppercase">
                GUMROAD STORE
              </Link>
            </div>
          </div>
        </section>

        <section id="products" className="py-32 bg-[#080808]/50 border-y border-white/5 backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-purple-500 font-black text-xs tracking-widest uppercase mb-4 block">Product Selection</span>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight italic">CURATED TOOLS.</h2>
                <p className="text-gray-500 text-lg">Every product is engineered to solve complex problems with elegant simplicity.</p>
              </div>
              <Link href="#" className="px-6 py-3 rounded-xl border border-white/5 hover:bg-white/5 text-[11px] font-bold uppercase tracking-widest transition-all">View Full Archive</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {products.map((product) => (
                <div key={product.id} className="group relative p-10 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 hover:border-purple-500/30 transition-all duration-700 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                        {product.id === 1 ? '🤖' : product.id === 2 ? '⚙️' : '🎨'}
                      </div>
                      {product.badge && (
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[9px] font-black uppercase tracking-widest text-purple-400">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 block">{product.category}</span>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-purple-400 transition-colors">{product.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">{product.desc}</p>
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-purple-400 transition-colors">
                      GET PRODUCT <span className="w-8 h-[1px] bg-white group-hover:w-12 group-hover:bg-purple-400 transition-all" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <div className="mb-20 relative inline-block group">
               <div className="absolute inset-0 bg-purple-500/30 blur-[100px] rounded-full scale-150 -z-10 group-hover:bg-purple-400/40 transition-all duration-1000" />
               <img src="/logo-kairos.png" alt="Kairos Route" className="w-40 h-40 md:w-64 md:h-64 mx-auto object-contain logo-glow" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white/20 uppercase">
              KAIROS ROUTE
            </h2>
            <div className="w-20 h-[1px] bg-purple-500 mx-auto mb-10" />
            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-loose italic font-light">
              "Building the tools of tomorrow, today."
            </p>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
             <div className="flex items-center gap-2 opacity-50">
                <img src="/logo-kairos.png" className="w-6 h-6 object-contain" alt="" />
                <span className="font-black tracking-tighter text-xs">KAIROS ROUTE</span>
             </div>
             <div className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
               © {new Date().getFullYear()} ALL RIGHTS RESERVED.
             </div>
          </div>
          <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Gumroad</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }

        .logo-glow {
          filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.5));
          transition: all 0.5s ease;
        }
        
        .logo-glow:hover {
          filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.8)) brightness(1.2);
          transform: scale(1.05);
        }

        ::selection {
          background: rgba(168, 85, 247, 0.3);
          color: white;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Home;
