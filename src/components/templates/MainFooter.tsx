import React from 'react';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      height: '80px',
      backgroundColor: theme.palette.primary.main,
      borderTop: `2px solid ${theme.palette.primary.dark}`,
      textAlign: 'center',
      position: 'relative',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)',
    },
  })
);

export const MainFooter = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div>© 2020 Yuya Yamashita</div>
        <Link href="/privacyPolicy">
          <a>
            <u>利用規約・プライバシーポリシー</u>
          </a>
        </Link>
      </div>
    </footer>
  );
};
