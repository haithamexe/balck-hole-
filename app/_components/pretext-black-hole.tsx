"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { mountPretextBlackHole } from "./pretext-black-hole-runtime";

export type PretextBlackHoleProps = {
  backgroundColor?: string;
  canvasClassName?: string;
  canvasStyle?: CSSProperties;
  className?: string;
  eventHorizon?: number;
  font?: string;
  gravityRadius?: number;
  gravityStrength?: number;
  lineHeight?: number;
  maxDevicePixelRatio?: number;
  nebulaLayers?: number;
  padding?: number;
  starCount?: number;
  style?: CSSProperties;
  swallowRadius?: number;
  text?: string;
  warpStrength?: number;
};

export default function PretextBlackHole({
  backgroundColor = "#020108",
  canvasClassName = "",
  canvasStyle,
  className = "",
  eventHorizon,
  font,
  gravityRadius,
  gravityStrength,
  lineHeight,
  maxDevicePixelRatio,
  nebulaLayers,
  padding,
  starCount,
  style,
  swallowRadius,
  text,
  warpStrength,
}: PretextBlackHoleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!(canvas instanceof HTMLCanvasElement)) {
      return;
    }

    return mountPretextBlackHole(canvas, {
      backgroundColor,
      eventHorizon,
      font,
      gravityRadius,
      gravityStrength,
      lineHeight,
      maxDevicePixelRatio,
      nebulaLayers,
      padding,
      starCount,
      swallowRadius,
      text,
      warpStrength,
    });
  }, [
    backgroundColor,
    eventHorizon,
    font,
    gravityRadius,
    gravityStrength,
    lineHeight,
    maxDevicePixelRatio,
    nebulaLayers,
    padding,
    starCount,
    swallowRadius,
    text,
    warpStrength,
  ]);

  return (
    <div
      className={`relative overflow-hidden ${className}`.trim()}
      style={{ backgroundColor, ...style }}
    >
      <canvas
        ref={canvasRef}
        className={`block h-full w-full cursor-none touch-none ${canvasClassName}`.trim()}
        style={canvasStyle}
      />
    </div>
  );
}
