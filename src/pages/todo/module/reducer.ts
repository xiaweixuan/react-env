import { combineReducers } from 'redux';
import { SAVE_TODOLIST, CHANGE_TODOLIST_BY_ID, CHANGE_TODOLIST_ALL_IDS } from './actionType';
import { pull } from 'lodash-es';

export const initialState = {
  byId: {}, // id:string content:string state:doing | done
  allIds: [],
};
const todoList = (state = initialState, action)=> {
  switch (action.type) {
    case SAVE_TODOLIST:
      return {...state, ...action.payload.todo};
    case CHANGE_TODOLIST_BY_ID:
      const {
        byId: { ...newById },
      } = state;
      const { payload: { todo } } = action;
      newById[todo.id] = todo;
      return { ...state, byId: newById };
    case CHANGE_TODOLIST_ALL_IDS:
      const {
        allIds: [...newAllIds],
      } = state;
      const { payload: { changeType, id } } = action;
      switch (changeType) {
        case 'add':
          newAllIds.unshift(id);
          break;
        case 'remove':
          pull(newAllIds, id);
          break;
        default:
          break;
      }
      return { ...state, allIds: newAllIds };
    default:
      return state;
  }
}

const todoReducer = combineReducers({
  todoList,
})
export default todoReducer;