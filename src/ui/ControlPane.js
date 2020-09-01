import React from 'react';
import styles from './ControlPane.module.css';

class ControlPane extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={[styles.root, className].join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

export { ControlPane };