import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem(props) {
  return (
    <React.Fragment>
      <li {...props} className={[styles.root, props.className].join(' ')}>
        {props.children}
      </li>
    </React.Fragment>
  )
}

export { MenuItem };