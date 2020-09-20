import React from 'react';
import { Button, Menu, TwoBarBurgerIcon } from './components';
import styles from './ControlPane.module.css';

class ControlPane extends React.Component {
  constructor() {
    super();
    this.state = {
      openAlgoMenu: false
    };

    this.toggleOpenAlgoMenu = this.toggleOpenAlgoMenu.bind(this);
  }

  render() {
    const { className } = this.props;
    const menuOpened = this.state.openAlgoMenu ? styles.open : '';

    return (
      <div className={[styles.root, className].join(' ')}>
        {this.props.children}
        <Button className={styles.algoMenuBtn} onClick={this.toggleOpenAlgoMenu}>
          <TwoBarBurgerIcon></TwoBarBurgerIcon>
        </Button>
        <Menu className={[styles.algoMenu, menuOpened].join(' ')}>
        </Menu>
      </div>
    )
  }

  toggleOpenAlgoMenu = () => {
    this.setState({openAlgoMenu: !this.state.openAlgoMenu})
  }
}

export { ControlPane };