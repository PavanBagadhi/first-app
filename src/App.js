import { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import ProtectedRouter from './Components/ProtectedRouter';
import PublicRouter from './Components/PublicRouter';
import AboutPage from './Pages/AboutPage';

import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';

function App() {



  return (
    <Fragment>
      <Switch>
        <PublicRouter  path="/login" component={SignIn}  />

        <ProtectedRouter path="/home" component={HomePage} />

        <ProtectedRouter path="/about"  component={AboutPage} />

        <ProtectedRouter path="/services"  component={ServicesPage} />

        <PublicRouter path="*" component={SignIn} />
      </Switch>
    </Fragment>
  );
}

export default App;
