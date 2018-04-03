// import * as types from '../actions/actionTypes';
import { assign } from 'lodash';
import { map } from 'lodash';


export default function commonReducer(state = {}, action) {
  switch (action.type) {
    case "show_title": {
      return (assign({}, state, { userData: action.payload}));
    }
    case "show_photos": {
      return (assign({}, state, { facilities: action.payload}));
    }

    case "enteredDdata": {
      let filteredData=[]
      map(state.userData, (users, ) => {
        if(users.title.indexOf(action.payload)!=-1){
            filteredData.push(users.title)
        }
    })
      return (assign({}, state, { filteredValue: filteredData }));
    }
    default:
      return state;
  }
}

