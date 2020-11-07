export interface IBackendSentenceItem {
  open_id: number;
  describe: string;
}
export interface ISentenceItem {
  id: number;
  content: string;
}
export interface ISentences {
  byId: { [id: number]: ISentenceItem };
  allIds: number[]; 
}