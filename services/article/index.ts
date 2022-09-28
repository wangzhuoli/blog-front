import { serviceRequest } from '../request';
import { ArticleItem } from './index.d';
import { PaginationResult, PaginationSearchParams } from '../../common/pagination';

export const getArticleList = ({pageSize, current}: PaginationSearchParams): Promise<{
  data: PaginationResult<ArticleItem>;
}> => {
  return serviceRequest(`/front/article?pageSize=${pageSize}&current=${current}`);
};
