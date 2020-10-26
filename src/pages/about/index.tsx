import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeByIdIcon } from './module/action';
import image from '../../assets/img.jpg';
import { getSentenceListById } from './module/selectors';

const About = (props) => {
  const { sentenceList, dispatch } = props;

  useEffect(() => {
    const action = changeByIdIcon();
    dispatch(action);
  }, []);

  return (<div>
    <h3>关于</h3>
    <img width='275px' src={image} />
    <div>
      {
        sentenceList.map(item =>
          <div
            style={{ marginTop: '15px' }}
            key={item.open_id}
          >
            {item.describe}
          </div>
        )
      }
    </div>
  </div>)
}

const mapStateToProps = (state) => {
  const {
    aboutReducer: {
      sentences: {
        allIds,
        byId,
      }
    }
  } = state;
  return {
    sentenceList: getSentenceListById(byId, allIds),
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
)(About);