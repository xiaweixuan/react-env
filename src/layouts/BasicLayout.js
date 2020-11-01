import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './BasicLayout.less';

const DefaultLayout = ({ children }) => (
    <div className={styles.DefaultLayout}>
        <header className={styles.Header}>
            <Button type="primary"><Link to="/todo">Index</Link></Button>
            <Button type="default"><Link to="/about">About</Link></Button>
        </header>
        {children}
    </div>
)

export default DefaultLayout;