import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import { routerReducer } from 'react-router-redux';

const appReducer = combineReducers({
  
  routing: routerReducer,
 
  commonReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
    localStorage.clear();
    window.location.pathname = '';
  }
  return appReducer(state, action);
}
export default rootReducer;
