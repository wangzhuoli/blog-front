export interface PaginationSearchParams {
  current?: number;
  pageSize?: number;
}
export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}
export interface PaginationResult<T> extends TableListPagination {
  list: T[];
  total: number;
  currentPage: number;
  pageSize: number;
  totalPage: number;
}
