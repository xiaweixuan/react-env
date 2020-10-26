import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './BasicLayout.less';

const DefaultLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={matchProps => (
        <div className={styles.DefaultLayout}>
            <header className={styles.Header}>
                <Button type="primary"><Link to="/index">Index</Link></Button>
                <Button type="default"><Link to="/about">About</Link></Button>
            </header>
            <Component {...matchProps} />
        </div>
    )} />
)

export default DefaultLayout;