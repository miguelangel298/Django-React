import {
  RECOVERY_REQUEST,
  RECOVERY_SUCCESS,
  RECOVERY_FAILED,
  REGISTRY_BOOK_SUCCESS,
  REGISTRY_BOOK_FAILED,
} from '../actions/recoveryActions.js';

const initialState = {
  loading: false,
  loaded: false,
  err: null,
  message: null,
  userStatus: '',
  status: null,
};


export default (state = initialState, action) => {
  switch(action.type) {
    case RECOVERY_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case RECOVERY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case RECOVERY_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
        err: action.payload.err,
      };
    case REGISTRY_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        msg: action.payload,
      };
    case REGISTRY_BOOK_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
        err: action.payload.err,
      };
    case 'ERASE_USERNAME':
      return {
        ...state,
        username: '',
      };
    default:
      return initialState;
  }
};
