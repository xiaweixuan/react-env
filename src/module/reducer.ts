import { combineReducers } from 'redux';
import aboutReducer from '../pages/About/module/reducer';
// import todoReducer from '../pages/Home/module/reducer';

const rootReducer = combineReducers({
  aboutReducer,
  // todoReducer,
});
export default rootReducer;