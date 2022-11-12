import { UserDataType } from 'services/user/types';

enum Keys {
  USER_ID = 'userId',
  USERNAME = 'username',
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

const getLocalRefreshToken = () => {
  return String(localStorage.getItem(Keys.REFRESH_TOKEN));
};

const getLocalAccessToken = () => {
  return String(localStorage.getItem(Keys.ACCESS_TOKEN));
};

const updateLocalAccessToken = (token: string) => {
  localStorage.setItem(Keys.ACCESS_TOKEN, token);
};

const getUser = () => {
  return {
    accessToken: localStorage.getItem(Keys.ACCESS_TOKEN),
    refreshToken: localStorage.getItem(Keys.REFRESH_TOKEN),
    username: localStorage.getItem(Keys.USERNAME),
    userId: localStorage.getItem(Keys.USER_ID),
  };
};

const setUser = (user: UserDataType) => {
  localStorage.setItem(Keys.ACCESS_TOKEN, user.accessToken);
  localStorage.setItem(Keys.REFRESH_TOKEN, user.refreshToken);
  localStorage.setItem(Keys.USER_ID, String(user.userId));
  localStorage.setItem(Keys.USERNAME, String(user.name));
};

const removeUser = () => {
  localStorage.removeItem(Keys.ACCESS_TOKEN);
  localStorage.removeItem(Keys.REFRESH_TOKEN);
  localStorage.removeItem(Keys.USER_ID);
  localStorage.removeItem(Keys.USERNAME);
};

const TokenService = {
  getLocalAccessToken,
  getLocalRefreshToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
