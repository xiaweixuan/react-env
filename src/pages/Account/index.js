import React from 'react';
import { useStoreState, useStoreActions } from './Store';
import styles from './index.less';

const Account = (props) => {
  const { accountMsg } = useStoreState();
  const { updateAccountMsg } = useStoreActions();

  return <div>
    <div>account</div>
    <div>
      更新：
      <button onClick={() => updateAccountMsg({ accountMsg })}>更新</button>
    </div>
  </div>
}

export default Account;
