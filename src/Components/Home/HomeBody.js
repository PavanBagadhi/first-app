import React, { Fragment } from 'react';
import Header from './Header';
import classes from '../Home/HomeBody.module.css';
import { NavLink } from 'react-router-dom';




const HomeBody = () => {

  return (
    <Fragment>
      <Header />
      <main className={classes.homeBody}>
        <ul>
          <li>
            <NavLink
              to="/home/show-merchent-customers"
              activeClassName={classes.active}

            >
              Show users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/add-new-customer"
              activeClassName={classes.active}
            >
              Add new user
            </NavLink>
          </li>

        </ul>

      </main>
    </Fragment>
  );
};

export default HomeBody;
