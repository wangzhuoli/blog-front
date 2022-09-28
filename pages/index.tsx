import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { getArticleCategoryAll } from '../services/article-category/index';
import PageContainer from '../components/PageContainer';
import { ArticleCategoryItem } from '../services/article-category/index.d';
import Link from 'next/link';
import Card from '../components/Card';

export async function getStaticProps() {
  const { data: categoryList } = await getArticleCategoryAll();
  if (!categoryList) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }

  return {
    props: { categoryList },
  };
}

export interface HomePageProps {
  categoryList: ArticleCategoryItem[];
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const { categoryList } = props;
  return (
    <PageContainer>
      <Card className={styles.categoryList}>
        {categoryList.map((category) => (
          <Link href={category.path} key={category.id}>
            <a>{category.name}</a>
          </Link>
        ))}
      </Card>
    </PageContainer>
  );
};

export default HomePage;
