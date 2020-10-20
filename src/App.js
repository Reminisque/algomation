import React from 'react';
import logo from './logo.svg';
import { Header, Button, CodeBox, Menu, MenuItem, TwoBarBurgerIcon } from './ui';
import { SelectionSort } from './SelectionSort';
import styles from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openAlgoMenu: false,
      current: -1,
      name: "",
      category: "",
      pseudocode: [],
      codeHighlights: new Set(),
      restOfProps: {}
    };

    this.highlightColor = "rgba(134, 87, 87, 0.5)";
    this.visualRef = React.createRef();
    this.backtrack = [];
    this.playbackSpeed = 166;
    this.playing = false;


    this.toggleOpenAlgoMenu = this.toggleOpenAlgoMenu.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.setBacktrack = this.setBacktrack.bind(this);
    this.backtrackTo = this.backtrackTo.bind(this);
    this.nextBacktrackState = this.nextBacktrackState.bind(this);
    this.prevBacktrackState = this.prevBacktrackState.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.togglePlayback = this.togglePlayback.bind(this);
    this.runCallback = this.runCallback.bind(this);
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

  setBacktrack(backtrack) {
    this.backtrack = [...backtrack];
  }

  backtrackTo(index) {
    if (0 <= index && index < this.backtrack.length) {
      const { codeHighlights, ...restOfProps } = this.backtrack[index];
      this.setState({
        current: index,
        codeHighlights: codeHighlights,
        restOfProps: restOfProps
      });
    }
  }

  nextBacktrackState() {
    this.backtrackTo(this.state.current + 1);
  }

  prevBacktrackState() {
    this.backtrackTo(this.state.current - 1);
  }

  play() {
    this.playback = setInterval(() => {
      if (0 <= this.state.current && this.state.current < this.backtrack.length - 1) {
        this.nextBacktrackState();
        this.playing = true;
      } else {
        this.pause();
      }
    }, this.playbackSpeed);
  }

  pause() {
    clearInterval(this.playback);
    this.playing = false;
  }

  togglePlayback() {
    if (this.playing) {
      this.pause();
    } else {
      this.play()
    }
  }

  runCallback(backtrack) {
    this.setBacktrack(backtrack);
    this.backtrackTo(0);
  }

  render() {
    const menuOpened = this.state.openAlgoMenu ? styles.open : "";
    return (
      <div className={styles.root}>
        <Header className={styles.header}>
          <div className={styles.brand}>
            Algomation
          </div>
          <Button className={styles.algoMenuBtn} onClick={this.toggleOpenAlgoMenu}>
            <TwoBarBurgerIcon></TwoBarBurgerIcon>
          </Button>
        </Header>
        <div className={styles.content}>
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
          <div className={styles.visualPane}>
            <div className={styles.visual} ref={this.visualRef}></div>
          </div>
          <div className={styles.controlPane}>
            <div className={styles.algoInfo}>
              <div className={styles.category}>{this.state.category}</div>
              <div className={styles.algoName}>{this.state.name}</div>
              <CodeBox
                className={styles.pseudocode}
                code={this.state.pseudocode}
                highlightColor={this.highlightColor}
                highlightSet={this.state.codeHighlights}
              ></CodeBox>
            </div>
            <div className={styles.controls}>
              <input
                className={styles.playback}
                type="range"
                min="0"
                max={this.backtrack.length - 1}
                step="1"
                value={this.state.current}
                onChange={(e) => this.backtrackTo(parseInt(e.target.value))}
              ></input>
              <SelectionSort
                handleInfo={this.setInfo}
                highlightColor={this.highlightColor}
                svgRef={this.visualRef}
                runCallback={this.runCallback}
                {...this.state.restOfProps}
              ></SelectionSort>
              <Button onClick={this.prevBacktrackState}>Previous State</Button>
              <Button onClick={this.togglePlayback}>Play/Pause</Button>
              <Button onClick={this.nextBacktrackState}>Next State</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;