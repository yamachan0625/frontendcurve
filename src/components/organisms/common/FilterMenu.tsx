import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';

import { useStyles } from './FilterMenuStyle';

export const FilterMenu = ({ children }) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordionRoot}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon className={classes.filterIcon} fontSize="large" />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component={'div'}>
          <div className={classes.filterTitle}>
            <FilterListIcon />
            <span className={classes.span}>絞り込み</span>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'div'}>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
