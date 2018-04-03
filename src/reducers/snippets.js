// import * as types from '../actions/actionTypes';
// import { assign } from 'lodash';

// const initialState = {
//   signUpModalVisible: false,
//   showErrorMessage:''
// };
// export default function authenticationReducer(state = initialState, action) {
//   switch (action.type) {
//     case types.SHOW_SIGNUP_PAGE:
//       return assign({}, state, {signUpModalVisible: false, currentComponentKey: 'sign-up'});
//     case types.GET_USER_LOCATIONS: {
//         const userLocations = keyBy(action.userLocations, 'id');
//         return (assign({}, state, { userLocations: userLocations }));
//     }
    
//     default:
//       return state;
//   }
// }