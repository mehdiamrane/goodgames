import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useTranslation from 'hooks/useTranslation';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('home.meta.title')}</title>
        <meta name='description' content={t('home.meta.description')} />
      </Head>

      <main>
        <h1>title</h1>
        body
      </main>

      <footer>footer</footer>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
