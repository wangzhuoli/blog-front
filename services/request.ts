export const baseUrl = 'http://localhost:3000';

export const getUrlSearchParams = (
  url: string,
  params?: { [key: string]: any },
) => {
  if (!params) {
    return url;
  }
  const search = Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return `${url}?${search}`;
};

/**
 * 服务端请求
 * **/
export const serviceRequest = async (
  url: string,
  options?: RequestInit & { params: { [key: string]: any } },
): Promise<any> => {
  if (!options?.method || options.method === 'get') {
    url = getUrlSearchParams(url, options?.params);
  }
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
  options?: RequestInit & { params: { [key: string]: any } },
): Promise<any> => {
  try {
    if (!options?.method || options.method === 'get') {
      url = getUrlSearchParams(url, options?.params);
    }
    const result = await fetch(baseUrl + url, options);
    return await result.json();
  } catch (e) {
    return {
      data: null,
    };
  }
};
