import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const ViewMoreDetails = () => {


  const params = useParams();
  const history = useHistory();

  const usrData = useSelector((state) => state.reducer.data);

  const customerDetails = usrData.find((usr) => usr.id === params.custId);

  const backButtonHandler = () => {
    // history.push('/home/show-merchent-customers');
    history.goBack();
  };


  return (
    <Fragment>
      <section>
        <h1>Customer Details</h1>
        <div>
          <h3>Id: {customerDetails.id}</h3>
          <h3>Name: {customerDetails.name}</h3>
          <h3>Age: {customerDetails.age}</h3>
        </div>
      </section>
      <button onClick={backButtonHandler}>Back</button>
    </Fragment>
  );
};

export default ViewMoreDetails;
