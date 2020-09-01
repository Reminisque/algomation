import React from 'react';
import logo from './logo.svg';
import { Header, VisualPane, ControlPane } from './ui';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.layoutContainer}>
        <Header className={styles.header} brand="Algomation"></Header>
        <VisualPane className={styles.visualPane}></VisualPane>
        <ControlPane className={styles.controlPane}></ControlPane>
      </div>
    );
  }
}

export default App;