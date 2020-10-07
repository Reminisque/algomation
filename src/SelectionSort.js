import React from 'react';
import { Button, CodeBox } from './ui';
import * as d3 from 'd3';

class SelectionSort extends React.Component {
  constructor() {
    super();

    this.state = {
      array: [],
      start: null,
      minimum: null,
      current: null,
      sortedTo: null,
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

    this.backtrack.length = 0;
    this.backtrack.push({
      ...this.state,
      array: [...unsorted]
    });

    for (let start = 0; start < unsorted.length - 1; start++) {
      let min = start;
      this.backtrack.push({
        start: start,
        minimum: min,
        codeHighlights: new Set([1, 2])
      });
      for (let curr = start; curr < unsorted.length; curr++) {
        this.backtrack.push({
          current: curr,
          codeHighlights: new Set([1, 3, 4])
        });
        if (unsorted[curr] < unsorted[min]) {
          min = curr;
          this.backtrack.push({
            minimum: min,
            codeHighlights: new Set([1, 3, 4, 5])
          })
        }
      }
      [unsorted[start], unsorted[min]] = [unsorted[min], unsorted[start]];
      this.backtrack.push({
        array: [...unsorted],
        sortedTo: start,
        codeHighlights: new Set([1, 6])
      });
    }

    this.backtrackState(0);
  }

  componentDidMount() {
    this.handleInfo();
    this.renderCircles();
    
  }

  componentDidUpdate() {
    this.renderCircles();
    console.log('updated');
  }
  
  renderCircles() {
    const radius = 20;
    const array = this.state.array;
    this.svg = d3.select(this.svgRef.current);
    this.svg.selectAll('*').remove();
    this.elem = this.svg.selectAll('g').data(array);
    let elemEnter = this.elem.enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * radius * 2 + radius}, 0)`);

    elemEnter
      .append('circle')
      .attr('r', radius)
      .attr('cy', radius)
      .style('fill', 'red')

    elemEnter
      .append('text')
      .text((d) => d)
      .attr('text-anchor', 'middle')
      .attr('dy', radius)
  }

  render() {
    const { array, highlightColor } = this.props;
    return (
      <div>
        <svg width="900" height="400" viewbox="0 0 100 100" ref={this.svgRef}></svg>
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