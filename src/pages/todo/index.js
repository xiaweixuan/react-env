import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Input } from 'antd';
import List from '../../components/list';
import { setSentences, removeSentences } from './module/action';
import { getTodoListById } from './module/selectors';

const Todos = (props) => {
  const { todoList, dispatch } = props;

  const [targetValue, setTargetValue] = useState('');

  const handleRemove = (id) => {
    const action = removeSentences({ id });
    dispatch(action);
  }
  const handleAddItem = () => {
    const action = setSentences({
      changeType: 'add',
      todo: {
        id: +new Date,
        content: targetValue,
      },
    });
    dispatch(action);
    setTargetValue('');
  }

  return (
    <div>
      <Input
        value={targetValue}
        onChange={(e) => { setTargetValue(e.target.value) }}
        addonAfter={
          <span onClick={handleAddItem} style={{ cursor: 'pointer' }}>确定</span>
        }
      />
      <ul>
        <List
          tolist={todoList}
          onRemove={handleRemove}
        />
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    todoReducer: {
      todoList: {
        allIds,
        byId,
      }
    }
  } = state;
  return {
    todoList: getTodoListById(byId, allIds),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);