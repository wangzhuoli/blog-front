import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import { getArticleList } from '../services/article/index';
import { PaginationResult } from '../common/pagination';
import { ArticleItem } from '../services/article/index.d';
import { GetServerSideProps } from 'next';
import Pagination from '../components/Pagination';
import Result from '../components/Result';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { getUrlSearchParams } from '../services/request';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, categoryId = 0 } = context.query;
  const { data } = await getArticleList({
    pageSize: 10,
    current: +page,
    categoryId: +categoryId,
  });

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  data.list = data.list.map((article) => ({
    ...article,
    createAt: article.createAt.substring(0, 10),
  }));
  return {
    props: {
      categoryId: +categoryId,
      ...data,
    },
  };
};

const HomePage: NextPage<
  PaginationResult<ArticleItem> & { categoryId: number }
> = (props) => {
  const { total, totalPage, list, currentPage = 1, categoryId } = props;
  const router = useRouter();
  const onPageChange = useCallback(
    (page: number) => {
      router.replace(getUrlSearchParams('/', { page, categoryId }));
    },
    [categoryId],
  );
  return (
    <PageContainer>
      {list.length === 0 ? (
        <Card>
          <Result
            title={'暂无数据'}
            icon={'icon-empty'}
            color={'#ccc'}
            className={styles.empty}
          />
        </Card>
      ) : (
        <div className={styles.articleList}>
          {list.map((article) => (
            <Card key={article.id} className={styles.articleItem}>
              <div className={styles.articleThumbWrapper}>
                <img src={article.thumbUrl} className={styles.articleThumb} />
              </div>
              <div className={styles.articleInfo}>
                <a
                  href={`/article/${article.id}`}
                  className={`${styles.articleTitle} ellipsis`}
                >
                  {article.title}
                </a>
                <div className={`${styles.articleIntro} ellipsis`}>
                  {article.intro}
                </div>
                <div className={styles.articleFt}>
                  <span className={styles.articleCreateAt}>
                    发布日期： {article.createAt}
                  </span>
                  <span className={styles.categoryList}>
                    {article.category.map((category) => (
                      <span key={category.id} className={'tag'}>
                        {category.name}
                      </span>
                    ))}
                  </span>
                  <a href={`/article/${article.id}`} className={styles.read}>
                    阅读全文
                    <span
                      className={`iconfont icon-arrow-right ${styles.iconArrowRight}`}
                    />
                  </a>
                </div>
              </div>
            </Card>
          ))}
          <Pagination
            total={total}
            totalPage={totalPage}
            current={currentPage}
            onChange={onPageChange}
            path={'/'}
          />
        </div>
      )}
    </PageContainer>
  );
};

export default HomePage;
