import React, { Fragment } from 'react';
import classes from '../Home/NormalHeader.module.css';

const NormalHeader = () => {
  return (
    <Fragment>
      <header className={classes.header}>
      <h1>
          <span className={classes.span1}>Q</span>
          <span className={classes.span2}>UICK</span>
        
        </h1>
      </header>
    </Fragment>
  );
};
export default NormalHeader;
