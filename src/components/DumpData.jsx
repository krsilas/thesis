import React from "react";

export default function DumpData({ data }) {
  return (
    <code>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </code>
  );
}
