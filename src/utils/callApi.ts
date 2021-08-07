import fetch from 'cross-fetch';

const BASE_URL = process.env.REACT_APP_BASE_URL || '';

type ApiResponse<T> = {
  data: T;
  message: string;
};

export const callApi = async <T = unknown>(path: string, init: RequestInit) => {
  const res = await fetch(`${BASE_URL}${path}`, init);
  const json: ApiResponse<T> = await res.json();
  if (res.ok) {
    return json.data;
  }

  throw new Error(json.message);
};
