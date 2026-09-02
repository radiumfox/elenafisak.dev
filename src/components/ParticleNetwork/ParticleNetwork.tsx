'use client';

import { useRef } from 'react';
import { useEffect } from 'react';
import { resize, step } from './helpers';
import {
  DEFAULT_ACCENT_COLOR,
  DEFAULT_NODE_COUNT,
  DEFAULT_LINK_DISTANCE,
  DEFAULT_SPEED,
  DEFAULT_NODE_SIZE,
  DEFAULT_DPR_LIMIT,
} from './config';
import type { ParticleNetworkProps, ParticleNetworkState, ParticleNetworkOptions } from './types';

export default function ParticleNetwork({
  className,
  accentColor = DEFAULT_ACCENT_COLOR,
  nodeCount = DEFAULT_NODE_COUNT,
  linkDistance = DEFAULT_LINK_DISTANCE,
  speed = DEFAULT_SPEED,
  nodeSize = DEFAULT_NODE_SIZE,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, DEFAULT_DPR_LIMIT);

    const state: ParticleNetworkState = {
      context,
      width: 0,
      height: 0,
      nodes: [],
    };

    const options: ParticleNetworkOptions = {
      accentColor,
      nodeCount,
      linkDistance,
      speed,
      nodeSize,
      dpr: devicePixelRatio,
    };

    const handleFrame = () => {
      step(state, options, rafRef, handleFrame);
    };

    const onResize = () => {
      resize(canvas, state, options);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(canvas);
    onResize();

    if (!reduceMotion) {
      rafRef.current = requestAnimationFrame(handleFrame);
    }

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [accentColor, nodeCount, linkDistance, speed, nodeSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`block ${className}`}
      aria-hidden="true"
    />
  );
}
