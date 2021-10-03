import React, { useState, useEffect } from 'react';
import useUpdateEffect from '../hooks/useUpdateEffect';
import useDebounce from '../hooks/useDebounce';

export default function TestUseUpdateEffect() {
  const [count, setCount] = useState(10);

  useDebounce(() => alert('ping'), 2000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}> Increment </button>
    </div>
  );
}
