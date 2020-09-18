import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <header className={[styles.root, className].join(' ')}>
        {this.props.children}
      </header>
    )
  }
}

export { Header };