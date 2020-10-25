import {SET_SENTENCES, REMOVE_SENTENCES} from './actionType'

export function setSentences(payload) {
  return {
    type: SET_SENTENCES,
    payload, // changeType:'add | update' ,todo: { id: '', content: '' }
  }
}

export function removeSentences(payload) {
  return {
    type: REMOVE_SENTENCES,
    payload, // id: ''
  }
}