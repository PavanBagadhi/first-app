
export const showData = (data) => {
  return { type: 'SHOW_DATA', payload: data };
};



export const getRequest = () => {
  return (dispatch) => {
    
    const sendRequest = async () => {
      const response = await fetch(
        'https://quick-user-details-default-rtdb.firebaseio.com/users.json'
      );
      if (!response.ok) {
        throw new Error('Fetch data failed.');
      }
      const data = await response.json();
      

      dispatch(showData(data));
    };
    sendRequest().catch((error) => {
      console.log('error occured');
    });
  };
};

export const sendData = (enteredData) => {
  return (dispatch) => {
    const sendPostRequest = async () => {
      const response = await fetch(
        'https://quick-user-details-default-rtdb.firebaseio.com/users.json',
        {
          method: 'POST',
          body: JSON.stringify(enteredData),
        }
      );
      if (!response.ok) {
        throw new Error('Send data failed.');
      }
    };
    sendPostRequest().catch((error) => {
      console.log('error Occured');
    });
  };
};

export const loginRequest = (authentication, callBackFuntion) => {
  return (dispatch) => {

    const sendLoginRequest = async () => {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDukeqAItr6D7pstW4lH0sRbO2uQszXK7M',
        {
          method: 'POST',
          body: JSON.stringify({
            email: authentication.usrName,
            password: authentication.pwd,
            returnSecureToken: true,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      const data = await res.json();
      console.log(data.expiresIn)

      if (res.ok) {
        localStorage.setItem('token', data.idToken);
        const actualTime = new Date().getTime();
        const expireTime = +data.expiresIn*10000
        const exactExpireValue = new Date(actualTime-expireTime);
        sessionStorage.setItem('expiresIN', exactExpireValue)

  
        if (callBackFuntion) {
          callBackFuntion(data.idToken, exactExpireValue);
        }
        
      }
      if (!res.ok) {
        let errorMessage;
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    };
    sendLoginRequest().catch((error) => {
      console.log(error.message);
    });
  };
};
