import { combineReducers } from 'redux';
import aboutReducer from '../pages/about/module/reducer';
import todoReducer from '../pages/todo/module/reducer';

const rootReducer = combineReducers({
  aboutReducer,
  todoReducer,
});
export default rootReducer;