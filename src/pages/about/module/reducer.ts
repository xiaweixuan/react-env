import { combineReducers } from 'redux';
import { SAVE_ABOUT, ISaveAboutAction } from './actionType';
import { ISentences } from './data';

export const initialState: ISentences = {
  byId: {},
  allIds: [],
};
export interface IAboutReducer {
  aboutReducer: {
    sentences: ISentences,
  },
}

const sentences = (state = initialState, action: ISaveAboutAction)=> {
  switch (action.type) {
    case SAVE_ABOUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
const aboutReducer = combineReducers({
  sentences,
})
export default aboutReducer;