import React, { createContext, useState, useContext, useEffect } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

import { CURRENET_USER } from '~/queries/queries';
// import { route } from 'next/dist/next-server/server/router';

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
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const client = useApolloClient();
  // グローバルで管理したいuser情報を持つstate
  const [user, setUser] = useState(null);
  // ログイン処理中のローデイング
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const { userId } = parseCookies();
      if (userId) {
        const { data } = await client.query({
          query: CURRENET_USER,
        });
        setUser(data);
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const setUserData = (data: Auth): void => {
    setUser(data);
  };

  const logout = () => {
    destroyCookie(null, 'userId');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, setUserData, logout, loading }}
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
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !loading) router.push('/');
  }, [loading, isAuthenticated]);

  return;
};
