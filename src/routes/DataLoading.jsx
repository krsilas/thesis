import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import ShortPolling from "../components/ShortPolling";
import WebSockets from "../components/WebSockets";

export default function DataLoading() {
  const [method, setMethod] = useState(undefined);

  return (
    <Card>
      <h2 className="font-bold text-3xl mb-2">Data Loading</h2>
      <select
        className="mt-1 mb-4 border border-gray-400 py-1"
        name="method"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option className="italic text-gray-500" value="undefined">
          Select Method
        </option>
        <option value="ShortPolling">Short Polling</option>
        <option value="WebSockets">WebSockets</option>
      </select>
      <div>
        {method == "ShortPolling" && <ShortPolling />}
        {method == "WebSockets" && <WebSockets />}
      </div>
    </Card>
  );
}
