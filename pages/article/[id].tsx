import PageContainer from '../../components/PageContainer';
import Card from '../../components/Card';
import { GetServerSideProps, NextPage } from 'next';
import { getArticleDetail } from '../../services/article/index';
import { ArticleItem } from '../../services/article/index.d';
import styles from './index.module.css';
import { marked } from 'marked';
import { useMemo } from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // @ts-ignore
  const { id } = context.params;
  const result = await getArticleDetail({ id: +id });
  const { data } = result;
  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  return {
    props: {
      ...data,
      createAt: data.createAt.substring(0, 10),
    },
  };
};

const ArticleDetailPage: NextPage<ArticleItem> = (props) => {
  const { title, content, createAt, category } = props;
  const parseContent = useMemo(() => {
    return marked.parse(content);
  }, []);
  return (
    <PageContainer>
      <Card>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.head}>
          <div className={styles.date}>发布日期：{createAt}</div>
          <div className={styles.categoryList}>
            {category.map((item) => (
              <span key={item.id} className={'tag'}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: parseContent }} />
        </div>
      </Card>
    </PageContainer>
  );
};

export default ArticleDetailPage;
