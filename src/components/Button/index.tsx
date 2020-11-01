import * as React from 'react';
import styles from './index.less';

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { children, onClick } = props;

    return (
      <div className={styles.button} onClick={ () => onClick && onClick() } >
        <div className={styles.contain}>
          {children}
        </div>
      </div>
    )

}
export default Button;