import * as React from 'react';
import styles from './index.less';

export interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  btnContent?: string;
  btnClick?: () => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { value, onChange, btnContent, btnClick } = props;

  return (
    <div className={styles.inputContain}>
      <input className={styles.input} value={value} onChange={(e: any) => onChange(e.target.value)} />
      <span className={styles.span} onClick={btnClick}>{btnContent}</span>
    </div>
  )

}
export default Input;