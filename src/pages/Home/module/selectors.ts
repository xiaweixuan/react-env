import { ITodos } from './data';
export const getTodoListById = (byId: ITodos['byId'], allIds: ITodos['allIds']) => allIds.map((id: number) => byId[id]);