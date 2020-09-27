import React from 'react';
import logo from './logo.svg';
import { Header, VisualPane, ControlPane } from './ui';
import styles from './App.module.css';

class App extends React.Component {
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

  pseudocode = [
    'for loop',
    ' if something if true:',
    '   do stuff for this block',
    ' else if something else',
    '   do stuff for this other block',
    'doing something else',
    'return'
  ];

  render() {

    return (
      <div className={styles.root}>
        <div className={styles.layoutContainer}>
          <Header className={styles.header}>
            <div className={styles.brand}>
              Algomation
            </div>
          </Header>
          <VisualPane className={styles.visualPane}></VisualPane>
          <ControlPane className={styles.controlPane} menu={this.algoMenu} pseudocode={this.pseudocode} category={"Sorting"} algorithm={"Some really long sorting algorithm"}></ControlPane>
        </div>
      </div>
    );
  }

  selectionSort
  
}

export default App;