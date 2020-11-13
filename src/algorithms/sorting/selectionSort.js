import * as d3 from 'd3';
import sorting from './sorting';
import styles from './sorting.module.css';

class selectionSort extends sorting {
  constructor() {
    super();

    this.name = 'Selection Sort';
    this.category = 'Sorting Algorithm';
    this.pseudocode = [
      'for (numOfElements - 1) times',
      '  set first element of unsorted as the minimum',
      '  for each unsorted element',
      '    if element < currentMinimum',
      '      set element as new minimum',
      '  swap positions of minimum and first unsorted element'
    ];
  }

  renderUpdate(visualRef, array, start, minimum, current) {
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
        if (i === minimum)
          return styles['select-primary'];
        else if (i === current)
          return styles['select-secondary'];
        else if (i === start)
          return styles['select-tertiary']
        return 'transparent';
      });
  }

  renderVisual(visualRef, state) {
    const { array, start, minimum, current } = state;

    this.renderEnter(visualRef, array, this.BAR_LENGTH);
    this.renderUpdate(visualRef, array, start, minimum, current);
    this.renderExit(visualRef, array);
  }

  run(backtrack) {
    let unsorted = [...Array(20)].map(() => Math.floor(Math.random() * 101));
    let state = {
      array: [],
      start: -1,
      minimum: -1,
      current: -1,
      codeHighlights: new Set()
    };

    state.array = [...unsorted];
    backtrack.push(state);

    for (let start = 0; start < unsorted.length - 1; start++) {
      let min = start;
      state = {
        ...state,
        start: start,
        minimum: min,
        codeHighlights: new Set([1, 2])
      };
      backtrack.push(state);
      for (let curr = start; curr < unsorted.length; curr++) {
        state = {
          ...state,
          current: curr,
          codeHighlights: new Set([1, 3, 4])
        };
        backtrack.push(state);
        if (unsorted[curr] < unsorted[min]) {
          min = curr;
          state = {
            ...state,
            minimum: min,
            codeHighlights: new Set([1, 3, 4, 5])
          };
          backtrack.push(state);
        }
      }
      [unsorted[start], unsorted[min]] = [unsorted[min], unsorted[start]];
      state = {
        ...state,
        array: [...unsorted],
        codeHighlights: new Set([1, 6])
      };
      backtrack.push(state);
    }
    state = {
      ...state,
      start: -1,
      minimum: -1,
      current: -1,
      codeHighlights: new Set()
    };
    backtrack.push(state);
  }
}

export default selectionSort;