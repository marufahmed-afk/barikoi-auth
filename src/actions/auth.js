import axios from 'axios';
import { LOGIN_USER, LOGIN_FAIL, TOGGLE_MODAL } from './types';

export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log('checking form data:', formData);

  try {
    const res = await axios.post(
      'https://admin.barikoi.xyz:8090/auth/login',
      formData,
      config
    );

    console.log('checking res', res.data);

    if (res && res.data.success === true) {
      dispatch({
        type: LOGIN_USER,
        payload: res.data.data,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const toggleModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_MODAL });
};
