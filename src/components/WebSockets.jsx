import React, { useState, useEffect } from "react";
import DumpData from "./DumpData";

/**
 * @type {React.FC} - WebSocket Component
 * @returns {JSX.Element}
 */
export default function WebSockets() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000");
    socket.onopen = () => {
      console.info("Connected!");
    };

    socket.onmessage = (message) => {
      const newEvent = JSON.parse(message.data);
      setDataPoints((prev) => prev.concat(newEvent));
    };

    socket.onclose = () => {
      console.info("Connection closed!");
    };

    return () => {
      socket.close();
    };
  }, []);

  return <DumpData data={dataPoints} />;
}
