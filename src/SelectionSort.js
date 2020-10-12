import React from 'react';
import { Button, CodeBox } from './ui';
import * as d3 from 'd3';

const RADIUS = 20;

class SelectionSort extends React.Component {
  constructor() {
    super();

    this.state = {
      array: [],
      start: -1,
      minimum: -1,
      current: -1,
      sortedTo: -1,
      codeHighlights: new Set()
    };

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
    this.backtrack = [];
    this.backtrackIndex = 0;
    this.svgRef = React.createRef();

    this.handleInfo = this.handleInfo.bind(this);
    this.backtrackState = this.backtrackState.bind(this);
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

  backtrackState(backtrackIndex) {
    if (backtrackIndex < this.backtrack.length) {
      this.backtrackIndex = backtrackIndex;
      this.setState({ ...this.backtrack[backtrackIndex] });
    }
  }

  nextState() {
    const next = this.backtrackIndex + 1;
    if (next < this.backtrack.length) {
      this.backtrackState(this.backtrackIndex + 1);
    }
  }

  prevState() {
    const prev = this.backtrackIndex - 1;
    if (prev >= 0) {
      this.backtrackState(this.backtrackIndex - 1);
    }
  }

  run() {
    let unsorted = [...this.props.array];
    let state = { ...this.state };

    this.backtrack.length = 0;
    state.array = [...unsorted];
    this.backtrack.push(state);

    for (let start = 0; start < unsorted.length - 1; start++) {
      let min = start;
      state = {
        ...state,
        start: start,
        minimum: min,
        codeHighlights: new Set([1, 2])
      };
      this.backtrack.push(state);
      for (let curr = start; curr < unsorted.length; curr++) {
        state = {
          ...state,
          current: curr,
          codeHighlights: new Set([1, 3, 4])
        };
        this.backtrack.push(state);
        if (unsorted[curr] < unsorted[min]) {
          min = curr;
          state = {
            ...state,
            minimum: min,
            codeHighlights: new Set([1, 3, 4, 5])
          };
          this.backtrack.push(state);
        }
      }
      [unsorted[start], unsorted[min]] = [unsorted[min], unsorted[start]];
      state = {
        ...state,
        array: [...unsorted],
        sortedTo: start,
        codeHighlights: new Set([1, 6])
      };
      this.backtrack.push(state);
    }
    state = {
      ...state,
      minimum: -1,
      current: -1,
      sortedTo: unsorted.length,
      codeHighlights: new Set()
    };
    this.backtrack.push(state);

    this.backtrackState(0);
  }

  componentDidMount() {
    this.handleInfo();
    this.renderCircles();
  }

  componentDidUpdate() {
    this.renderCircles();
  }

  renderCircles() {
    const { array, minimum, current, sortedTo } = this.state;
    let svg = d3.select(this.svgRef.current);
    let g = svg.selectAll('g').data(array);
    let circles = g.select('circle');
    g
      .exit()
      .transition()
      .duration(500)
      .style('opacity', 0)
      .remove();
      
    circles
      .transition()
      .duration(300)
      .style('fill', (d, i) => {
        if (i === minimum)
          return 'red';
        else if (i === current)
          return 'orange';
        else if (i <= sortedTo)
          return 'slateblue';
        return 'plum';
      });

    g
      .select('text')
      .text((d) => d);

    let enter = g.enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * RADIUS * 2 + RADIUS}, 0)`);
    
    enter
      .append('circle')
      .attr('r', RADIUS)
      .attr('cy', RADIUS)
      .style('fill', 'plum');

    enter
      .append('text')
      .text((d) => d)
      .attr('text-anchor', 'middle')
      .attr('dy', RADIUS)

    enter
      .style('opacity', 0)
      .transition()
      .duration(400)
      .style('opacity', 1);
  }


  render() {
    const { array, highlightColor } = this.props;
    return (
      <div>
        <svg width="900" height="400" viewBox="0 0 900 400" ref={this.svgRef}></svg>
        <div className="array">
          {this.state.array
            ? this.state.array.join(' ')
            : null
          }
          <Button onClick={() => { this.run(); console.log(this.backtrack) }}>Run Algorithm</Button>
          <Button onClick={() => this.prevState()}>Previous state</Button>
          <Button onClick={() => this.nextState()}>Next state</Button>
          <CodeBox
            code={this.pseudocode}
            highlightColor={highlightColor}
            highlightSet={this.state.codeHighlights}
          ></CodeBox>
        </div>
      </div>
    )
  }
}

export { SelectionSort };