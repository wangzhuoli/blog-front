import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import { getArticleList } from '../services/article/index';
import { PaginationResult } from '../common/pagination';
import { ArticleItem } from '../services/article/index.d';

export async function getStaticProps() {
  const { data } = await getArticleList();
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
            <img src={article.thumbUrl} className={styles.articleThumb} />
            <div className={styles.articleInfo}>
              <div className={`${styles.articleTitle} ellipsis`}>
                {article.title}
              </div>
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
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default HomePage;
