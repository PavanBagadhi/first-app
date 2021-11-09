import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRouter = ({
  component: Component,

  ...rest
}) => {
  

  const isAuth = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRouter;
