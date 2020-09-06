import React from 'react';
import { useProtectRoute } from '../contexts/auth';
import Link from 'next/link';

import { NextPage } from 'next';

const Home: NextPage = () => {
  useProtectRoute();
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div>Example</div>
    </>
  );
};

export default Home;
// export default ProtectRoute(Home);
