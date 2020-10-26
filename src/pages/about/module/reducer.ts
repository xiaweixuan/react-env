import { combineReducers } from 'redux';
import { SAVE_ABOUT } from './actionType';

export const initialState = {
  byId: {},
  allIds: [],
};
//
//修改为savesentences changesentencesbyid changesentencesbyallids
const sentences = (state = initialState, action)=> {
  switch (action.type) {
    case SAVE_ABOUT:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
const aboutReducer = combineReducers({
  sentences,
})
export default aboutReducer;