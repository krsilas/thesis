import React from "react";
import { numbers } from "../lib/utils"

/**
 * @type {React.FC} - Simple SVG Component
 * @returns {JSX.Element}
 */
export default function SimpleSVG() {
  function drawPath(points) {
    const transformedValues = points.map((item) => ({
      x: item.x * 30,
      y: 300 - item.y * 3,
    }));
    const startingPoint = `${transformedValues[0].x} ${transformedValues[0].y}`;
    const path = transformedValues
      .map((currentValue) => `${currentValue.x} ${currentValue.y}`)
      .join(", ");
    return `M ${startingPoint} L ${path}`;
  }

  return (
    <svg className="border border-gray-900" width="450" height="300">
      <g style={{ padding: 30 }}>
        <path stroke="blue" strokeWidth="2" fill="none" d={drawPath(numbers)} />
      </g>
    </svg>
  );
}
