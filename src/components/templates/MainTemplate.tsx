import React from 'react';
import { useRouter } from 'next/router';

import { SideBar } from '~/components/organisms/SideBar';
import { HeaderBar } from '~/components/organisms/HeaderBar';
import { MainBody } from '~/components/organisms/MainBody';
import { useStyles } from './MainTemplateStyle';
import { useMobileOpen } from '~/hooks/useMobileOpen';
import { Loading } from '~/components/templates/Loading';

const useLoading = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleStart = (url) => {
    if (url !== router.pathname) {
      setLoading(true);
    }
  };
  const handleComplete = (url) => {
    if (url !== router.pathname) {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return { loading };
};

export const MainTemplate = ({ children }) => {
  const classes = useStyles();
  const { loading } = useLoading();

  const { mobileOpen, handleDrawerToggle } = useMobileOpen();

  return (
    <div className={classes.root}>
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
      <MainBody>{loading ? <Loading /> : children}</MainBody>
    </div>
  );
};
