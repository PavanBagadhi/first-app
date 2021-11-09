import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialValue = {
  data: [],
};

const reducer = (state = initialValue, action) => {
  if (action.type === 'SHOW_DATA') {
    const userData = [];
    console.log(action.payload);
    for (let key in action.payload) {
      userData.push({
        id: action.payload[key].id,
        name: action.payload[key].name,
        age: action.payload[key].age,
      });
    }
    console.log(userData);
    return {
      data: userData,
      isAuth: state.isAuth,
    };
  }

  return state;
};

const authReducer = (
  state = {
 
    isLoggedIn: false,
  },
  action
) => {
  if (action.type === 'AUTH_LOGIN') {

      let userIsLoggedIn

      const token=localStorage.getItem('token')
    if (token) {
      userIsLoggedIn = true;
    }

    return {
 
      isLoggedIn: userIsLoggedIn,
    };
  }
  if(action.type === 'AUTH_LOGOUT') {

    return{
      isLoggedIn: false
    }
  }

  return state;
};

const store = createStore(combineReducers({reducer, authReducer}), applyMiddleware(thunk));

console.log(store)

export default store;
