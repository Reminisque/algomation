import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  const { className, onClick } = props;

  return (
    <button className={[styles.root, className].join(' ')} onClick={onClick}>
      {props.children}
    </button>
  )
}

export { Button };