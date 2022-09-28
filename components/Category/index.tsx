import styles from './index.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import Card from '../Card';
import { getArticleCategoryAll } from '../../services/article-category/index';
import { ArticleCategoryItem } from '../../services/article-category/index.d';
import Link from 'next/link';

const Category: React.FC<{ className?: string }> = (props) => {
  const [categoryList, setCategoryList] = useState<ArticleCategoryItem[]>([]);

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
          <Link href={category.path} key={category.id}>
            <a>{category.name}</a>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default Category;
