import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomeBody from '../Components/Home/HomeBody';
import AddNewCustomer from '../Components/InsideHome/AddNewCustomer';
import ShowMerchentsCustomers from '../Components/InsideHome/ShowMerchentsCustomers';
import ViewMoreDetails from '../Components/InsideHome/ViewMoreDetails'


const HomePage = () => {
  return (
    <Fragment>
      <HomeBody />
      <Route path='/home/show-merchent-customers' exact >
        <ShowMerchentsCustomers/>
      </Route>
      <Route path='/home/add-new-customer' exact>
        <AddNewCustomer/>
      </Route>
      <Route path="/home/show-merchent-customers/view-more-details/:custId">
        <ViewMoreDetails />
      </Route>
    </Fragment>
  );
};
export default HomePage;
