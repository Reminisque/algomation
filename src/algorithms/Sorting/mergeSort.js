import * as d3 from 'd3';
import sorting from './sorting';

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
      '  while left half has elements',
      '    move least element to result array',
      '  while right half has elements',
      '    move least element to result array',
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

  renderEnterExit(visualRef, mainArray, altArray, barLength) {
    let ref = d3.select(visualRef.current);
    let main = ref.select('#main').selectAll('div').data(mainArray ? mainArray : []);
    let alt = ref.select('#alt').selectAll('div').data(altArray ? altArray: []);

    main.exit()
      .transition()
      .duration(500)
      .style('opacity', 0)
      .remove();

    main.enter()
      .append('div')
      .style('width', '32px')
      .style('height', (d) => `${barLength + d * 1.5}px`)
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);

    alt.exit()
      .transition()
      .duration(100)
      .style('height', '0px')
      .duration(150)
      .style('opacity', 0)
      .remove();

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

  renderUpdate(visualRef, state) {
    let ref = d3.select(visualRef.current);
    let main = ref.select('#main').selectAll('div').data(state.mainArray ? state.mainArray : []);
    let alt = ref.select('#alt').selectAll('div').data(state.altArray ? state.altArray : []);

    main
      .text((d) => d);

    alt
      .text((d) => d);

    main
      .transition()
      .duration(150)
      .style('height', (d) => {
        return d === null ? '0px' : `${this.BAR_LENGTH + d * 1.5}px`
      });

    alt
      .transition()
      .duration(150)
      .style('height', (d) => `${this.BAR_LENGTH + d * 1.5}px`);      
  }

  renderVisual(visualRef, state) {
    this.renderEnterExit(visualRef, state.mainArray, state.altArray, this.BAR_LENGTH);
    this.renderUpdate(visualRef, state)
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

        mergeSort(left, mid);
        mergeSort(mid, right);

        let leftHalf = unsorted.slice(left, mid);
        let rightHalf = unsorted.slice(mid, right);
        let merged = [];
        let k = left;

        while (leftHalf.length > 0 && rightHalf.length > 0) {
          if (leftHalf[0] < rightHalf[0]) {
            merged.unshift(leftHalf.shift());
          } else {
            merged.unshift(rightHalf.shift());
          }
          state = {
            ...state,
            altArray: [...merged]
          };
          backtrack.push(state);
        }

        while (leftHalf.length > 0) {
          merged.unshift(leftHalf.shift());
          state = {
            ...state,
            altArray: [...merged]
          };
          backtrack.push(state);
        }

        while (rightHalf.length > 0) {
          merged.unshift(rightHalf.shift());
          state = {
            ...state,
            altArray: [...merged]
          };
          backtrack.push(state);
        }

        while (merged.length > 0) {
          unsorted[k++] = merged.pop();
          state = {
            ...state,
            mainArray: [...unsorted],
            altArray: [...merged]
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
      codeHighlights: new Set()
    };
    backtrack.push(state);
  }
}

export default mergeSort;