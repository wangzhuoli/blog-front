import { serviceRequest } from '../request';
import { ArticleItem } from './index.d';
import { PaginationResult } from '../../common/pagination';

export const getArticleList = (): Promise<{
  data: PaginationResult<ArticleItem>;
}> => {
  return serviceRequest('/front/article');
};
