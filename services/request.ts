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

/**
 * 客户端请求
 * **/
export const clientRequest = async (
  url: string,
  options?: RequestInit,
): Promise<any> => {
  try {
    const result = await fetch(baseUrl + url, options);
    return await result.json();
  } catch (e) {
    return {
      data: null,
    };
  }
};
