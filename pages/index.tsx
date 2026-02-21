import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Kairos Route</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:title" content="Kairos Route" />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://kairos-route.netlify.app" />
      </Head>
      <main>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
      </main>
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
