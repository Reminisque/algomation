import * as d3 from 'd3';
import sorting from './sorting';
import styles from './sorting.module.css';

class radixSort extends sorting {
  constructor() {
    super();

    this.name = 'Radix Sort';
    this.category = 'Sorting Algorithm';
    this.pseudocode = [
      'loop for each digit of maximum element',
      '  for each element',
      '    move element to bin equal to current digit',
      '  for each bin',
      '    for each element in the bin',
      '      move element back to array'
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
      .attr('id', 'array')
      .style('height', '200px')
      .style('display', 'flex')
      .style('gap', '1px')
      .style('flex-direction', 'row')
      .style('justify-content', 'center');

    div
      .append('div')
      .attr('id', 'bins')
      .style('height', '200px')
      .style('display', 'flex')
      .style('flex-direction', 'row')
      .style('justify-content', 'center');
  }

  renderEnter(visualRef, array, bins, barLength) {
    let ref = d3.select(visualRef.current);
    let a = ref.select('#array').selectAll('div').data(array ? array : []);
    let b = ref.select('#bins').selectAll('.bin').data(bins ? bins : []);
    let elem = b.selectAll('div').data((d) => d);

    a.enter()
      .append('div')
      .style('width', '32px')
      .style('height', (d) => `${barLength + Math.log2(d + 1) * 15}px`)
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);

    let bin = b.enter()
      .append('div')
      .attr('class', 'bin')
      .style('min-width', '50px')
      .style('display', 'flex')
      .style('flex-direction', 'column')
      .style('text-align', 'center');

    bin
      .append('text')
      .style('width', '32px')
      .style('padding', '8px')
      .style('text-align', 'center')
      .text((d, i) => i);

    bin.selectAll('div').data((d) => d).enter()
      .append('div')
      .style('width', '32px')
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);

    elem.enter()
      .append('div')
      .style('width', '32px')
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);

  }

  renderExit(visualRef, array, bins) {
    let ref = d3.select(visualRef.current);
    let a = ref.select('#array').selectAll('div').data(array ? array : []);
    let b = ref.select('#bins').selectAll('.bin').data(bins ? bins : []);
    let bin = b.selectAll('div').data((d) => d);

    a.exit()
      .transition()
      .duration(150)
      .style('opacity', 0)
      .remove();

    b.exit()
      .transition()
      .duration(150)
      .style('opacity', 0)
      .remove();

    bin.exit()
      .transition()
      .duration(150)
      .style('opacity', 0)
      .remove();


  }

  renderUpdate(visualRef, array, bins) {
    let ref = d3.select(visualRef.current);
    let a = ref.select('#array').selectAll('div').data(array ? array : []);
    let b = ref.select('#bins').selectAll('.bin').data(bins ? bins : []);
    let bin = b.selectAll('div').data((d) => d);

    a
      .text((d) => d);

    a
      .transition()
      .duration(150)
      .style('height', (d) => {
        return d === null ? '0px' : `${this.BAR_LENGTH + Math.log2(d + 1) * 15}px`
      })

    bin
      .text((d) => d)
  }

  renderVisual(visualRef, state) {
    const { array, bins } = state;

    this.renderEnter(visualRef, array, bins, this.BAR_LENGTH);
    this.renderUpdate(visualRef, array, bins);
    this.renderExit(visualRef, array, bins);
  }

  run(backtrack) {
    let unsorted = [...Array(20)].map(() => Math.floor(Math.random() * 101));
    let bins = [...Array(10)].map(() => []);
    let state = {
      array: [...unsorted],
      bins: this.copyBins(bins),
      codeHighlights: new Set()
    };
    backtrack.push(state);

    let max = Math.max(...unsorted);
    let exp = 1;

    do {
      for (let i = 0; i < unsorted.length; i++) {
        let num = unsorted[i];
        let bin = Math.floor((num / exp) % 10);
        
        unsorted[i] = null;
        bins[bin].unshift(num);

        state = {
          ...state,
          array: [...unsorted],
          bins: this.copyBins(bins),
          codeHighlights: new Set([1, 2, 3])
        };
        backtrack.push(state);
      }

      let i = 0;
      
      for (let bin = 0; bin < 10; bin++) {
        while (bins[bin].length > 0) {
          unsorted[i++] = bins[bin].pop();

          state = {
            ...state,
            array: [...unsorted],
            bins: this.copyBins(bins),
            codeHighlights: new Set([1, 4, 5, 6])
          };
          backtrack.push(state);
        }
      }

      exp = exp * 10;
    } while (exp <= max)

    state = {
      ...state,
      codeHighlights: new Set()
    };
    backtrack.push(state);
  }

  copyBins(bins) {
    let copy = [];
    bins.forEach(bin => {
      copy.push([...bin]);
    });
    return copy;
  }
}

export default radixSort;