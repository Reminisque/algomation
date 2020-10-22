import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header {...props} className={[styles.root, props.className].join(' ')}>
      {props.children}
    </header>
  )
}

export { Header };