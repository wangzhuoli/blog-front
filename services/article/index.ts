import { serviceRequest } from '../request';
import { ArticleItem } from './index.d';
import {
  PaginationResult,
  PaginationSearchParams,
} from '../../common/pagination';

export const getArticleList = (
  params: PaginationSearchParams & { categoryId?: number },
): Promise<{
  data: PaginationResult<ArticleItem>;
}> => {
  return serviceRequest(`/front/article`, {
    method: 'get',
    params,
  });
};
