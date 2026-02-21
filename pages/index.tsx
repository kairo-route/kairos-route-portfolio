import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const projects = [
    {
      id: 1,
      title: t('projects.items.0.title'),
      desc: t('projects.items.0.desc'),
      tag: t('projects.items.0.tag'),
      link: 'https://www.redbubble.com/people/KairosRoute',
      emoji: '🎨',
    },
    {
      id: 2,
      title: t('projects.items.1.title'),
      desc: t('projects.items.1.desc'),
      tag: t('projects.items.1.tag'),
      link: 'https://kairosroute.gumroad.com',
      emoji: '📦',
    },
    {
      id: 3,
      title: t('projects.items.2.title'),
      desc: t('projects.items.2.desc'),
      tag: t('projects.items.2.tag'),
      link: 'https://substack.com/@kairosroute',
      emoji: '✍️',
    },
    {
      id: 4,
      title: t('projects.items.3.title'),
      desc: t('projects.items.3.desc'),
      tag: t('projects.items.3.tag'),
      link: 'https://github.com/kairo-route',
      emoji: '🤖',
    },
  ];

  return (
    <>
      <Head>
        <title>Kairos Route — {t('meta.description')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:title" content="Kairos Route" />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kairos-route-portfolio.netlify.app" />
        <link rel="canonical" href="https://kairos-route-portfolio.netlify.app" />
      </Head>

      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Kairos Route</Link>
          <div className="nav-links">
            <a href="#about">{t('nav.about')}</a>
            <a href="#projects">{t('nav.portfolio')}</a>
            <a href="#blog">{t('nav.blog')}</a>
            <a href="#contact">{t('nav.contact')}</a>
            <div className="lang-switcher">
              <Link href="/" locale="es" className={locale === 'es' ? 'active' : ''}>ES</Link>
              <span>|</span>
              <Link href="/" locale="en" className={locale === 'en' ? 'active' : ''}>EN</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-badge">{t('hero.badge')}</div>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <p className="hero-desc">{t('hero.desc')}</p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">{t('cta.explore')}</a>
            <a href="#contact" className="btn btn-secondary">{t('cta.contact')}</a>
          </div>
        </div>
        <div className="hero-scroll-hint">↓</div>
      </section>

      <section className="about" id="about">
        <div className="section-inner">
          <div className="section-tag">{t('about.tag')}</div>
          <h2>{t('about.title')}</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">4+</span>
                <span className="stat-label">{t('about.stat1')}</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2</span>
                <span className="stat-label">{t('about.stat2')}</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">∞</span>
                <span className="stat-label">{t('about.stat3')}</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">{t('about.stat4')}</span>
              </div>
            </div>
          </div>
          <div className="tools-list">
            {['Claude AI', 'Midjourney', 'Next.js', 'Notion', 'Gumroad', 'Redbubble', 'Substack', 'n8n'].map((tool) => (
              <span key={tool} className="tool-chip">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-inner">
          <div className="section-tag">{t('projects.tag')}</div>
          <h2>{t('projects.title')}</h2>
          <p className="section-sub">{t('projects.subtitle')}</p>
          <div className="projects-grid">
            {projects.map((p) => (
              <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card">
                <div className="project-emoji">{p.emoji}</div>
                <div className="project-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="project-link">{t('cta.visit')} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="section-inner">
          <div className="section-tag">{t('blog.tag')}</div>
          <h2>{t('blog.title')}</h2>
          <p className="section-sub">{t('blog.subtitle')}</p>
          <div className="blog-grid">
            <a href="https://substack.com/@kairosroute" target="_blank" rel="noopener noreferrer" className="blog-card">
              <div className="blog-meta">{t('blog.platform')}</div>
              <h3>{t('blog.post1.title')}</h3>
              <p>{t('blog.post1.desc')}</p>
              <span className="blog-link">{t('cta.read')} →</span>
            </a>
            <a href="https://substack.com/@kairosroute" target="_blank" rel="noopener noreferrer" className="blog-card">
              <div className="blog-meta">{t('blog.platform')}</div>
              <h3>{t('blog.post2.title')}</h3>
              <p>{t('blog.post2.desc')}</p>
              <span className="blog-link">{t('cta.read')} →</span>
            </a>
            <a href="https://substack.com/@kairosroute" target="_blank" rel="noopener noreferrer" className="blog-card featured">
              <div className="blog-meta">{t('blog.platform')}</div>
              <h3>{t('blog.post3.title')}</h3>
              <p>{t('blog.post3.desc')}</p>
              <span className="blog-link">{t('cta.read')} →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-inner contact-inner">
          <div className="section-tag">{t('contact.tag')}</div>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
          <div className="contact-links">
            <a href="mailto:kairos.route@gmail.com" className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>kairos.route@gmail.com</span>
            </a>
            <a href="https://substack.com/@kairosroute" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">📰</span>
              <span>Substack Newsletter</span>
            </a>
            <a href="https://github.com/kairo-route" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <span>GitHub</span>
            </a>
            <a href="https://kairosroute.gumroad.com" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">🛒</span>
              <span>Gumroad Shop</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Kairos Route · {t('footer.rights')}</p>
          <p className="footer-sub">{t('footer.made')}</p>
        </div>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  };
};

export default Home;
