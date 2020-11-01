// saga
export const SET_SENTENCES = Symbol();
export interface ISetSentencesAction<T extends 'add'> {
  type: typeof SET_SENTENCES,
  payload: {
    changeType: T,
    todo: {
      id: number,
      content: string,
    }
  },
}

export const REMOVE_SENTENCES = Symbol();
export interface IRemoveSentencesAction {
  type: typeof REMOVE_SENTENCES,
  payload: { id: number },
}

// reducer
export const SAVE_TODOLIST = Symbol();
export const CHANGE_TODOLIST_BY_ID = Symbol();
export const CHANGE_TODOLIST_ALL_IDS = Symbol();