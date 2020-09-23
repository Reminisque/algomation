import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem(props) {
  const { className } = props;
  const isTitle = props.title ? styles.title : "";

  return (
    <React.Fragment>
      <li className={[styles.root, isTitle, className].join(' ')}>
        {props.children}
      </li>
    </React.Fragment>
  )
}

export { MenuItem };