import React, { useEffect, useState } from "react";
import Axis from "../components/Axis";
import { scaleLinear, line } from "d3";
import { numbers as initialNumbers } from "../lib/utils"

/**
 * @type {React.FC}
 */
export default function D3React() {
  const [numbers, setNumbers] = useState(initialNumbers);
  const xScale = scaleLinear().domain([0, 15]).range([0, 450]);
  const yScale = scaleLinear().domain([0, 100]).range([300, 0]);

  /**
  * @type {String}
  */
  const path = /** @type {?} */(line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y)));

  // function transform() {
  //   let num = numbers.map((i, index) => ({ x: i.x, y: i.y + 2 }));
  //   setNumbers(num);
  // }

  return (
    <svg width="550" height="550">
      <g transform="translate(30,30)">
        <Axis xScale={xScale} yScale={yScale} />
        <path 
          stroke="blue"
          strokeWidth={3}
          fill="none"
          d={path(numbers) ? path(numbers) : null}
        />
      </g>
    </svg>
  );
}
