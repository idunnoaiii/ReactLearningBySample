import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

export default function TestUseDebounce() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert('bounced'), 2000, [count])
  return (
    <div>
      <div>{count} </div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
