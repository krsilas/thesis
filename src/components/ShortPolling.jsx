import React, { useEffect, useState, useRef } from "react";
import DumpData from "./DumpData";

/**
 * @type {React.FC} - Short Polling Component
 * @returns {JSX.Element}
 */
export default function ShortPolling() {
  const [dataPoints, setDataPoints] = useState([]);

  /** @returns {Promise<void>} */
  async function fetchDataPoints() {
    const data = await fetch("http://localhost:5000/coordinates").then((res) =>
      res.json()
    );
    setDataPoints(dataPoints.concat([data.x, data.y]));
  }

  useInterval(() => fetchDataPoints(), 2500);

  return <DumpData data={dataPoints} />;
}


/**
 * @function - custom hook for interval
 * @param {function} callback 
 * @param {number} delay 
 * @return {void}
 */
function useInterval(callback, delay) {
  /** @type {{current: function}} */
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, []);
}
