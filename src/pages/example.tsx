import React from 'react';
import useAuth, { useProtectRoute } from '~/contexts/auth';
import Link from 'next/link';

import { NextPage } from 'next';

const Home: NextPage = () => {
  const { loading } = useAuth();

  useProtectRoute();
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Link href="/">
            <a>Home</a>
          </Link>
          <div>Example</div>
        </>
      )}
    </>
  );
};

export default Home;
// export default ProtectRoute(Home);
