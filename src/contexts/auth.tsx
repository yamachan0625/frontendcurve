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
  userLogin: (value: Auth) => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const client = useApolloClient();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const { token } = parseCookies();

      if (token) {
        const { data } = await client.query({
          query: CURRENET_USER,
        });
        setUser(data);
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const userLogin = (data: Auth): void => {
    setUser(data.login);
  };

  const logout = () => {
    destroyCookie(null, 'token');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, userLogin, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

// 一応HOCバージョン
// export const ProtectRoute = (Component) => {
//   return () => {
//     const { isAuthenticated, loading } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//       if (!isAuthenticated && !loading) router.push('/');
//     }, [loading, isAuthenticated]);

//     return <Component {...arguments} />;
//   };
// };

export const useProtectRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !loading) router.push('/');
  }, [loading, isAuthenticated]);

  return;
};
