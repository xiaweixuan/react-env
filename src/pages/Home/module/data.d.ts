export interface ITodoItem {
  id: number,
  content: string,
}
export interface ITodos {
  byId: { [id: number]: ITodoItem };
  allIds: number[];
}