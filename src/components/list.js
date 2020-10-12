import React,{ Fragment } from 'react';
import { Button } from 'antd';
import styles from "./list.less";

const List = (props) => {
  const { 
    tolist,
    listChange,
  } = props;

  const delList = (id) => {
    let index = 0;
    tolist.map((item,idx)=>{
      item.id === id && (index = idx)
    })
    listChange(index);
  }
  
  return (
    <Fragment>
      {
        tolist.map((li, index) => (
          <li key={index} className={`${styles.hoverShow} ${styles.listItem}`}>
            <span className={styles.listItemSpan}>
              {li.value}
            </span>
            <Button 
              size="small" 
              onClick={()=>delList(li.id)} 
              data-id={index}
            >
              删除
            </Button>
          </li>
        ))
      }
    </Fragment>
  );
}
export default List;