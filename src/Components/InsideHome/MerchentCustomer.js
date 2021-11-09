import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../InsideHome/MerchentCustomer.module.css';


const MerchentCustomer = (props) => {
  return (
    <>
      <li key={props.id} className={classes.li}>
        <div className={classes.merchentCustomerInformation}>
          <h2>Customer name: {props.name}</h2>
          <p>Age: {props.age}</p>
        </div>
        <div className={classes.btn}>
          <NavLink to={`/home/show-merchent-customers/view-more-details/${props.id}`}>
            View more
          </NavLink>
        </div>
      </li>
      
    </>
  );
};

export default MerchentCustomer;
