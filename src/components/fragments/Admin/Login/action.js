// (1) import constant
import jwt from 'jwt-decode';
import { USER_LOGIN } from '../../../../store/actionTypes';
import { login } from '../../../../api/auth';

export function userLogin(user, token) {
  return {
    type: USER_LOGIN,
    user,
    token
  };
}

export const submitLogin = () => {
  return async (dispatch) => {
    try {
      const params = {
        school: 'http://localhost:4000',
        username: '24111997',
        password: '24111997'
      };
      const {
        data: { token }
      } = await login(params);

      const user = jwt(token);

      dispatch(userLogin(user, token));
      // return response;
    } catch (error) {
      console.log(error);
    }
  };
};
