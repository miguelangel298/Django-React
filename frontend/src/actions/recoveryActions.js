import Axios from 'axios';

export const RECOVERY_REQUEST = 'RECOVERY_REQUEST';
export const RECOVERY_SUCCESS = 'RECOVERY_SUCCESS';
export const RECOVERY_FAILED = 'RECOVERY_FAILED';

export const REGISTRY_BOOK_SUCCESS = 'REGISTRY_BOOK_SUCCESS';
export const REGISTRY_BOOK_FAILED = 'REGISTRY_BOOK_FAILED';
export const LIST_BOOK_SUCCESS = 'LIST_BOOK_SUCCESS';
export const LIST_BOOK_FAILED = 'LIST_BOOK_FAILED';

export const newBook = (book) => {
  return (dispatch) => new Promise(function (resolve, reject) {
    dispatch({
      type: RECOVERY_REQUEST
    });
    Axios.post('/', {
      book
    }).then((response) => {
      const data = response.data;
      dispatch({
        type: REGISTRY_BOOK_SUCCESS,
        payload: {
          ...data,
        }
      });
      resolve();
    }).catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTRY_BOOK_FAILED,
        payload: err
      });
      reject();
    });
  });
}

export const listBook = () => {
  return (dispatch) => new Promise(function (resolve, reject) {
    dispatch({
      type: RECOVERY_REQUEST
    });
    Axios.get('api/books/')
      .then((response) => {
        const data = response.data;
        dispatch({
          type: LIST_BOOK_SUCCESS,
          payload: {
            ...data,
          }
        });
        resolve();
      }).catch((err) => {
        dispatch({
          type: LIST_BOOK_FAILED,
          payload: err
        });
        resolve();
      });
  });
}
