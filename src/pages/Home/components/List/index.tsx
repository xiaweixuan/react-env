import * as React from 'react';
import Button from '../../../../components/Button';
import { ITodoItem } from '../../module/data';
import styles from "./index.less";

export interface ListProps {
  tolist: Array<ITodoItem>;
  onRemove: (id: number) => void;
}

const List: React.FC<ListProps> = ({ tolist, onRemove }) => (
  <ul>
    {
      tolist.map((li: ITodoItem) => (
        <li key={li.id} className={`${styles.hoverShow} ${styles.listItem}`}>
          <span className={styles.listItemSpan}>
            {li.content}
          </span>
          <span
            className={styles.btn}
            onClick={() => onRemove(li.id)}
          >
            删除
          </span>
        </li>
      ))
    }
  </ul>
)
export default List;