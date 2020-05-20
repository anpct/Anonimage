import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, REGISTRATION_FAIL, REGISTRATION_SUCCESS, GET_ERRORS, LOGOUT_USER, CLEAR_DATA, CLEAR_V_DATA, CLEAR_ALL_DATA, SET_LOADER } from './types';

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
    dispatch({
      type: SET_LOADER
    });
    axios.get('/auth/user/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
            dispatch({
              type: SET_LOADER
            });
        })
        .catch(error => {
            dispatch({
                type: AUTH_ERROR
            });
            dispatch({
              type: SET_LOADER
            });
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

      dispatch({
        type: SET_LOADER
      });
    
      axios
        .post('/auth/login/', body, config)
        .then((res) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
          dispatch({
            type: SET_LOADER
          });
        })
        .catch((err) => {
          dispatch({
            type: LOGIN_FAIL,
          });
          const error ={
            msg: err.response.data,
            status: err.response.status
          };
          dispatch({
            type: GET_ERRORS,
            payload: error
          });
          dispatch({
            type: SET_LOADER
          });
        })
    
} 

export const register = (username, email, password, password2) => (dispatch) =>{
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if( password !== password2){
    const error ={
      msg: { mismatch: 'password mismatch'},
      status: null
    };
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
    return;
  }

  dispatch({
    type: SET_LOADER
  });

  const body = JSON.stringify({ username, email, password });

  axios
  .post('/auth/register/', body, config)
  .then((res) => {
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: SET_LOADER
    });
  })
  .catch((err) => {
    dispatch({
      type: REGISTRATION_FAIL,
    });
    const error ={
      msg: err.response.data,
      status: err.response.status
    };
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
    dispatch({
      type: SET_LOADER
    });
  })

}

export const logout = () => (dispatch, getState) =>{

  dispatch({
    type: SET_LOADER
  });
  axios.post('/auth/logout/', null, tokenConfig(getState))
    .then(
      res =>{
      dispatch({
        type: LOGOUT_USER
      });
      dispatch({
        type: CLEAR_DATA
      });
      dispatch({
        type: CLEAR_V_DATA
      });
      dispatch({
        type: CLEAR_ALL_DATA
      });
      dispatch({
        type: SET_LOADER
      });
    }
    )
    .catch(err=>{console.log(err)})
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