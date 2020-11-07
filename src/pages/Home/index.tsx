import * as React from 'react';
import Input from '../../components/Input';
import List from './components/List';
import { getTodoListById } from './module/selectors';
import {
  CHANGE_TODOLIST_ALL_IDS,
  CHANGE_TODOLIST_BY_ID,
} from './module/actionType';
import { ITodoItem } from './module/data'
import { initialState, todoListReducer } from './module/reducer';

const { useState, useReducer } = React;

export interface HomeProps {
  todoList: Array<ITodoItem>;
}

const Home: React.FC<HomeProps> = () => {

  const [targetValue, setTargetValue] = useState('');
  const [todoListState, todoListDispatch] = useReducer(todoListReducer, initialState);
  const todoList = getTodoListById(todoListState.byId, todoListState.allIds);

  const handleRemove = (id: number) => {
    todoListDispatch({
      type: CHANGE_TODOLIST_ALL_IDS,
      payload: {
        changeType: 'remove',
        id: id,
      }
    });
  }

  const handleAddItem = () => {
    if (!targetValue) return;
    const newItemId = +new Date;
    todoListDispatch({
      type: CHANGE_TODOLIST_ALL_IDS,
      payload: {
        changeType: 'add',
        id: newItemId,
      }
    });
    todoListDispatch({
      type: CHANGE_TODOLIST_BY_ID,
      payload: {
        id: newItemId,
        content: targetValue,
      }
    });
    setTargetValue('');
  }

  return (
    <div>
      <Input
        value={targetValue}
        onChange={(value: string) => { setTargetValue(value) }}
        btnContent="确定"
        btnClick={handleAddItem}
      />

      <List
        tolist={todoList}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default Home;