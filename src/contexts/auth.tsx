import React, { createContext, useState, useContext, useEffect } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

import { CURRENET_USER } from '~/queries/queries';

export interface Auth {
  login: {
    token: string;
    userId: string;
  };
}

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setUserData: (value: Auth) => {},
  setLoadingState: (value: boolean) => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const router = useRouter();

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

  const logout = () => {
    destroyCookie(null, 'userId');
    setUser(null);
    // TODO:ログアウト後に遷移させたいページを指定
    router.push('/');
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

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
      if (currentPath !== '/') {
        // ログインページにリダイレクトさせたい
        router.push('/');
      }
    }
  }, [currentPath]);

  return;
};
