import styles from './index.module.css';

export interface ResultProps {
  icon?: string;
  color?: string;
  title: string;
  description?: string;
  className?: string;
}

const Result = (props: ResultProps) => {
  const { icon, title, description, color, className } = props;
  return (
    <div className={`${styles.container} ${className}`}>
      <span
        className={`iconfont ${icon} ${styles.icon}`}
        style={{ color: color }}
      />
      <p className={styles.title}>{title}</p>
      {description ? <p className={styles.desc}>{description}</p> : null}
      <a href={'/'} className={styles.goBackButton}>
        返回首页
      </a>
    </div>
  );
};

export default Result;
