import React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { sendData, getRequest } from '../../Store/Actions/ActionCreators';
import { useHistory } from 'react-router-dom';
import useChangeHandler from '../../hooks/useChangeHandler';


import classes from '../InsideHome/AddNewCustomer.module.css';

const AddNewCustomer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    entredVal: name,
    inputChangeHandler: nameChangeHandler,
  } = useChangeHandler();
  const {
    entredVal: age,
    inputChangeHandler: ageChangeHandler,
  } = useChangeHandler();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: Math.random().toString().substr(3, 6),
      name: name,
      age: age,
    };
    dispatch(sendData(data));
    history.push('/home/show-merchent-customers');
    dispatch(getRequest());
  };

  return (
    <Fragment>
      <section className={classes['add-new-customer-section']}>
        <h1>Add new customer details</h1>
        <form
          onSubmit={submitHandler}
          className={classes['add-new-customer-form']}
        >
          <label>Customer Name</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            className={classes['name-input']}
          />
          <lable>Age</lable>
          <br></br>
          <input
            type="text"
            onChange={ageChangeHandler}
            className={classes['age-input']}
          />
          <button type="submit" className={classes.button}>
            Add
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default AddNewCustomer;
