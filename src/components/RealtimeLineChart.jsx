import React, { useMemo, useState, useEffect, useRef } from "react";
import { useInception, useSocket } from "../lib/hooks";
import { scaleLinear, line, curveMonotoneX } from "d3";
import Axis from "./Axis";
import Indicator from './Indicator'
import {colors, getXY} from "../lib/utils"

/**
 * @type {React.FC} - Realtime Line Chart Component
 * @returns {JSX.Element}
 */
export default function RealtimeLineChart() {
  const [events] = useSocket("ws://127.0.0.1:8000");
  const hosts = Array.from(new Set(events.map((i) => i.host)));
  const inception = useInception()

  const xScale = scaleLinear().domain([0, 15]).range([0, 450]);
  const yScale = scaleLinear().domain([0, 10]).range([300, 0]);
  const path = line().curve(curveMonotoneX)
    .x((d, index) => xScale(index))
    .defined((d) => d!==null)
    .y((d) => yScale(d));

  return (
    <div className="flex">
      <svg width="480" height="360">
        <g transform="translate(30,30)">
          <Axis xScale={xScale} yScale={yScale} />
          {hosts.length > 0 &&
            hosts.map((host) => (
              <g>
              <path
                key={host}
                stroke={colors[host]}
                strokeWidth="2"
                fill="none"
                d={path(getXY(events, host, inception))}
              />
              <Indicator color={colors[host]} helperFunctions={{xScale, yScale}} xy={getXY(events, host, inception)} />
              </g>
            ))}
        </g>
      </svg>

      <div className="mt-5">
      {hosts.length > 0 &&
          hosts.map((item) => (
            <div key={item}>
              <span className={`h-2 w-5 inline-block mr-2`} style={{backgroundColor: colors[item]}}></span>
              <span className="text-gray-800 text-sm">{item}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
