import React,{ Fragment } from 'react';
import { Button } from 'antd';
import styles from "./list.less";

const List = (props) => {
  const { 
    tolist,
    onRemove,
  } = props;
  
  return (
    <Fragment>
      {
        tolist.map((li, index) => (
          <li key={index} className={`${styles.hoverShow} ${styles.listItem}`}>
            <span className={styles.listItemSpan}>
              {li.content}
            </span>
            <Button 
              size="small" 
              onClick={()=>onRemove(li.id)} 
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