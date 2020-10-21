import React from 'react';
import { Button } from './ui';
import * as d3 from 'd3';

const BAR_LENGTH = 20;

class InsertionSort extends React.Component {
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
      current: -1,
      previous: -1,
      sortedTo: -1,
      codeHighlights: new Set()
    };
    let backtrack = [];
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
    const { array, current, previous, sortedTo, svgRef } = this.props;
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
        if (i === current)
          return 'indianred';
        else if (i === previous)
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
        <Button onClick={() => this.run()}>Run Insertion Sort</Button>
      </div>
    )
  }
}

export { InsertionSort };