import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRouter = ({
  component: Component,
  ...rest
}) => {
  const isAuth = localStorage.getItem('token');

  // const history = useHistory()

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          // history.goBack();
          <Redirect to = "/home" />

        } else {
          return <Component />;
        }
      }}
    />
  );
};

export default PublicRouter;
