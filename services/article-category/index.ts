import { serviceRequest } from '../request';
import { ArticleCategoryItem } from './index.d';

export const getArticleCategoryAll = (): Promise<{
  data: ArticleCategoryItem[];
}> => {
  return serviceRequest('/front/article-category/all');
};
