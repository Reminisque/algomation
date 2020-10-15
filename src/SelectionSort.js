import React from 'react';
import { Button } from './ui';
import * as d3 from 'd3';

const RADIUS = 24;

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
    this.renderCircles = this.renderCircles.bind(this);
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
  }

  componentDidUpdate() {
    this.renderCircles();
  }

  renderCircles() {
    const { array, minimum, current, sortedTo, svgRef } = this.props;
    let svg = d3.select(svgRef.current);
    let g = svg.selectAll('g').data(array ? array : []);
    let circles = g.select('circle');

    g
      .exit()
      .transition()
      .duration(500)
      .style('opacity', 0)
      .remove();

    g
      .select('text')
      .text((d) => d);

    circles
      .transition()
      .duration(150)
      .style('fill', (d, i) => {
        if (i === minimum)
          return 'red';
        else if (i === current)
          return 'orange';
        else if (i <= sortedTo)
          return 'slateblue';
        return 'plum';
      });

    let enter = g.enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * RADIUS * 2 + RADIUS + i * 10}, 0)`);

    enter
      .append('circle')
      .attr('r', RADIUS)
      .attr('cy', '50%')
      .style('fill', 'plum');

    enter
      .append('text')
      .text((d) => d)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('dy', '50%');

    enter
      .style('opacity', 0)
      .transition()
      .duration(400)
      .style('opacity', 1);
  }


  render() {
    return (
      <div>
        <Button onClick={() => this.run()}>Run Algorithm</Button>
        <Button onClick={() => this.props.prevState()}>Previous state</Button>
        <Button onClick={() => this.props.nextState()}>Next state</Button>
      </div>
    )
  }
}

export { SelectionSort };