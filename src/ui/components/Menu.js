import React from 'react';
import styles from './Menu.module.css';

class Menu extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ul className={[styles.root, className].join(' ')}>
        {this.props.children}
      </ul>
    )
  }
}

export { Menu };