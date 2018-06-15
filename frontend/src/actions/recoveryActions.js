import Axios from 'axios';

export const RECOVERY_REQUEST = 'RECOVERY_REQUEST';
export const RECOVERY_SUCCESS = 'RECOVERY_SUCCESS';
export const RECOVERY_FAILED = 'RECOVERY_FAILED';


export const getAvailablePost = () => {
  return (dispatch) => new Promise((resolve, reject) => {
    dispatch({
      type: RECOVERY_REQUEST
    });
    Axios.post('api/books/')
      .then((response) => {
        dispatch({
          type:RECOVERY_SUCCESS,
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
