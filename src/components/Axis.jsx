import React from "react";

/**
 * @type {React.FC}
 */
export default function Axis({ xScale, yScale }) {
  const [xStart, xEnd] = xScale.range();
  const [yStart, yEnd] = yScale.range();

  return (
    <g>
      <line x1={xStart} x2={xEnd} y1={yStart} y2={yStart} stroke="black" />
      <line x1={xStart} x2={xStart} y1={yEnd} y2={yStart} stroke="black" />
      <g className="xTicks">
        {xScale.ticks().map((t, i) => {
          const x = xScale(t);
          return (
            <React.Fragment key={i}>
              <line x1={x} x2={x} y1={yStart} y2={yStart + 5} stroke="black" />
              <text
                x={x}
                y={yStart + 20}
                fill="black"
                textAnchor="middle"
                fontSize={10}
              >
                {t}
              </text>
            </React.Fragment>
          );
        })}
        {yScale.ticks().map((t, i) => {
          const y = yScale(t);
          return (
            <React.Fragment key={i}>
              <line x1={xStart - 5} x2={xStart} y1={y} y2={y} stroke="black" />
              <text
                x={xStart - 12}
                y={y + 3}
                fill="black"
                textAnchor="end"
                fontSize={10}
                style={{ margin: "3px 0" }}
              >
                {t}
              </text>
            </React.Fragment>
          );
        })}
      </g>
    </g>
  );
}
