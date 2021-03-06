import React from 'react';
import styles from './Menu.module.css';

function Menu(props) {
  return (
    <ul {...props} className={[styles.root, props.className].join(' ')} >
      {props.children}
    </ul>
  )
}

export { Menu };