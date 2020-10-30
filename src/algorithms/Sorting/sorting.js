import * as d3 from 'd3';

class sorting {
  constructor() {
    this.BAR_LENGTH = 20;
  }

  initialRender(visualRef) {
    d3.select(visualRef.current).selectAll('*').remove();
    d3.select(visualRef.current)
      .append('div')
      .style('position', 'relative')
      .style('top', '50%')
      .style('display', 'flex')
      .style('flex-direction', 'row')
      .style('justify-content', 'center');
  }

  renderEnterExit(visualRef, array, barLength) {
    let ref = d3.select(visualRef.current).select('div');
    let div = ref.selectAll('div').data(array ? array : []);

    div.exit()
      .transition()
      .duration(500)
      .style('opacity', 0)
      .remove();

    div.enter()
      .append('div')
      .style('width', '32px')
      .style('height', (d) => `${barLength + d * 1.5}px`)
      .style('padding', '8px')
      .style('border', '1px solid')
      .style('text-align', 'center')
      .text((d) => d);
  }
}
export default sorting;