import React from 'react';
import { useStyles } from './FilterGroupNameStyle';

type Props = {
  name: string;
};

export const FilterGroupName: React.FC<Props> = ({ name, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.filterGroupName}>
      <u>
        <p data-testid="filter-name">{name}</p>
      </u>
      {children}
    </div>
  );
};
