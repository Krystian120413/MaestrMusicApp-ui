import axios from 'axios';
import { ApiAuthUrl } from 'helpers/constants/ApiUrl';
import TokenService from './token/service';
import { Paths } from './user/types';

const instanceAxios = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instanceAxios;

export const setAuthorization = (token: string): void => {
  instanceAxios.defaults.headers.common = {
    ...instanceAxios.defaults.headers.common,
    Authorization: `Bearer: ${token}`,
  };
};

export const removeAuthorization = (): void => {
  delete instanceAxios.defaults.headers.common.Authorization;
};

instanceAxios.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();

    config.headers = {
      Authorization: `Bearer: ${token}`,
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instanceAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;

    if (error.response) {
      // Access Token was expired
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instanceAxios.post(`${ApiAuthUrl}${Paths.TOKEN}`, {
            refreshToken: TokenService.getLocalRefreshToken(),
          });

          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);

          return await instanceAxios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  }
);
