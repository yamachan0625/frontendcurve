import React from 'react';

import AuthTemplate from '~/components/templates/auth/index';
import useAuth, { useAuthProtect } from '~/contexts/auth';

const Auth: React.FC = () => {
  const { loading } = useAuth();

  useAuthProtect();

  return <>{loading ? <div>Loading</div> : <AuthTemplate />}</>;
};

export default Auth;
