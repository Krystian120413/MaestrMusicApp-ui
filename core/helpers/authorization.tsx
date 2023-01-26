import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';
import instanceAxios from 'services/api';
import TokenService from 'services/token/service';
import { Paths, UserDataType } from 'services/user/types';
import { ApiAuthUrl } from './constants/ApiUrl';

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user?: UserDataType | null;
  login: (email: string, password: string) => void;
  signUp: (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDataType | null>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const signUp = async (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => {
    try {
      const { data } = await axios.post(`${ApiAuthUrl}${Paths.SIGNUP}`, {
        name: `${name} ${surname}`,
        username: email,
        password,
      });
      if (data) {
        return true;
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
    return false;
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<UserDataType>(
        `${ApiAuthUrl}${Paths.LOGIN}`,
        {
          username: email,
          password,
        }
      );
      setUser(data);
    } catch (error) {
      toast.error('Invalid password or email');
    }
  };

  const logout = async () => {
    const token = TokenService.getLocalRefreshToken;
    await instanceAxios.delete(`${ApiAuthUrl}${Paths.LOGOUT}`, {
      token,
    });
    delete instanceAxios.defaults.headers.Authorization;
    TokenService.removeUser();
    router.push('/');
  };

  useEffect(() => {
    async function loadUserFromLocalStorage() {
      const token = TokenService.getLocalAccessToken();
      if (token && !!user) {
        TokenService.setUser(user);
        setIsAuthenticated(true);
      }
    }
    loadUserFromLocalStorage();
  }, [user]);

  const context = useMemo<AuthContextType>(
    () => ({
      isAuthenticated,
      user,
      login,
      signUp,
      logout,
    }),
    [isAuthenticated, user]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
