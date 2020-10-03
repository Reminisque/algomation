import React from 'react';
import logo from './logo.svg';
import { Header, VisualPane, CodeBox, Button, Menu, MenuItem, TwoBarBurgerIcon } from './ui';
import { SelectionSort } from './SelectionSort';
import styles from './App.module.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      current: -1,
      name: "",
      category: "",
      pseudocode: [],
      highlights: new Set([1,4,5]),
      backtrack: [],
      openAlgoMenu: false
    }
    
    this.highlightColor = "rgba(134, 87, 87, 0.5)";

    this.dataStates = [];
    this.codeStates = [];
    
    this.setHighlights = this.setHighlights.bind(this);
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
        <div className={styles.layoutContainer}>
          <Header className={styles.header}>
            <div className={styles.brand}>
              Algomation
            </div>
          </Header>
          <VisualPane className={styles.visualPane}>
          </VisualPane>
          <div className={styles.controlPane}>
            <Button className={styles.algoMenuBtn} onClick={this.toggleOpenAlgoMenu}>
            <TwoBarBurgerIcon></TwoBarBurgerIcon>
            </Button>
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
            <div>
              <div className={styles.category}>{this.state.category}</div>
              <div className={styles.algoName}>{this.state.name}</div>
            </div>
            <CodeBox 
              className={styles.pseudocode} 
              code={this.state.pseudocode} 
              highlightColor={this.highlightColor} 
              highlightSet={this.state.highlights}
            ></CodeBox>
            <SelectionSort array={[2,6,45,4,0,8,6,1]} handleInfo={this.setInfo} storeState={()=>{}}></SelectionSort>
          </div>
        </div>
      </div>
    );
  }

  toggleOpenAlgoMenu = () => {
    this.setState({openAlgoMenu: !this.state.openAlgoMenu});
  }

  setHighlights(highlights) {
    this.setState({highlights: new Set(highlights)});
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