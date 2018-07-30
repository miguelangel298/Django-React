import Axios from 'axios';

export const RECOVERY_REQUEST = 'RECOVERY_REQUEST';
export const RECOVERY_SUCCESS = 'RECOVERY_SUCCESS';
export const RECOVERY_FAILED = 'RECOVERY_FAILED';


export const getAvailablePost = () => {
  return (dispatch) => new Promise((resolve, reject) => {
    console.log('llamadata');

    dispatch({
      type: RECOVERY_REQUEST
    });
    console.log('llamadata');

    Axios.post('api/books/')
      .then((response) => {
        dispatch({
          type: RECOVERY_SUCCESS,
          payload: response.data,
        });
        resolve(response.data);
      }).catch((err) => {
        dispatch({
          type: RECOVERY_FAILED,
          payload: err,
        });
        reject(err);
      });
  });
}

export const sendRecoveryEmail = (username) => {
  return (dispatch) => new Promise(function (resolve, reject) {
    dispatch({
      type: RECOVERY_REQUEST
    });
    console.log('llamadata');

    Axios.post('/verificacion/', { usuario: username }, {
      headers: {
        'X-TOKEN-AUTH': 'JWT_RULES!!',
      }
    }).then((response) => {
      const data = response.data;
      dispatch({
        type: RECOVERY_SUCCESS,
        payload: data,
      });
      resolve();
    }).catch((err) => {
      console.log(err);
      dispatch({
        type: RECOVERY_FAILED,
        payload: err
      });
      reject();
    });
  });
};


export const newBook = (book) => {
  console.log(book);
  return (dispatch) => new Promise((resolve, reject) => {
    console.log('klk ');
    dispatch({
      type: RECOVERY_REQUEST
    });
    console.log('Antes peticion');
    Axios.post('api/books/')
      .then((response) => {
        console.log('peticion');

        dispatch({
          type: RECOVERY_SUCCESS,
          payload: response.data
        });
        resolve(response.data);
      }).catch((err) => {
        dispatch({
          type: RECOVERY_FAILED,
          payload: err
        });
        reject(err);
      });
  });
}

