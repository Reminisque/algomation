import React from 'react';
import styles from './BannerMenu.module.css';

class BannerMenu extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ul className={[styles.root, className].join(' ')}>
        {this.props.children}
      </ul>
    )
  }
}

export { BannerMenu };