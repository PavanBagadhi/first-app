import React, { Fragment } from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import classes from '../Home/Header.module.css';

export const logoutHandler =(historyObject) =>{
  localStorage.removeItem('token')
  sessionStorage.removeItem('expiresIN')
  historyObject.push('/login')
}

const Header = () => {
  const history = useHistory();
  const signOutHandler = () => {

    logoutHandler(history)

  };
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <h1>QUICK</h1> */}
        <h1>
          <span className={classes.span1}>Q</span>
          <span className={classes.span2}>UICK</span>
        </h1>
        <div>
          <ul>
            <li>
              <NavLink to="/home" activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName={classes.active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName={classes.active}>
                Services
              </NavLink>
            </li>
            <li>
              <button
                onClick={signOutHandler}
                className={classes['signOut-button']}
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
