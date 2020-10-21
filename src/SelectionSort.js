import React from 'react';
import { Button } from './ui';
import * as d3 from 'd3';

const BAR_LENGTH = 20;

class SelectionSort extends React.Component {
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

    this.handleInfo = this.handleInfo.bind(this);
    this.run = this.run.bind(this);
    this.renderVisual = this.renderVisual.bind(this);
  }

  handleInfo() {
    if (this.props.handleInfo) {
      this.props.handleInfo({
        name: this.name,
        category: this.category,
        pseudocode: this.pseudocode
      });
    }
  }

  runCallback(backtrack) {
    if (this.props.runCallback) {
      this.props.runCallback(backtrack);
    }
  }

  run() {
    let unsorted = [...Array(20)].map(() => Math.floor(Math.random() * 101));
    let state = {
      array: [],
      start: -1,
      minimum: -1,
      current: -1,
      sortedTo: -1,
      codeHighlights: new Set()
    };
    let backtrack = [];
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
        sortedTo: start,
        codeHighlights: new Set([1, 6])
      };
      backtrack.push(state);
    }
    state = {
      ...state,
      minimum: -1,
      current: -1,
      sortedTo: unsorted.length - 1,
      codeHighlights: new Set()
    };
    backtrack.push(state);
    this.runCallback(backtrack);
  }

  componentDidMount() {
    this.handleInfo();
    d3.select(this.props.svgRef.current).selectAll('*').remove();
    d3.select(this.props.svgRef.current)
      .append('div')
      .style('position', 'relative')
      .style('top', '50%')
      .style('display', 'flex')
      .style('flex-direction', 'row')
      .style('justify-content', 'center')
    this.run();
  }

  componentDidUpdate() {
    this.renderVisual();
  }

  renderVisual() {
    const { array, minimum, current, sortedTo, svgRef } = this.props;
    let svg = d3.select(svgRef.current).select('div');
    let div = svg.selectAll('div').data(array ? array : []);

    div
      .exit()
      .transition()
      .duration(500)
      .style('opacity', 0)
      .remove();

    div
      .text((d) => d);

    div
      .transition()
      .duration(150)
      .style('height', (d) => `${BAR_LENGTH + d * 1.5}px`)
      .style('background', (d, i) => {
        if (i === minimum)
          return 'indianred';
        else if (i === current)
          return 'mediumorchid';
        return 'transparent';
      });

    let enter = div.enter()
      .append('div')
      .style('width', '32px')
      .style('height', (d) => `${BAR_LENGTH + d * 1.5}px`)
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);
  }


  render() {
    return (
      <div>
        <Button onClick={() => this.run()}>Run Selection Sort</Button>
      </div>
    )
  }
}

export { SelectionSort };