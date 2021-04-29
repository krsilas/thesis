import React, { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import D3 from "../components/D3";
import SimpleSVG from "../components/SimpleSVG";
import D3React from "../components/D3-React";

/**
 * @type {React.FC}
 * @returns {JSX.Element}
 */
export default function LineChart() {
  const [step, setStep] = useState(undefined);

  return (
    <Card>
      <h2 className="font-bold text-3xl mb-2">Line Chart</h2>
      <select
        className="mt-1 mb-4 border border-gray-400 py-1"
        name="method"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      >
        <option className="italic text-gray-500" value="undefined">
          Select Method
        </option>
        <option value="svg">SVG</option>
        <option value="d3">D3</option>
        <option value="d3-react">D3 + React</option>
      </select>
      <div>
        {step == "svg" && <SimpleSVG />}
        {step == "d3" && <D3 />}
        {step == "d3-react" && <D3React />}
      </div>
    </Card>
  );
}
