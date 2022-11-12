export enum Paths {
  LOGIN = '/login',
  SIGNUP = '/signup',
  LOGOUT = '/logout',
  TOKEN = '/token',
}

export type Logincredendials = {
  email: string;
  password: string;
};

export type UserDataType = {
  name?: string;
  userId: number;
  accessToken: string;
  refreshToken: string;
};
