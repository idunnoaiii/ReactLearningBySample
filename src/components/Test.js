import React from 'react';
import { useEffect, useState } from 'react';

window.thien = 1;

export default function Test() {
  const [side, setSide] = useState(true);

  useEffect(() => {
    console.log('run in useEffect', window.thien++);
    return () => {
      console.log('clear in useEffect', window.thien++);
    };
  });

  console.log('run in Test', window.thien++);

  return (
    <>
      <h1>Test</h1>
      <button onClick={() => setSide(!side)}>Side</button>
    </>
  );
}
