import React,{ useState } from 'react';
import List from '../components/list';
import { Input } from 'antd';

const Todos = () => {
  const [todoList,setTodoList] = useState([
    {id:11111,value:'todo1'},
    {id:22222,value:'todo2'},
  ]);
  const [targetValue,setTargetValue] = useState("");
  const listChange = (index) => {
    let cur = todoList;
    cur.splice(index, 1);
    setTodoList([...cur]);
  }
  const addItem = () => {
    let item = {
      id: +new Date,
      value: targetValue,
    }
    setTodoList([...todoList,item]);
  }
  const getValue = (e) => {
    setTargetValue(e.target.value);
  }
  return (
    <div>
      <Input 
        value={targetValue} 
        onChange={(e)=>{getValue(e)}} 
        addonAfter={
          <span onClick={addItem} style={{cursor: 'pointer'}}>确定</span>
        }
      />
      <ul>
        <List
          tolist={todoList}
          listChange={listChange}
        />
      </ul>
    </div>
  )
}

export default Todos;