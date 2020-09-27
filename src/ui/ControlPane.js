import React from 'react';
import { Button, CodeBox, Menu, MenuItem, TwoBarBurgerIcon } from './components';
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
    const { className, menu, category, algorithm, pseudocode} = this.props;
    const menuOpened = this.state.openAlgoMenu ? styles.open : '';

    return (
      <div className={[styles.root, className].join(' ')}>
        <Button className={styles.algoMenuBtn} onClick={this.toggleOpenAlgoMenu}>
          <TwoBarBurgerIcon></TwoBarBurgerIcon>
        </Button>
        <div className={[styles.algoMenu, menuOpened].join(' ')}>
          <div className={styles.algoMenuFlex}>
            {menu.map((group) => 
              <Menu className={styles.algoMenuGroup}>
                {group.title ? 
                  <MenuItem key={group.title} title>{group.title} </MenuItem>
                  : null
                }
                {group.algorithms.map((algorithm) => 
                  <MenuItem key={algorithm}>{algorithm}</MenuItem>
                )}
              </Menu>
            )}
          </div>
        </div>
        <div>
          <div className={styles.category}>{category}</div>
          <div className={styles.algorithm}>{algorithm}</div>
        </div>
        <CodeBox className={styles.pseudocode} code={pseudocode}></CodeBox>
      </div>
    )
  }

  toggleOpenAlgoMenu = () => {
    this.setState({openAlgoMenu: !this.state.openAlgoMenu});
  }
}

export { ControlPane };