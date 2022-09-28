export const baseUrl = 'http://localhost:3000';

/**
 * 服务端请求
 * **/
export const serviceRequest = async (
  url: string,
  options?: RequestInit,
): Promise<any> => {
  const result = await fetch(baseUrl + url, options);
  if (result.status === 200) {
    return await result.json();
  }
  return {
    data: null,
  };
};
