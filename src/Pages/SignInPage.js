import { useSelector } from 'react-redux';
import SignIn from '../Components/Auth/SignIn';

const SignInPage = () => {
  const authState = useSelector(state=> state.authReducer)

  return <SignIn token={authState.token} isLoggedIn= {authState.isLoggedIn}/>;
};

export default SignInPage;
