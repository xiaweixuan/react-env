import { ISentences } from './data';

export const getSentenceListById = (byId: ISentences['byId'], allIds: ISentences['allIds']) => allIds.map((id: number) => byId[id]);