import React from 'react';
import styles from './CodeBox.module.css';

function CodeBox(props) {
  return (
    <div className={[styles.root, props.className].join(' ')}>
      {props.code.map((code, lineNum) =>
        <div key={lineNum} className={styles.line}>
        <div className={styles.lineNum}>{lineNum + 1}</div>
          {props.highlightSet?.has(lineNum + 1) 
            ? <code className={styles.code} style={{background: props.highlightColor}}>{code}</code>
            : <code className={styles.code}>{code}</code>
          }
        </div>
      )}
    </div>
  )
}

export { CodeBox };