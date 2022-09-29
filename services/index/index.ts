import { clientRequest } from '../request';
import { GetStatsData } from './index.d';

export const getStats = (): Promise<{ data: GetStatsData }> => {
  return clientRequest('/front/index');
};
