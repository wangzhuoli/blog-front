import styles from './index.module.css';

const PageHead = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <a href={'/'} className={styles.title}>
          BLOG
        </a>
        <div className={styles.navList}>
          <a href={'/'} className={styles.navItem}>
            <span className={styles.navPoint} />
            <span className={`iconfont icon-home-fill ${styles.navIcon}`} />
            首页
          </a>
          <a href={'/about'} className={styles.navItem}>
            <span className={styles.navPoint} />
            <span className={`iconfont icon-about ${styles.navIcon}`} />
            关于我
          </a>
        </div>
      </div>
    </nav>
  );
};

export default PageHead;
