import { clientRequest } from '../request';
import { ArticleCategoryItem } from './index.d';

export const getArticleCategoryAll = (): Promise<{
  data: ArticleCategoryItem[];
}> => {
  return clientRequest('/front/article-category/all');
};
