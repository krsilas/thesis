import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { numbers as initialNumbers } from "../lib/utils"

/**
 * @type {React.FC}
 * @returns {JSX.Element}
 */
export default function LineChart() {
  const ref = useRef();
  const [numbers, setNumbers] = useState(initialNumbers);
  const x = d3.scaleLinear().domain([0, 15]).range([0, 450]);
  const y = d3.scaleLinear().domain([0, 100]).range([300, 0]);

  function transform() {
    let num = numbers.map((i, index) => ({ x: i.x, y: i.y + index / 2 }));
    setNumbers(num);
  }

  useEffect(() => {
    const svg = d3.select(ref.current);

    const path = svg.selectAll("path").data([numbers]);

    path
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.x))
          .y((d) => y(d.y))
      );

    svg
      .append("g")
      .attr("transform", "translate(0, 300)")
      .call(d3.axisBottom(x));

    svg.append("g").attr("transform", "translate(0, 0)").call(d3.axisLeft(y));
  }, [numbers]);

  return (
    <svg onClick={transform} width="550" height="550">
      <g transform="translate(25,25)" ref={ref} />
    </svg>
  );
}
