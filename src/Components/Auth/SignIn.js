import React, { Fragment } from 'react';
import classes from '../Auth/SignIn.module.css';
import NormalHeader from '../Home/NormalHeader';
import useChangeHandler from '../../hooks/useChangeHandler';
import * as ActionCreator from '../../Store/Actions/ActionCreators';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logoutHandler } from '../Home/Header';



const SignIn = (props) => {
  const dispatch = useDispatch();



  const { entredVal: usrName, inputChangeHandler: usrNameChangeHandler } =
    useChangeHandler();

  const { entredVal: pwd, inputChangeHandler: pwdChangeHandler } =
    useChangeHandler();

  const history = useHistory();

  const calculationRemainingTime=(logoutTimer)=>{
    const adjTimeOutValue = new Date(logoutTimer).getTime()
    const currentTime = new Date().getTime()

    const remainingTime = currentTime-adjTimeOutValue

    return remainingTime;
  }

  const handleAuthRedirect = (token, exactExpireValue) => {
    let remainingTime
    if (token) {
      history.push('/home');
      remainingTime =calculationRemainingTime(exactExpireValue)
    }

    console.log(remainingTime)

    setTimeout(()=>{
      logoutHandler(history);
      const Time = new Date()
      console.log(Time)
    }, remainingTime)
  };



  const signClickHandler = (event) => {
    event.preventDefault();

    dispatch(
      ActionCreator.loginRequest(
        {
          usrName,
          pwd,
        },
        handleAuthRedirect
      )
    );
  };

  return (
    <Fragment>
      <NormalHeader />
      <section className={classes.section}>
        <h1>Login</h1>
        <div className={classes.loginFeildsDiv}>
          <form onSubmit={signClickHandler}>
            <lable>User name</lable>
            <input type="email" onChange={usrNameChangeHandler} />
            <lable>Password</lable>
            <input type="password" onChange={pwdChangeHandler} />
            <button className={classes.button} type="submit">
              Sign
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default SignIn;
