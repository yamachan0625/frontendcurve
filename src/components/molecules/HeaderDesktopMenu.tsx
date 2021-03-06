import React from 'react';
import { parseCookies } from 'nookies';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import useAuth from '~/contexts/auth';

import { LinkMenuItem } from '~/components/atoms/common/LinkMenuItem';

type Props = {
  userAnchorEl: HTMLElement;
  notificationsAnchorEl: HTMLElement;
  handleMenuClose: () => void;
};

export const HeaderDesktopMenu: React.FC<Props> = ({
  userAnchorEl,
  notificationsAnchorEl,
  handleMenuClose,
}) => {
  const { logout } = useAuth();
  const { userId } = parseCookies();

  return (
    <>
      <Menu
        aria-label="desktop menu"
        anchorEl={userAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(userAnchorEl)}
        onClose={handleMenuClose}
      >
        <LinkMenuItem
          href={`/user/changePassword/${userId}`}
          id="changePassword-link-button"
        >
          パスワード変更
        </LinkMenuItem>
        <Divider />
        <MenuItem onClick={logout} data-testid="logout-button">
          ログアウト
        </MenuItem>
      </Menu>
      {/*----- 通知昨日がつくまで保留 ------*/}
      {/* <Menu
        aria-label="desktop menu"
        anchorEl={notificationsAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(notificationsAnchorEl)}
        onClose={handleMenuClose}
      >
        <LinkMenuItem href={'/example'}>テスト１</LinkMenuItem>
        <Divider />
        <MenuItem onClick={logout}>テスト２</MenuItem>
      </Menu> */}
    </>
  );
};
