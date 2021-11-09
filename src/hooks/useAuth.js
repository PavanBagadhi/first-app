import { useState } from 'react';

const useAuth = () =>{
  const [isAuth, setIsAuth]= useState(false);
  const validationHadnler = (usrName, pwd) =>{
    if (!usrName || !pwd) {
      setIsAuth(prevState=> false);
      alert('Input feilds cannot be empty');
    } else {
      setIsAuth(prevState=> true);
    }
  }
  return { isAuth, validationHadnler}
}

export default useAuth;