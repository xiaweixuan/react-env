/**
 * Effect
*/
import { ISentences } from './data';
export const CHANGE_BY_ID_ICON = Symbol();
export interface IChangeByIdIconAction {
  type: typeof CHANGE_BY_ID_ICON;
}

/**
 * Reducer
*/
export const SAVE_ABOUT = Symbol();
export interface ISaveAboutAction {
  type: typeof SAVE_ABOUT;
  payload: ISentences;
};