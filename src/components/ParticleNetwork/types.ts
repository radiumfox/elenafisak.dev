export interface ParticleNetworkProps {
  className?: string;
  accentColor?: string;
  nodeCount?: number;
  linkDistance?: number;
  speed?: number;
  nodeSize?: number;
}

export type Node = { x: number; y: number; vx: number; vy: number };

export interface ParticleNetworkState {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  nodes: Node[];
}

export interface ParticleNetworkOptions {
  accentColor: string;
  nodeCount: number;
  linkDistance: number;
  speed: number;
  nodeSize: number;
  dpr: number;
}
