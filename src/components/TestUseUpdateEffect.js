import React, { useState, useEffect } from 'react';

export default function TestUseUpdateEffect() {
  const [count, setCount] = useState(10);

  useEffect(() => alert('ping'), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}> Increment </button>
    </div>
  );
}
