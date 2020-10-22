import React from 'react';
import styles from './TwoBarBurgerIcon.module.css';

function TwoBarBurgerIcon(props) {
  return (
    <div className={styles.root}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  )

}

export { TwoBarBurgerIcon };