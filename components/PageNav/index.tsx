import styles from './index.module.css';

const PageNav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <a href={'/'} className={styles.title}>
          wzl.com
        </a>
        <nav className={styles.navList}>
          <span className={styles.navItem}>
            <a href={'/angular'}>ANGULAR</a>
          </span>
          <span className={styles.navItem}>
            <a href={'/vue'}>VUE</a>
          </span>
          <span className={styles.navItem}>
            <a href={'/react'}>REACT</a>
          </span>
        </nav>
      </div>
    </nav>
  );
};

export default PageNav;
