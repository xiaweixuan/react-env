import { ITodoItem, ITodos } from "./data";

// reducer
export const SAVE_TODOLIST = Symbol();
export interface ISaveTodoListAction {
  type: typeof SAVE_TODOLIST;
  payload: ITodos;
};

export const CHANGE_TODOLIST_BY_ID = Symbol();
export interface IChangeTodoListByIdAction {
  type: typeof CHANGE_TODOLIST_BY_ID;
  payload: ITodoItem;
}
export const CHANGE_TODOLIST_ALL_IDS = Symbol();
export interface IChangeTodoListAllIdsAction {
  type: typeof CHANGE_TODOLIST_ALL_IDS;
  payload: { changeType: 'add' | 'remove'; id: number; };
}