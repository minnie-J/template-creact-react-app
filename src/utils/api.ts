import axios, { AxiosRequestConfig } from "axios";

type ApiHandler<K> = AxiosRequestConfig<K> & { url: string };

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

/**
 * NOTE
 * @typedef {any} T success일 때 response data의 타입
 * @typedef {any} K property중 body(AxiosRequestConfig에서는 data에 해당)의 타입
 * @param {string} url 필수 프로퍼티
 * @param {AxiosRequestConfig}...props https://axios-http.com/kr/docs/req_config 참고
 * @returns {Promise<T>} 응답 status가 200일 때 data
 */
export const handler = async <T, K = any>({ ...props }: ApiHandler<K>) => {
  return axios(props)
    .then(({ data }: { data: T }) => {
      return data;
    })
    .catch((err) => {
      // alert(err.message);
      throw err;
    });
};
