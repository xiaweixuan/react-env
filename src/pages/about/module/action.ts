import {CHANGE_BY_ID_ICON} from './actionType'

export function changeByIdIcon(payload) {
  return {
    type: CHANGE_BY_ID_ICON,
    payload,
  }
}