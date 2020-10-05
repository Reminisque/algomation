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
      sortedUpTo: null,
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
    this.backtrack = []

    this.handleInfo = this.handleInfo.bind(this);
    this.run = this.run.bind(this);
  }

  componentDidMount() {
    this.handleInfo();
  }

  render() {
    const { array, highlightColor } = this.props;
    return (
      <div>
        <svg width="1400"></svg>
        <div className="array">
          {array
            ? array.join(' ')
            : null
          }
          <Button onClick={() => { this.run(); console.log(this.backtrack) }}>Run Algorithm</Button>
          <CodeBox 
            code={this.pseudocode}
            highlightColor={highlightColor}
          ></CodeBox>
        </div>
      </div>
    )
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

  run() {
    this.backtrack.length = 0;
    let unsorted = [...this.props.array];
    this.backtrack.push({
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
      [unsorted[start], unsorted[min]] = [unsorted[start], unsorted[min]];
      this.backtrack.push({
        array: [...unsorted],
        codeHighlights: new Set([1, 6])
      });
    }
  }
}

export { SelectionSort };