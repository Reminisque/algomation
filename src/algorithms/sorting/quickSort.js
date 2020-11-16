import * as d3 from 'd3';
import { partition } from 'd3';
import sorting from './sorting';
import styles from './sorting.module.css';

class quickSort extends sorting {
  constructor() {
    super();

    this.name = 'Quick Sort';
    this.category = 'Sorting Algorithm';
    this.pseudocode = [
      'pick a pivot at random',
      'move pivot off to the right',
      'partition elements',
      '  from first to second to last element',
      '    move elements <= pivot to the left',
      'move pivot in between partitions',
      'quick sort on left parition',
      'quick sort on right partition'
    ];
  }

  renderUpdate(visualRef, array, pivot, current, partition, left) {
    let ref = d3.select(visualRef.current);
    let div = ref.select('div').selectAll('div').data(array ? array : []);

    div
      .text((d) => d);

    div
      .transition()
      .duration(150)
      .style('height', (d) => `${this.BAR_LENGTH + d * 1.5}px`)
      .style('background', (d, i) => {
        if (i === pivot)
          return styles['select-tertiary'];
        else if (left <= i && i < Math.min(pivot, partition))
          return styles['select-primary'];
        else if (i === current)
          return styles['select-secondary'];
        return 'transparent';
      });
  }

  renderVisual(visualRef, state) {
    const { array, pivot, current, partition, left } = state;

    this.renderEnter(visualRef, array, this.BAR_LENGTH);
    this.renderUpdate(visualRef, array, pivot, current, partition, left);
    this.renderExit(visualRef, array);
  }

  run(backtrack) {
    let unsorted = [...Array(20)].map(() => Math.floor(Math.random() * 101));
    let state = {
      array: [...unsorted],
      pivot: -1,
      current: -1,
      partition: -1,
      left: -1,
      codeHighlights: new Set()
    };

    backtrack.push(state);

    function quickSort(left, right) {
      if (left < right) {
        let random = Math.floor(Math.random() * (right + 1 - left)) + left;
        let pivot = right;
        let i = left;

        state = {
          ...state,
          pivot: random,
          partition: -1,
          left: left,
          codeHighlights: new Set([1])
        };
        backtrack.push(state);

        [unsorted[random], unsorted[right]] = [unsorted[right], unsorted[random]];

        state = {
          ...state,
          array: [...unsorted],
          pivot: pivot,
          codeHighlights: new Set([2])
        };
        backtrack.push(state);


        for (let j = left; j < right; j++) {
          state = {
            ...state,
            array: [...unsorted],
            current: j,
            codeHighlights: new Set([3, 4])
          };
          backtrack.push(state);

          if (unsorted[j] <= unsorted[pivot]) {
            [unsorted[i], unsorted[j]] = [unsorted[j], unsorted[i]];
            i++;

            state = {
              ...state,
              array: [...unsorted],
              partition: i,
              codeHighlights: new Set([3, 4, 5])
            };
            backtrack.push(state);
          }
        }

        [unsorted[pivot], unsorted[i]] = [unsorted[i], unsorted[pivot]];
        pivot = i;

        state = {
          ...state,
          array: [...unsorted],
          pivot: pivot,
          current: -1,
          codeHighlights: new Set([6])
        };
        backtrack.push(state);

        state = {
          ...state,
          array: [...unsorted],
          pivot: right + 1,
          current: -1,
          partition: pivot,
          codeHighlights: new Set([7])
        };
        backtrack.push(state);

        quickSort(left, pivot - 1);

        state = {
          ...state,
          array: [...unsorted],
          left: pivot + 1,
          partition: right + 1,
          current: -1,
          codeHighlights: new Set([8])
        };
        backtrack.push(state);

        quickSort(pivot + 1, right);
      }
    }

    quickSort(0, unsorted.length - 1);

    state = {
      ...state,
      array: [...unsorted],
      pivot: -1,
      current: -1,
      partition: -1,
      left: -1,
      codeHighlights: new Set()
    };
    backtrack.push(state);
  }
}

export default quickSort;