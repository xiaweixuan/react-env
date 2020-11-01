import { combineReducers } from 'redux';
import { SAVE_ABOUT } from './actionType';

export const initialState: any = {
  byId: {},
  allIds: [],
};

const sentences = (state = initialState, action: any)=> {
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