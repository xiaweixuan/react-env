import {
  SET_SENTENCES,
  REMOVE_SENTENCES,
  ISetSentencesAction,
  IRemoveSentencesAction,
} from './actionType'
import { ActionFucType } from '../../../actionType';


export const setSentences: ActionFucType<ISetSentencesAction<'add'>> = (payload) => ({
    type: SET_SENTENCES,
    payload,
})

export const removeSentences: ActionFucType<IRemoveSentencesAction> = (payload) => ({
    type: REMOVE_SENTENCES,
    payload,
})