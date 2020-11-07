import {
  SAVE_TODOLIST,
  CHANGE_TODOLIST_BY_ID,
  CHANGE_TODOLIST_ALL_IDS,
  ISaveTodoListAction,
  IChangeTodoListByIdAction,
  IChangeTodoListAllIdsAction,
} from './actionType';
import { ITodos } from './data';
import { pull } from 'lodash-es';

export const initialState: ITodos = {
  byId: {},
  allIds: [],
};

type actionType = ISaveTodoListAction | IChangeTodoListByIdAction | IChangeTodoListAllIdsAction;

export const todoListReducer = (state: ITodos, action: actionType): ITodos => {
  switch (action.type) {
    case SAVE_TODOLIST:
      return { ...state, ...action.payload };
    case CHANGE_TODOLIST_BY_ID:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...{ [action.payload.id]: action.payload },
        },
      };
    case CHANGE_TODOLIST_ALL_IDS:
      const { allIds: [...newAllIds] } = state;
      const { payload: { changeType, id } } = action;
      if (changeType === 'add') {
        newAllIds.unshift(id);
      } else {
        pull(newAllIds, id);
      }
      return { ...state, allIds: newAllIds };
    default:
      return state;
  }
}
