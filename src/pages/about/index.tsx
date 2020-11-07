import * as React from 'react';
import { connect } from 'react-redux';
import { IChangeByIdIconAction, CHANGE_BY_ID_ICON } from './module/actionType';
import image from '../../assets/img.jpg';
import { getSentenceListById } from './module/selectors';
import { IAboutReducer } from './module/reducer';
import { ISentenceItem } from './module/data';

const { useEffect } = React;

export interface AboutProps {
  sentenceList: ISentenceItem[];
  dispatch: React.Dispatch<IChangeByIdIconAction>;
}

const About: React.FC<AboutProps> = (props) => {
  const { sentenceList, dispatch } = props;

  useEffect(() => {
    const action: IChangeByIdIconAction = {
      type: CHANGE_BY_ID_ICON
    };
    dispatch(action);
  }, []);

  return (<div>
    <h3>关于</h3>
    <img width='275px' src={image} />
    <div>
      {
        sentenceList.map((item: ISentenceItem) =>
          <div
            style={{ marginTop: '15px' }}
            key={item.id}
          >
            {item.content}
          </div>
        )
      }
    </div>
  </div>)
}

const mapStateToProps = (
  state: IAboutReducer
): Pick<AboutProps, 'sentenceList'> => {
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
const mapDispatchToProps = (
  dispatch: React.Dispatch<IChangeByIdIconAction>
): Pick<AboutProps, 'dispatch'> => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);