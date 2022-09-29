import styles from './index.module.css';
import { useCallback, useMemo } from 'react';

export interface PaginationProps {
  current?: number;
  totalPage?: number;
  total?: number;
  onChange?: (v: number) => void;
  path?: string;
}

const Pagination = (props: PaginationProps) => {
  const { path, current = 1, total = 0, totalPage = 0, onChange } = props;
  const list = useMemo(() => {
    let result = [];
    for (let i = 1; i <= totalPage; i++) {
      result.push({ path: `${path}?page=${i}`, page: i });
    }
    // 最多五页
    const startAt = current - 3 <= 0 ? 0 : current - 3;
    const endAt = current - 3 <= 0 ? 5 : current + 2;
    result = result.slice(startAt, endAt);
    return result;
  }, [path, current, totalPage]);

  const handlePage = useCallback(
    (page: number) => {
      if (page === current) {
        return;
      }
      return false;
    },
    [current],
  );
  return (
    <div className={styles.container}>
      <div className={styles.total}>共 {total}条</div>
      <ul className={styles.list}>
        {current > 3 ? (
          <li className={styles.item}>
            <a
              href={list[0]?.path}
              className={`${styles.pageNumber}`}
              onClick={(e) => {
                onChange && onChange(1);
                e.preventDefault();
              }}
            >
              首页
            </a>
          </li>
        ) : null}
        {list.map((i) => (
          <li key={i.path} className={styles.item}>
            <a
              href={i.path}
              className={`${styles.pageNumber} ${
                current === i.page ? styles.isActive : ''
              }`}
              onClick={(e) => {
                onChange && onChange(i.page);
                e.preventDefault();
              }}
            >
              {i.page}
            </a>
          </li>
        ))}
        {totalPage - current > 2 ? (
          <li className={styles.item}>
            <a
              href={list[list.length - 1]?.path}
              className={`${styles.pageNumber}`}
              onClick={(e) => {
                onChange && onChange(totalPage);
                e.preventDefault();
              }}
            >
              尾页
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
};
export default Pagination;
