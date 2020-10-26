import axios from 'axios';

export async function querySentences() {
  try{
    const {
      data:{
        result
      }
    } = await axios.get('/test');
    // axios.get('http://api.xiawx.top/photos/all')
    const byId = {};
    const allIds = [];
    result.map(item=>{
      allIds.push(item.open_id);
      byId[item.open_id]=item;
    });
    return { byId, allIds };
  } catch(e) {
    console.log('Fail to get audios. Details: ', e);
  }
} 
