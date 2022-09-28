import NextHead from '../NextHead';
import PageHead from '../PageHead';
import { ReactNode } from 'react';
import styles from './index.module.css';
import About from '../Abount';

const PageContainer = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <>
      <NextHead />
      <PageHead />
      <div className={styles.mainContainer}>
        <div className={styles.leftContent}>{children}</div>
        <div className={styles.rightContent}>
          <About />
        </div>
      </div>
    </>
  );
};

export default PageContainer;
