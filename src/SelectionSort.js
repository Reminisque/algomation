import React from 'react';

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
    this.storeState = this.storeState.bind(this);
  }

  componentDidMount() {
    this.handleInfo();
  }
  
  render() {
    const {array, minimum, current, sorted, codeHighlights} = this.props;
    return (
      <div className="array">
        {array
          ? array.join(' ')
          : null
        }
      </div>
    )
  }

  handleInfo() {
    this.props.handleInfo({
      name: this.name,
      category: this.category, 
      pseudocode: this.pseudocode
    });
  }
  
  storeState(state) {
    if (this.props.storeState) {
      this.props.storeState(state);
    }
  }
}

export { SelectionSort };