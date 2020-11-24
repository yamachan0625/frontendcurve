import React from 'react';
import IconButton from '@material-ui/core/IconButton';

type Props = {
  label: string;
  edge?: 'start' | 'end' | false;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
};

export const HeadericonButton: React.FC<Props> = ({
  label,
  edge = 'start',
  onClick = () => {},
  className = '',
  children,
}) => {
  return (
    <IconButton
      aria-label={label}
      edge={edge}
      onClick={onClick}
      className={className}
    >
      {children}
    </IconButton>
  );
};
