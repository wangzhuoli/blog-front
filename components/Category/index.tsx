import styles from './index.module.css';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Card from '../Card';
import { getArticleCategoryAll } from '../../services/article-category/index';
import { ArticleCategoryItem } from '../../services/article-category/index.d';
import { useRouter } from 'next/router';
import { getUrlSearchParams } from '../../services/request';

const Category: React.FC<{ className?: string }> = (props) => {
  const [categoryList, setCategoryList] = useState<ArticleCategoryItem[]>([]);
  const router = useRouter();

  const currentCategoryId = useMemo(() => {
    const { categoryId = 0 } = router.query;
    return +categoryId;
  }, [router.query]);

  useEffect(() => {
    loadCategoryList();
  }, []);

  const loadCategoryList = useCallback(async () => {
    try {
      const { data } = await getArticleCategoryAll();
      setCategoryList(data);
    } catch (e) {}
  }, []);

  const { className } = props;
  return (
    <Card className={`${className}`} title={'文章分类'}>
      <div className={styles.categoryList}>
        {categoryList.map((category) => (
          <a
            className={currentCategoryId === category.id ? styles.isActive : ''}
            href={category.path}
            key={category.id}
            onClick={(e) => {
              router.replace(
                getUrlSearchParams('/', { page: 1, categoryId: category.id }),
              );
              e.preventDefault();
            }}
          >
            {category.name}
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Category;
