import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, REGISTRATION_FAIL, REGISTRATION_SUCCESS} from './types';

export const loadUser = () => (dispatch, getState) =>{
    dispatch({type: USER_LOADING});

    const token = getState().auth.token;

    const config = {
        header:{
            'Content-Type': 'application/json'
        }
    }

    if(token){
        config.header['Authorization'] = `Token ${token}`;
    }
    axios.get('/auth/user/', config)
        .then(res => {
            dispatch({
                type: USER_LOADING,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: AUTH_ERROR
            })
        })
} 


export const login = (username, password) => (dispatch) =>{
    // Headers
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
      // Request Body
      const body = JSON.stringify({ username, password });
    
      axios
        .post('/auth/login/', body, config)
        .then((res) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          })
        })
        .catch((err) => {
          dispatch({
            type: LOGIN_FAIL,
          });
        })
    
} 

export const register = (username, email, password) => (dispatch) =>{
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email, password });

  axios
  .post('/auth/register/', body, config)
  .then((res) => {
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: res.data,
    })
  })
  .catch((err) => {
    dispatch({
      type: REGISTRATION_FAIL,
    });
  })

}

export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};