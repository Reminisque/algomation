import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem(props) {
  const { className } = props;

  return (
    <React.Fragment>
      <li {...props} className={[styles.root, className].join(' ')}>
        {props.children}
      </li>
    </React.Fragment>
  )
}

export { MenuItem };