import { LOGIN_USER, LOGIN_FAIL, TOGGLE_MODAL } from '../actions/types';

const initialState = {
  data: localStorage.getItem('token'),
  isAuthenticated: false,
  openModal: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
        openModal: false,
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        openModal: !state.openModal,
      };

    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        data: null,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
