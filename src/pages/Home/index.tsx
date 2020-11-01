import * as React from 'react';
import { connect } from 'react-redux'
import Input from '../../components/Input';
import List from './components/List';
import { setSentences, removeSentences } from './module/action';
import { getTodoListById } from './module/selectors';
import { REMOVE_SENTENCES, IRemoveSentencesAction } from './module/actionType';
import { ITodoItem } from './module/data'

const { useState } = React;

export interface HomeProps extends React.Dispatch<IRemoveSentencesAction> {
  todoList?: Array<ITodoItem>;
}

const Home: React.FC<HomeProps> = (props) => {
  const { todoList, dispatch } = props;

  const [targetValue, setTargetValue] = useState('');

  const handleRemove = (id: number) => {
    const action = {
      type: REMOVE_SENTENCES,
      payload: { id },
    }
    dispatch(action);
  }
  const handleAddItem = () => {
    if (!targetValue) return;
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

const mapStateToProps = (state: any) => {
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
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);