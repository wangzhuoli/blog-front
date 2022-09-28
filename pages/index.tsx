import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import { getArticleList } from '../services/article/index';
import { PaginationResult } from '../common/pagination';
import { ArticleItem } from '../services/article/index.d';
import {GetServerSideProps} from "next";

export const  getServerSideProps: GetServerSideProps =async ( context) => {
  const {page = 1} = context.query
  const { data } = await getArticleList({pageSize: 10, current: +page});
  if (!data) {
    return {
      redirect: {
        destination: '/500',
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
      ...data,
    },
  };
}

const HomePage: NextPage<PaginationResult<ArticleItem>> = (props) => {
  const { total, totalPage, list, current } = props;
  return (
    <PageContainer>
      <div className={styles.articleList}>
        {list.map((article) => (
          <Card key={article.id} className={styles.articleItem}>
            <div className={styles.articleThumbWrapper}>
              <img src={article.thumbUrl} className={styles.articleThumb} />
            </div>
            <div className={styles.articleInfo}>
              <a href={`/article/${article.id}`} className={`${styles.articleTitle} ellipsis`}>
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
                    <span key={category.id} className={styles.categoryItem}>
                      {category.name}
                    </span>
                  ))}
                </span>
                <a href={`/article/${article.id}`} className={styles.read}>查看全部<span className={`iconfont icon-arrow-right ${styles.iconArrowRight}`}></span></a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default HomePage;
