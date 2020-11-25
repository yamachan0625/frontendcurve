import React from 'react';

import AuthTemplate from '~/components/templates/auth/index';
import { WithTheme } from '~/components/templates/WithTheme';
import useAuth, { useAuthProtect } from '~/contexts/auth';

const Auth: React.FC = () => {
  const { loading } = useAuth();

  useAuthProtect();

  return (
    <WithTheme>{loading ? <div>Loading</div> : <AuthTemplate />}</WithTheme>
  );
};

export default Auth;
