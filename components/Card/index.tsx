import styles from './index.module.css';
import React, { ReactNode } from 'react';

const Card: React.FC<{ children?: ReactNode; className?: string }> = (
  props,
) => {
  const { children, className } = props;
  return (
    <div className={`${styles.cardContainer} ${className}`}>{children}</div>
  );
};

export default Card;
