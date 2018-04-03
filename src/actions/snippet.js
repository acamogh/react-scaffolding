// // import * as types from './actionTypes';
// // import * as API_END_POINTS from '../constants/api.js';
// // import axios from 'axios';

// export function post (signInData, dispatch, fromSignup) {
//   axios.post(API_END_POINTS.SIGNIN, JSON.stringify(signInData), {
//       headers: {
//         'Accept': 'application/json,',
//         'Content-Type': 'application/json'
//       },
//       withCredentials:true
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         let responseData = response.data.user;
//         responseData['token'] = response.data.token;
//         localStorage.setItem('accessToken', responseData.token);
//         localStorage.setItem('authData', JSON.stringify(responseData));
//         localStorage.setItem('userId', JSON.stringify(responseData.id));
//         if (responseData.token) {
//           axios.defaults.headers.common['x-access-token'] = responseData.token;
//         }
//         if (responseData.phone && (!responseData.phoneVerified)) {
//           dispatch({
//             type: types.SHOW_VERIFY_OTP_PAGE,
//             fromSignIn: fromSignup? false : true,
//             authData: responseData
//           });
//         } else {
//           dispatch({
//             type: types.SHOW_DASHBOARD,
//             authData: responseData
//           });
//         }
//       } else {
//         dispatch({
//           type: types.SHOW_ERROR_MESSAGE,
//           statusMessage: "Unknown error occurred please try again"
//         });
//       }
//     })
//     .catch((err) => {
//       if (err && err.response && err.response.status) {
//         dispatch({
//           type: types.SHOW_ERROR_MESSAGE,
//           statusMessage: (err.response && err.response.data && err.response.data.message) ? err.response.data.message : 'Unknown error occurred please try again'
//         });
//       } else {
//         dispatch({
//           type: types.SHOW_ERROR_MESSAGE,
//           statusMessage: 'Unknown error occurred please try again'
//         });
//       }
//     });
// }
// export function none(signInData, dispatch, fromSignup) {
//   if (fromSignup) {
//     signInData.usertype = 'customer';
//     signInUser(signInData, dispatch, fromSignup);
//   } else {
//     return (dispatch) => {
//       signInUser(signInData, dispatch);
//     };
//   }
// }

// export function get(otp, phone, userId) {
//   if (userId) {
//     return (dispatch) => {
//       axios.get(API_END_POINTS.VERIFY_OTP, {
//         params: {
//           type: 'phone',
//           code: otp
//         },
//         headers: {
//           'Accept': 'application/json,',
//           'Content-Type': 'application/json',
//         },
//         withCredentials:true
//       })
//       .then((response) => {
//         if (response.status === 200) {
//           const authData = localStorage.getItem('authData') ? JSON.parse(localStorage.getItem('authData')) : {};
//           authData.phoneVerified = true;
//           localStorage.setItem('authData', JSON.stringify(authData));
//           dispatch({
//             type: types.SHOW_WELCOME_PAGE,
//           });
//         } else {
//           dispatch({
//             type: types.SHOW_ERROR_MESSAGE,
//             statusMessage: "Unknown error occurred please try again"
//           });
//         }
//       })
//       .catch((err) => {
//           dispatch({
//             type: types.SHOW_ERROR_MESSAGE,
//             statusMessage: (err.response && err.response.data && err.response.data.message) ? err.response.data.message : 'Unknown error occurred please try again'
//           });
//       });
//     };
//   } else {
//     return (dispatch) => {
//       dispatch({
//         type: types.SHOW_WELCOME_PAGE,
//       });
//     };
//   }
// }


