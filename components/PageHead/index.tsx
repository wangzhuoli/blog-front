import styles from './index.module.css';

const PageHead = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <a href={'/'} className={styles.title}>
          wzl.com
        </a>
      </div>
    </nav>
  );
};

export default PageHead;
