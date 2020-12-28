import React from 'react';
import Link from 'next/link';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuItemProps } from '@material-ui/core';

type LinkMenuItemProps = Omit<
  MenuItemProps<'a', { href: string }>,
  'component' | 'button'
>;

export const LinkMenuItem = React.forwardRef<
  HTMLAnchorElement,
  LinkMenuItemProps
>(function LinkMenuItem({ href, onClick, id, children }, forwardedRef) {
  return (
    <Link href={href}>
      <MenuItem
        component="a"
        button
        ref={forwardedRef}
        onClick={onClick}
        data-testid={id}
      >
        {children}
      </MenuItem>
    </Link>
  );
});
