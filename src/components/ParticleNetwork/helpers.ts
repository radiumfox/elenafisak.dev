import { LINK_ALPHA, LINK_WIDTH } from './config';
import type { ParticleNetworkState, ParticleNetworkOptions } from './types';

export function makeNodes(state: ParticleNetworkState, options: ParticleNetworkOptions) {
  state.nodes = Array.from({ length: options.nodeCount }, () => ({
    x: Math.random() * state.width,
    y: Math.random() * state.height,
    vx: (Math.random() - 0.5) * options.speed,
    vy: (Math.random() - 0.5) * options.speed,
  }));
}

export function draw(state: ParticleNetworkState, options: ParticleNetworkOptions) {
  const { context, width, height, nodes } = state;
  const { accentColor, linkDistance, nodeSize } = options;

  context.clearRect(0, 0, width, height);

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < linkDistance) {
        context.strokeStyle = accentColor;
        context.globalAlpha = (1 - dist / linkDistance) * LINK_ALPHA;
        context.lineWidth = LINK_WIDTH;
        context.beginPath();
        context.moveTo(nodes[i].x, nodes[i].y);
        context.lineTo(nodes[j].x, nodes[j].y);
        context.stroke();
      }
    }
  }

  context.globalAlpha = 1;
  context.fillStyle = accentColor;
  for (const node of nodes) {
    context.beginPath();
    context.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
    context.fill();
  }
}

export function step(state: ParticleNetworkState, options: ParticleNetworkOptions, rafRef: { current: number }, onFrame: () => void) {
  for (const node of state.nodes) {
    node.x += node.vx;
    node.y += node.vy;
    if (node.x < 0 || node.x > state.width) node.vx *= -1;
    if (node.y < 0 || node.y > state.height) node.vy *= -1;
  }
  draw(state, options);
  rafRef.current = requestAnimationFrame(onFrame);
}

export function resize(
  canvas: HTMLCanvasElement,
  state: ParticleNetworkState,
  options: ParticleNetworkOptions,
) {
  const rect = canvas.getBoundingClientRect();
  state.width = rect.width;
  state.height = rect.height;
  canvas.width = state.width * options.dpr;
  canvas.height = state.height * options.dpr;
  state.context.setTransform(options.dpr, 0, 0, options.dpr, 0, 0);
  makeNodes(state, options);
  draw(state, options);
}
