import React from 'react';
import styles from './MenuItem.module.css';

class MenuItem extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <div className={[styles.root, className].join(' ')}></div>
        )
    }
}

export { MenuItem };