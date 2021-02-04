import { AUTH_TOKEN } from "../../constants/Constants";
import createActionTypes from "./createActionTypes";

const actions = [
  'SET_LOADING',
  'SET_LOGGED_IN',
  'SET_USER',
  'SET_SHOW_SPLASH'
];

export const actionTypes = createActionTypes(actions, 'Auth'); 

export const checkIfLogin = () => async function (dispatch, getState) {
  let authToken = await LocalStorage.getData(AUTH_TOKEN);
  setTimeout(()=>{  
    dispatch({
      type: actionTypes.SET_SHOW_SPLASH,
      payload: {
        showSplash: false,
        isLoggedIn: authToken && authToken.length > 0
      }
    });
  }, 2000);
}

