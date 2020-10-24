import React from 'react';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

type Props = {
  label: string;
  titles: string[];
  anchorEl: Element | ((element: Element) => Element);
  onClose: () => void;
};

export const RenderDesktopMenu: React.FC<Props> = ({
  label,
  titles,
  anchorEl,
  onClose,
}) => {
  return (
    <Menu
      aria-label={label}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {titles.map((title, i) => (
        <div key={title}>
          <MenuItem onClick={onClose}>{title}</MenuItem>
          {i !== titles.length - 1 && <Divider />}
        </div>
      ))}
    </Menu>
  );
};
