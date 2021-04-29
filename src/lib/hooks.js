import React, { useEffect, useState, useRef } from "react";

/**
 * @typedef {import('./types').Event} Event
 * @param {string} url - WebSocket Url
 * @returns {[Event[], React.Dispatch<React.SetStateAction<Event[]>>]}
 */
export function useSocket(url) {
  //** @type {Event} event */
  //const initialEvent = { timeStamp: null, host: undefined };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onopen = () => {
      console.info("Connected!");
    };

    socket.onmessage = (message) => {
      const newEvent = JSON.parse(message.data);
      setEvents((prev) => prev.concat(newEvent));
    };

    socket.onclose = () => {
      console.info("Connection closed!");
    };

    return () => {
      socket.close();
    };
  }, []);

  return [events, setEvents];
}



/**
 * Returns the time of inception for component
 * as refernce during runtime of component
 * @returns {number}
 */
 export function useInception() {
  const ref = useRef(0);
  
  useEffect(()=>{
    ref.current = Math.round((Date.now() / 10000) % 100);
  },[])

  return ref.current;
}




