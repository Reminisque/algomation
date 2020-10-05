import React from 'react';
import logo from './logo.svg';
import { Header, Button, Menu, MenuItem, TwoBarBurgerIcon } from './ui';
import { SelectionSort } from './SelectionSort';
import styles from './App.module.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      current: -1,
      openAlgoMenu: false
    }

    this.highlightColor = "rgba(134, 87, 87, 0.5)";

    this.setInfo = this.setInfo.bind(this);
  }

  algoMenu = [
    {
      title: 'Sorting',
      algorithms: [
        'Selection Sort',
        'Insertion Sort',
        'Merge Sort'
      ]
    },
    {
      title: 'Graph',
      algorithms: [
        'Djikstra\'s Algorithm'
      ]
    },
    {
      title: 'Linked List',
      algorithms: [
        'Search'
      ]
    }
  ];

  render() {
    const menuOpened = this.state.openAlgoMenu ? styles.open : "";
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Header className={styles.header}>
            <div className={styles.brand}>
              Algomation
            </div>
            <Button className={styles.algoMenuBtn} onClick={this.toggleOpenAlgoMenu}>
              <TwoBarBurgerIcon></TwoBarBurgerIcon>
            </Button>
          </Header>
          <div className={styles.controlPane}>
            <div className={[styles.algoMenu, menuOpened].join(' ')}>
              <div className={styles.algoMenuFlex}>
                {this.algoMenu.map((group) =>
                  <Menu key={group.title} className={styles.algoMenuGroup}>
                    <MenuItem title>{group.title} </MenuItem>
                    {group.algorithms.map((algorithm) =>
                      <MenuItem key={algorithm}>{algorithm}</MenuItem>
                    )}
                  </Menu>
                )}
              </div>
            </div>
            <SelectionSort
              array={[2, 6, 45, 4, 0, 8, 6, 1]}
              handleInfo={this.setInfo}
              highlightColor={this.highlightColor}
            ></SelectionSort>
          </div>
        </div>
      </div>
    );
  }

  toggleOpenAlgoMenu = () => {
    this.setState({ openAlgoMenu: !this.state.openAlgoMenu });
  }

  setInfo(algoInfo) {
    this.setState({
      name: algoInfo.name,
      category: algoInfo.category,
      pseudocode: algoInfo.pseudocode
    });
  }
}

export default App;