import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import styles from './BasicLayout.less';

export interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
    <div className={styles.DefaultLayout}>
        <header className={styles.Header}>
            <Button><Link to="/home">Index</Link></Button>
            <Button><Link to="/about">About</Link></Button>
        </header>
        {children}
    </div>
)

export default DefaultLayout;