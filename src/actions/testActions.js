
import axios from 'axios';

export function userActions() {
  return (dispatch) => {
    axios.get('https://prodapi.livezelo.com/pgs/details/57d67349631877034ff85ab2.json', {
        headers: {
          'Accept': 'application/json,',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        dispatch({
          type: "show_title",
          payload: response.data
        });

      })
      .catch(() => {
      });
  };
}
export function roomActions() {
  return (dispatch) => {
    axios.get('https://prodapi.livezelo.com/v2/pgs/57d93a2f631877034ff86c27/photos.json', {
        headers: {
          'Accept': 'application/json,',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        dispatch({
          
          type: "show_photos",
          payload: response.data
        });

      })
      .catch(() => {
      });
  };
}

export function userInput(enteredDdata) {
  return (dispatch) => {
    dispatch({
      type: "enteredDdata",
      payload: enteredDdata
    });
  }
 
}
