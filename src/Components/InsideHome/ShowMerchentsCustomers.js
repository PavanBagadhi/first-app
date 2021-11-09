import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from '../../Store/Actions/ActionCreators';
import MerchentCustomer from './MerchentCustomer';
import classes from '../InsideHome/ShowMerchentCustomer.module.css';
import { useHistory, useLocation } from 'react-router';

const ShowMerchentsCustomers = () => {
  const dispatch = useDispatch();
  const merchentCustomers = useSelector((state) => state.reducer.data);
  const history = useHistory();
  const location = useLocation();

  const queryParamsObject = new URLSearchParams(location.search);

  const isSortAscending = queryParamsObject.get('sort') === 'asc';


  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);

  if (merchentCustomers.length === 0) {
    return <p>Merchent users not available. Kinldy add</p>;
  }

  const sortHandler = () => {
    history.push(
      `${location.pathname}?sort=${isSortAscending ? 'desc' : 'asc'}`
    );
    if(isSortAscending){
      merchentCustomers.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        } else if (a.id > b.id) {
          return -1;
        } else {
          return 0;
        }
      });
    } else{
      merchentCustomers.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      });
    }

  };

  return (
    <Fragment>
      <div className={classes.sortingAction}>
        <h1>Registered Customers</h1>
        <div>
          <button className={classes.sorting} onClick={sortHandler}>
            Sort {isSortAscending ? 'Decending' : 'Ascending'}
          </button>
        </div>
      </div>

      <ul className={classes.ul}>
        {merchentCustomers.length !== 0 &&
          merchentCustomers.map((customer) => {
            return (
              <MerchentCustomer
                name={customer.name}
                age={customer.age}
                id={customer.id}
              />
            );
          })}
      </ul>
    </Fragment>
  );
};

export default ShowMerchentsCustomers;
