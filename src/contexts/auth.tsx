import React, { createContext, useState, useContext, useEffect } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';

import { CURRENET_USER } from '~/queries/queries';

export type Auth = {
  refreshToken: string;
  token: string;
  userId: string;
};

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setUserData: (value: Auth) => {},
  setLoadingState: (value: boolean) => {},
  logout: () => {},
  loading: true,
  showAleartMessage: (
    message: string,
    type?: 'info' | 'success' | 'error'
  ) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const alert = useAlert();

  // グローバルで管理したいuser情報を持つstate
  const [user, setUser] = useState(null);
  // ログイン処理中のローデイング
  const [loading, setLoading] = useState(true);

  const setUserData = (data: Auth): void => {
    setUser(data);
  };

  const setLoadingState = (value: boolean) => {
    setLoading(value);
  };

  // アラートメッセージを表示
  // TODO:現在は認証でしか使ってないが、グローバルに使いたい
  const showAleartMessage = (
    message: string,
    type: 'info' | 'success' | 'error' = 'success'
  ) => {
    alert.show(message, { type });
  };

  const logout = () => {
    destroyCookie(null, 'userId');
    setUser(null);
    // TODO:ログアウト後に遷移させたいページを指定
    router.push('/auth');
    showAleartMessage('ログアウトしました');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        setUserData,
        setLoadingState,
        logout,
        loading,
        showAleartMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;

/** 非ログインの場合ログインページにリダイレクトさせる */
export const useProtectRoute = () => {
  const { setUserData, setLoadingState } = useAuth();
  const client = useApolloClient();
  const router = useRouter();
  const currentPath = router.pathname;
  const { userId } = parseCookies();

  const loadUser = async () => {
    const { data } = await client.query({
      query: CURRENET_USER,
    });
    setUserData(data);
  };

  // SSR後にuser情報をstateに格納したい
  useEffect(() => {
    if (userId) {
      loadUser();
      return;
    }
    setUserData(null);
  }, []);

  // パスが変わるたびに呼び出す
  useEffect(() => {
    setLoadingState(true);
    if (userId) {
      setLoadingState(false);
    } else {
      if (currentPath !== '/auth') {
        // ログインページにリダイレクトさせたい
        router.push('/auth');
      }
    }
  }, [currentPath]);

  return;
};

export const useAuthProtect = () => {
  const { setLoadingState } = useAuth();
  const { userId } = parseCookies();
  const router = useRouter();

  useEffect(() => {
    setLoadingState(true);
    if (userId) {
      router.back();
    } else {
      setLoadingState(false);
    }
  }, []);

  return;
};
