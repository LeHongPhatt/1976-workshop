/** @format */

import axios from 'axios';
import {useKey} from 'hooks';
// import {logoutRequest} from 'store/user';
// import {IKeyAuth} from 'types';
// import {getCurrentTS} from 'utils';
import {KEY_CONTEXT} from './constants';
import {API_ENDPOINT} from './endpoint';
import {logoutRequest} from 'store/user';
import {configStore} from 'store/createStore';
// import {API_HOST} from '@env';
// import {store} from 'store/createStore';
// console.log('API_HOST', API_HOST);

const config = {
  baseURL: 'http://103.90.233.56:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(
  async (req: any) => {
    const {getKeyStore} = useKey();
    const token = await getKeyStore(KEY_CONTEXT.ACCESS_TOKEN);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    console.log(req);
    return req;
  },
  (err: any) => Promise.reject(err),
);

axiosClient.interceptors.response.use(
  (res: any) => Promise.resolve(res.data),
  async (err: any) => {
    const originalRequest = err.config;
    // console.log('err.response.status', err.response.status, err.config.__isRetryRequest);

    if (
      err &&
      err.response &&
      err.response.status === 401 &&
      !err.config.__isRetryRequest
    ) {
      const {saveKeyStore} = useKey();
      const {store} = configStore();

      return axios
        .get(`http://103.90.233.56:3001/${API_ENDPOINT.AUTH.REFRESH_TOKEN}`, {
          headers: config.headers,
        })
        .then(async response => {
          const token = response.data?.accessToken;
          if (response?.data?.status !== 200) {
            return null;
          }
          originalRequest.headers = {
            ...originalRequest.headers,
            authorization: `Bearer ${token}`,
          };
          originalRequest.__isRetryRequest = true;
          await saveKeyStore(KEY_CONTEXT.ACCESS_TOKEN, token);

          return axiosClient(originalRequest);
        })
        .catch(e => {
          console.log('axios-catch', JSON.stringify(e));
          store.dispatch(logoutRequest({redirect: true}));
          // logoutRequest();
        });
    }
    return Promise.reject(((err || {}).response || {}).data);
  },
);

export default axiosClient;
