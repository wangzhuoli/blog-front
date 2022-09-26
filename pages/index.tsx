import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NextHead from '../components/NextHead/index';
import PageNav from '../components/PageNav';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextHead />
      <PageNav />
      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
