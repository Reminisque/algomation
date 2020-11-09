import * as d3 from 'd3';

class graph {
  constructor() {
    this.NODE_AMOUNT = 10;
    this.NODE_RADIUS = 12;
    this.MAX_COST = 20;
    this.MAIN_COLOR = 'rgb(202, 138, 138)';
    this.LINK_COLOR = 'rgba(255, 255, 255, 0.4)';
  }

  initialRender(visualRef) {
    d3.select(visualRef.current).selectAll('*').remove();

    let svg = d3.select(visualRef.current)
      .append('svg')
      .attr('id', 'svg')
      .style('width', '100%')
      .style('height', '100%');

    this.force = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-800))
      .force('xAxis', d3.forceX(() => d3.select('#svg').node().getBoundingClientRect().width / 2))
      .force('yAxis', d3.forceY(() => d3.select('#svg').node().getBoundingClientRect().height / 2))
      .force('link', d3.forceLink().distance(150))
      .on('tick', () => this.ticked(visualRef));


    d3.select(window)
      .on('resize', () => {
        this.force
          .force('xAxis', d3.forceX(() => d3.select('#svg').node().getBoundingClientRect().width / 2))
          .force('yAxis', d3.forceY(() => d3.select('#svg').node().getBoundingClientRect().height / 2))
          .alpha(1)
          .restart();
      });
  }

  renderEnterExit(visualRef, nodes, links) {
    let svg = d3.select(visualRef.current).select('svg');
    let node = svg.selectAll('.node').data(nodes ? nodes : []);
    let link = svg.selectAll('.link').data(links ? links : []);
    let linkText = svg.selectAll('.linkText').data(links ? links : []);

    let g = node.enter()
      .append('g')
      .attr('class', 'node')
      .style('fill', this.MAIN_COLOR)

    g
      .append('circle')
      .attr('r', this.NODE_RADIUS)
      .style('fill', (d, i) => {
        if (i === 0) {
          return 'green';
        } else if (i === nodes.length - 1) {
          return 'indianred';
        } else {
          return '';
        }
      });

    node.exit()
      .remove();

    link.enter()
      .append('line')
      .attr('class', 'link')
      .style('stroke', this.LINK_COLOR)
      .style('stroke-width', 2);

    linkText.enter()
      .append('text')
      .attr('class', 'linkText')
      .attr('dy', -4)
      .style('fill', this.MAIN_COLOR);

    link.exit()
      .remove();

    linkText.exit()
      .remove();
  }

  generateGraph(nodeAmount = this.NODE_AMOUNT, maxCost = this.MAX_COST) {
    let nodes = [];
    let links = [];
    let unique = new Set();

    for (let node = 0; node < nodeAmount; node++) {
      let n = { name: node, links: [] }
      nodes.push(n);
    }

    for (let node = 0; node < nodeAmount - 1; node++) {
      let linkAmount = Math.floor(Math.random() * 2) + 1;
      let n = nodes[node];
      let initialLink = { 
        source: node,
        target: node + 1,
        cost: Math.floor(Math.random() * maxCost) + 1
      };

      links.push(initialLink);
      n.links.push(initialLink);

      unique.add(`${node},${node + 1}`);
      unique.add(`${node + 1},${node}`);

      for (let link = 0; link < linkAmount; link++) {
        let dest = Math.floor(Math.random() * (nodeAmount - 1 - node)) + node + 1;
        let cost = Math.floor(Math.random() * maxCost) + 1;

        while (dest === node) {
          dest = Math.floor(Math.random() * (nodeAmount - 1 - node)) + node + 1;
        }

        const linkTo = `${dest},${node}`;
        const linkFrom = `${node},${dest}`;

        if (!unique.has(linkTo) && !unique.has(linkFrom)) {
          let newLink = { source: node, target: dest, cost: cost };
          unique.add(linkTo);
          unique.add(linkFrom);
          links.push(newLink)
          n.links.push(newLink);
        }
      }
    }

    return {
      nodes: nodes,
      links: links
    };
  }

  ticked(visualRef) {
    let svg = d3.select(visualRef.current).select('svg');
    let node = svg.selectAll('.node');
    let link = svg.selectAll('.link');
    let linkText = svg.selectAll('.linkText');

    node
      .attr('transform', (d) => `translate(${d.x},${d.y})`);

    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    linkText
      .attr('transform', d => {
        let x = (d.source.x + d.target.x) / 2;
        let y = (d.source.y + d.target.y) / 2;
        let angle = Math.atan((d.source.y - d.target.y) / (d.source.x - d.target.x)) * 180 / Math.PI;
        return `translate(${x},${y}) rotate(${angle})`;
      })
      .text(d => d.cost);
  }

}

export default graph;