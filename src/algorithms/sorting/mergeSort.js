import * as d3 from 'd3';
import sorting from './sorting';
import styles from './sorting.module.css';

class mergeSort extends sorting {
  constructor() {
    super();

    this.name = 'Merge Sort';
    this.category = 'Sorting Algorithm';
    this.pseudocode = [
      'split array into halves',
      'merge sort on left half',
      'merge sort on right half',
      'merge two halves together in order',
      '  while left and right halves have elements',
      '    move least element to result array',
      '  while left half still has elements',
      '    move least element to result array',
      '  while right half still has elements',
      '    move least element to result array',
      'update original array'
    ];
  }

  initialRender(visualRef) {
    d3.select(visualRef.current).selectAll('*').remove();

    let div = d3.select(visualRef.current)
      .append('div')
      .style('position', 'relative')
      .style('height', '100%')
      .style('display', 'flex')
      .style('gap', '40px')
      .style('flex-direction', 'column')
      .style('justify-content', 'center');

    div
      .append('div')
      .attr('id', 'main')
      .style('height', '200px')
      .style('display', 'flex')
      .style('gap', '1px')
      .style('flex-direction', 'row')
      .style('justify-content', 'center');

    div
      .append('div')
      .attr('id', 'alt')
      .style('height', '200px')
      .style('display', 'flex')
      .style('flex-direction', 'row')
      .style('justify-content', 'center');
  }

  renderEnter(visualRef, mainArray, altArray, barLength) {
    let ref = d3.select(visualRef.current);
    let main = ref.select('#main').selectAll('div').data(mainArray ? mainArray : []);
    let alt = ref.select('#alt').selectAll('div').data(altArray ? altArray : []);

    main.enter()
      .append('div')
      .style('width', '32px')
      .style('height', (d) => `${barLength + d * 1.5}px`)
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);

    alt.enter()
      .append('div')
      .merge(alt)
      .style('width', '32px')
      .style('height', (d) => `${barLength + d * 1.5}px`)
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);
  }

  renderExit(visualRef, mainArray, altArray) {
    let ref = d3.select(visualRef.current);
    let main = ref.select('#main').selectAll('div').data(mainArray ? mainArray : []);
    let alt = ref.select('#alt').selectAll('div').data(altArray ? altArray : []);

    main.exit()
      .transition()
      .duration(500)
      .style('opacity', 0)
      .remove();

    alt.exit()
      .transition()
      .duration(100)
      .style('height', '0px')
      .duration(150)
      .style('opacity', 0)
      .remove();
  }

  renderUpdate(visualRef, mainArray, altArray, left, mid, right) {
    let ref = d3.select(visualRef.current);
    let main = ref.select('#main').selectAll('div').data(mainArray ? mainArray : []);
    let alt = ref.select('#alt').selectAll('div').data(altArray ? altArray : []);

    main
      .text((d) => d);

    alt
      .text((d) => d);

    main
      .transition()
      .duration(150)
      .style('height', (d) => {
        return d === null ? '0px' : `${this.BAR_LENGTH + d * 1.5}px`
      })
      .style('background', (d, i) => {
        if (left <= i && i < mid)
          return styles['select-primary'];
        else if (mid <= i && i < right)
          return styles['select-secondary'];
        return 'transparent';
      });

    alt
      .transition()
      .duration(150)
      .style('height', (d) => `${this.BAR_LENGTH + d * 1.5}px`);
  }

  renderVisual(visualRef, state) {
    const { mainArray, altArray, left, mid, right } = state;

    this.renderEnter(visualRef, mainArray, altArray, this.BAR_LENGTH);
    this.renderUpdate(visualRef, mainArray, altArray, left, mid, right)
    this.renderExit(visualRef, mainArray, altArray)
  }

  run(backtrack) {
    let unsorted = [...Array(20)].map(() => Math.floor(Math.random() * 101));
    let state = {
      mainArray: [],
      altArray: [],
      codeHighlights: new Set()
    };

    function mergeSort(left, right) {
      if (right - left > 1) {
        let mid = Math.floor(left + (right - left) / 2);

        state = {
          ...state,
          left: left,
          mid: mid,
          right: mid,
          codeHighlights: new Set([1, 2])
        }
        backtrack.push(state);
        mergeSort(left, mid);

        state = {
          ...state,
          left: mid,
          mid: mid,
          right: right,
          codeHighlights: new Set([1, 3])
        }
        backtrack.push(state);
        mergeSort(mid, right);

        state = {
          ...state,
          left: left,
          mid: mid,
          right: right,
          codeHighlights: new Set([4])
        };
        backtrack.push(state);


        let leftHalf = unsorted.slice(left, mid);
        let rightHalf = unsorted.slice(mid, right);
        let merged = [];
        let k = left;

        while (leftHalf.length > 0 && rightHalf.length > 0) {
          if (leftHalf[0] < rightHalf[0]) {
            merged.unshift(leftHalf.shift());
            unsorted[left++] = null;
          } else {
            merged.unshift(rightHalf.shift());
            unsorted[mid++] = null;
          }
          state = {
            ...state,
            mainArray: [...unsorted],
            altArray: [...merged],
            codeHighlights: new Set([4, 5, 6])
          };
          backtrack.push(state);
        }

        while (leftHalf.length > 0) {
          merged.unshift(leftHalf.shift());
          unsorted[left++] = null;
          state = {
            ...state,
            mainArray: [...unsorted],
            altArray: [...merged],
            codeHighlights: new Set([4, 7, 8])
          };
          backtrack.push(state);
        }

        while (rightHalf.length > 0) {
          merged.unshift(rightHalf.shift());
          unsorted[mid++] = null;
          state = {
            ...state,
            mainArray: [...unsorted],
            altArray: [...merged],
            codeHighlights: new Set([4, 9, 10])
          };
          backtrack.push(state);
        }

        while (merged.length > 0) {
          unsorted[k++] = merged.pop();
          state = {
            ...state,
            mainArray: [...unsorted],
            altArray: [...merged],
            codeHighlights: new Set([11])
          };
          backtrack.push(state);
        }
      }
    }

    state.mainArray = [...unsorted];
    backtrack.push(state);

    mergeSort(0, unsorted.length);

    state = {
      ...state,
      left: 0,
      mid: 0,
      right: 0,
      codeHighlights: new Set()
    };
    backtrack.push(state);
  }
}

export default mergeSort;