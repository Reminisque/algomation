import React from 'react';
import styles from './CodeBox.module.css';

function CodeBox(props) {
  return (
    <div className={[styles.root, props.className].join(' ')}>
      {props.code.map((code, lineNum) =>
        <div className={styles.line} key={lineNum}>
          <div className={styles.lineNum}>{lineNum + 1}</div>
          <code className={styles.code}>{code}</code>
        </div>
      )}
    </div>
  )
}

export { CodeBox };