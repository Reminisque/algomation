import * as d3 from 'd3';
import graph from './graph';
import styles from './graph.module.css';

class djikstra extends graph {
  constructor() {
    super();

    this.START_NODE_COLOR = styles['start-node'];
    this.END_NODE_COLOR = styles['end-node'];
    this.CURRENT_NODE_COLOR = styles['current-node'];
    this.QUEUED_LINK_COLOR = styles['link-queued'];
    this.VISITED_LINK_COLOR = styles['link-visited'];

    this.name = 'Djikstra\'s Algorithm';
    this.category = 'Graph Algorithm';
    this.pseudocode = [
      'for each node n in graph',
      '  set distance[n] to INFINITY',
      'distance[src] = 0',
      'add src to queue',
      '',
      'while queue is not empty',
      '  n = node from queue with lowest distance',
      '  remove n from queue',
      '  for each neighbor of n',
      '    alt = distance[n] + length(n, neighbor)',
      '    if alt < distance[neighbor]',
      '      distance[neighbor] = alt',
      'when looking for shortest route from src to trgt',
      '  end early after calculating trgt distance'
    ];
  }

  renderUpdate(visualRef, nodes, links, current, linkQueue, linkVisited) {
    let svg = d3.select(visualRef.current).select('svg');
    let node = svg.selectAll('.node').data(nodes ? nodes : []);
    let link = svg.selectAll('.link').data(links ? links : []);

    node
      .style('stroke', (d) => d === current ? this.CURRENT_NODE_COLOR : null)
      .style('stroke-width', (d) => d === current ? 3 : 1);

    node
      .select('circle')
      .style('fill', (d, i) => {
        if (i === 0) {
          return this.START_NODE_COLOR;
        } else if (i === nodes.length - 1) {
          return this.END_NODE_COLOR;
        }
      });

    link
      .style('stroke', (d) => {
        if (linkVisited.has(d)) {
          return this.VISITED_LINK_COLOR;
        } else if (linkQueue.has(d)) {
          return this.QUEUED_LINK_COLOR;
        } else {
          return this.LINK_COLOR;
        }
      });

    this.force.nodes(nodes);
    this.force.force('link').links(links);

    return;
  }

  renderVisual(visualRef, state) {
    const { nodes, links, current, linkQueue, linkVisited } = state;
    this.renderEnter(visualRef, nodes, links);
    this.renderUpdate(visualRef, nodes, links, current, linkQueue, linkVisited);
    this.renderExit(visualRef, nodes, links);
    return;
  }

  run(backtrack) {
    this.force.alpha(1).restart();

    const { nodes, links } = this.generateGraph(12);
    let queue = [nodes[0]];
    let linkQueue = new Set();
    let linkVisited = new Set();
    let end = nodes.length - 1;
    let endReached = false;
    let state = {
      nodes: nodes,
      links: links,
      current: null,
      linkQueue: new Set(),
      linkVisited: new Set(),
      codeHighlights: new Set()
    };
    backtrack.push(state);

    nodes[0].bestCost = 0;
    nodes.forEach(n => {
      if (n !== nodes[0]) {
        n.bestCost = Infinity;
        n.visited = false;
      }
    });

    while (queue.length > 0) {
      let current = queue.pop();

      current.visited = true;
      state = {
        ...state,
        current: current,
        codeHighlights: new Set([6, 7, 8])
      };
      backtrack.push(state);

      for (let l = 0; l < current.links.length; l++) {
        let link = current.links[l];
        let target = nodes[link.target];
        let cost = current.bestCost + link.cost;

        if (!linkQueue.has(link)) {
          linkQueue.add(link)
          state = {
            ...state,
            linkQueue: new Set(linkQueue),
            codeHighlights: new Set([6, 9, 10])
          };
          backtrack.push(state);
        }

        if (!target.visited) {
          queue.push(target);
        }

        if (cost < target.bestCost) {
          target.bestCost = cost;
          if (target.prevLink !== link) {
            linkVisited.delete(target.prevLink);
          }
          target.prevLink = link;
          linkVisited.add(link);
          state = {
            ...state,
            linkVisited: new Set(linkVisited),
            codeHighlights: new Set([6, 9, 11, 12])
          };
          backtrack.push(state);
        }

        if (target === nodes[end]) {
          endReached = true;
          break;
        }
      }

      if (endReached) {
        break;
      }

      queue.sort((a, b) => b.bestCost - a.bestCost);
    }

    if (endReached) {
      state = {
        ...state,
        current: nodes[end],
        codeHighlights: new Set([13, 14])
      };
    } else {
      state = {
        ...state,
        current: null,
        codeHighlights: new Set()
      };
    }

    backtrack.push(state);
  }
}

export default djikstra;