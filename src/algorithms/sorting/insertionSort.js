import * as d3 from 'd3';
import sorting from './sorting';
import styles from './sorting.module.css';

class insertionSort extends sorting {
  constructor() {
    super();

    this.name = 'Insertion Sort';
    this.category = 'Sorting Algorithm';
    this.pseudocode = [
      'traverse from index 1 to len(arr) - 1',
      '  save current position',
      '  while previous element exists and is larger than current element',
      '    swap positions of current and previous element',
      '    save new position of current as current position',
    ];
  }

  renderUpdate(visualRef, array, current, previous) {
    let div = d3
      .select(visualRef.current)
      .select('div')
      .selectAll('div')
      .data(array ? array : []);

    div
      .text((d) => d);

    div
      .transition()
      .duration(150)
      .style('height', (d) => `${this.BAR_LENGTH + d * 1.5}px`)
      .style('background', (d, i) => {
        if (i === current)
          return styles['select-primary'];
        else if (i === previous)
          return styles['select-secondary'];
        return 'transparent';
      });
  }

  renderVisual(visualRef, state) {
    const { array, current, previous} = state;

    this.renderEnter(visualRef, array, this.BAR_LENGTH);
    this.renderUpdate(visualRef, array, current, previous);
    this.renderExit(visualRef, array);
  }

  run(backtrack) {
    let unsorted = [...Array(20)].map(() => Math.floor(Math.random() * 101));
    let state = {
      array: [],
      current: -1,
      previous: -1,
      sortedTo: -1,
      codeHighlights: new Set()
    };

    state.array = [...unsorted];
    backtrack.push(state);

    for (let start = 1; start < unsorted.length; start++) {
      let curr = start;
      state = {
        ...state,
        current: curr,
        codeHighlights: new Set([1, 2])
      };
      backtrack.push(state);
      while (curr > 0 && unsorted[curr - 1] > unsorted[curr]) {
        let prev = curr - 1;
        state = {
          ...state,
          previous: prev,
          codeHighlights: new Set([1, 3])
        };
        backtrack.push(state);
        [unsorted[prev], unsorted[curr]] = [unsorted[curr], unsorted[prev]];
        state = {
          ...state,
          array: [...unsorted],
          current: prev,
          previous: curr,
          codeHighlights: new Set([1, 3, 4])
        };
        backtrack.push(state);
        curr = prev;
        state = {
          ...state,
          previous: -1,
          codeHighlights: new Set([1, 3, 5])
        };
        backtrack.push(state);
      }
    }
    state = {
      ...state,
      current: -1,
      previous: -1,
      sortedTo: unsorted.length - 1,
      codeHighlights: new Set()
    };
    backtrack.push(state);
  }
}

export default insertionSort;