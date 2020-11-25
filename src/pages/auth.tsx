import React from 'react';

import AuthTemplate from '~/components/templates/auth/index';
import { WithTheme } from '~/components/templates/WithTheme';
import { Loading } from '~/components/templates/Loading';
import useAuth, { useAuthProtect } from '~/contexts/auth';

const Auth: React.FC = () => {
  const { loading } = useAuth();

  useAuthProtect();

  return <WithTheme>{loading ? <Loading /> : <AuthTemplate />}</WithTheme>;
};

export default Auth;
