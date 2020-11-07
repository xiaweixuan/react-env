import axios from 'axios';
import { ISentences, ISentenceItem, IBackendSentenceItem } from './module/data';

function convertSentenceItemData(item: IBackendSentenceItem): ISentenceItem {
  const { open_id, describe } = item;
  return {
    id: open_id,
    content: describe,
  };
};

export async function querySentences(): Promise<ISentences | void> {
  try{
    const {
      data:{
        result
      }
    } = await axios.get<{ result: IBackendSentenceItem[] }>('/test');
    // axios.get<{ result: IBackendSentenceItem[] }>('http://api.xiawx.top/photos/all')
    const byId: ISentences['byId'] = {};
    const allIds: ISentences['allIds'] = [];
    result.map((item: IBackendSentenceItem) => {
      allIds.push(item.open_id);
      byId[item.open_id] = convertSentenceItemData(item);
    });
    return { byId, allIds };
  } catch(e) {
    console.log('Fail to get audios. Details: ', e);
  }
} 