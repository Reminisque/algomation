import * as d3 from 'd3';
import sorting from './sorting';

class bubbleSort extends sorting {
  constructor() {
    super();

    this.name = 'Bubble Sort';
    this.category = 'Sorting Algorithm';
    this.pseudocode = [
      'for i from 0 to (numOfElements - 1)',
      '  traverse up to last i elements',
      '    if ith element > i+1th element',
      '      swap their positions',
      '      remember swap is made',
      '  stop early if no swaps made'
    ];
  }

  renderUpdate(visualRef, array, current, next) {
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
          return 'indianred';
        else if (i === next)
          return 'mediumorchid';
        return 'transparent';
      });
  }

  renderVisual(visualRef, state) {
    const { array, current, next } = state;

    this.renderEnterExit(visualRef, array, this.BAR_LENGTH);
    this.renderUpdate(visualRef, array, current, next);
  }

  run(backtrack) {
    let unsorted = [...Array(20)].map(() => Math.floor(Math.random() * 101));
    let state = {
      array: [],
      current: -1,
      next: -1,
      codeHighlights: new Set()
    };

    state.array = [...unsorted];
    backtrack.push(state);

    for (let i = 0; i < unsorted.length; i++) {
      let swapped = false;
      for(let curr = 0; curr < unsorted.length - 1 - i; curr++) {
        let next = curr + 1;
        state = {
          ...state,
          current: curr,
          next: -1,
          codeHighlights: new Set([1, 2])
        };
        backtrack.push(state);
        if (unsorted[curr] > unsorted[next]) {
          state = {
            ...state,
            next: next,
            codeHighlights: new Set([1, 2, 3])
          };
          backtrack.push(state);
          [unsorted[curr], unsorted[next]] = [unsorted[next], unsorted[curr]];
          swapped = true;
          state = {
            ...state,
            array: [...unsorted],
            current: next,
            next: curr,
            codeHighlights: new Set([1, 2, 3, 4, 5])
          };
          backtrack.push(state);
        }
      }
      if (!swapped) {
        state = {
          ...state,
          codeHighlights: new Set([1, 6])
        }
        backtrack.push(state);
        break;
      }
    }
    state = {
      ...state,
      current: -1,
      next: -1,
      codeHighlights: new Set()
    };
    backtrack.push(state);
  }
}

export default bubbleSort;