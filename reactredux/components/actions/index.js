import axios from 'axios';
const ROOT_URL = 'https://mobile-server-ii.herokuapp.com/'

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_USERS = 'GET_USERS';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = (error) => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://mobile-server-ii.herokuapp.com/users',
      data: { 'email': user.email, 'password': user.password }
      })
      .then((res) => {
        console.log('received response:', res)
        //AsyncStorage.setItem('token', res.data.token)
        //this.props.navigation.navigate('Content')
        dispatch({
          type: USER_REGISTERED,
        });

      })
      .catch((err) => {
        alert(err)
      })
  }
};
