import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    const { className, brand } = this.props;

    return (
      <header className={[styles.root, className].join(' ')}>
        <div className={styles.brand}>
          {brand}
        </div>
      </header>
    )
  }
}

export { Header };