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
    result = result.slice(0, 5);
    return result;
  }, [path, current, totalPage]);

  const handlePage = useCallback(
    (page: number) => {
      if (page === current) {
        return;
      }
      console.log(page);
      return false;
    },
    [current],
  );
  return (
    <div className={styles.container}>
      <div className={styles.total}>共 {total}条</div>
      <ul className={styles.list}>
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
      </ul>
    </div>
  );
};
export default Pagination;
