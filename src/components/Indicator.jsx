import React from 'react'
import {getLastItem} from '../lib/utils'

/**
 * @type {React.FC} - Indicator Component
 * @returns {JSX.Element}
 */
export default function Indicator({ helperFunctions, xy, color}){
  const { xScale, yScale } = helperFunctions;
  
  return (
    <circle cx={xScale(xy.length - 1)} cy={yScale(getLastItem(xy))} r="2.5" stroke={color} strokeWidth="2" fill="white" />
  )
}