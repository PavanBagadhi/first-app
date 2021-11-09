import { useState } from 'react';

const useChangeHandler = () => {
  const [entredVal, setEntredVal] = useState('');

  const inputChangeHandler = (event) => {
    setEntredVal(event.target.value);
  };

  return { entredVal, inputChangeHandler };
};

export default useChangeHandler;
