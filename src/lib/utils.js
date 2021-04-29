export function getXY(events, host, start = 0) {
  events = events.filter((d) => d.host === host)
  const count = (x) => events.filter((item) => item.timeStamp === x).length;
  return Array.from(Array(16)).map((i, index) => {
    if (index <= Math.round((Date.now() / 10000) % 100) - start) return count(start + index)
    else return null
  }).filter(d=>d!==null);
}

export const colors = {
  "paypol.com": 'lightblue',
  "microsoft.co": 'darkblue',
  "hdm-stuttgart.de": 'red',
  "example.com": 'orange'
}

export function getLastItem(array){
  return array[array.length-1]
}

/** @type {import('../lib/types').xyObject[]} */
export const numbers = [
  { x: 0, y: 2 },
  { x: 1, y: 3 },
  { x: 2, y: 7 },
  { x: 3, y: 13 },
  { x: 4, y: 17 },
  { x: 5, y: 23 },
  { x: 6, y: 31 },
  { x: 7, y: 37 },
  { x: 8, y: 43 },
  { x: 9, y: 53 },
  { x: 10, y: 59 },
  { x: 11, y: 67 },
  { x: 12, y: 73 },
  { x: 13, y: 79 },
  { x: 14, y: 89 },
  { x: 15, y: 97 },
];