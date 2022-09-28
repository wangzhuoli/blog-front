import styles from './index.module.css';
import React, { ReactNode } from 'react';

const Card: React.FC<{
  children?: ReactNode;
  className?: string;
  title?: string;
}> = (props) => {
  const { children, className, title } = props;
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      {title ? <div className={styles.cardTitle}>{title}</div> : null}
      {children}
    </div>
  );
};

export default Card;
