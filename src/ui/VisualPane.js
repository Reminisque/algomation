import React from 'react';
import styles from './VisualPane.module.css';

class VisualPane extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={[styles.root, className].join(' ')}></div>
    )
  }
}

export { VisualPane };