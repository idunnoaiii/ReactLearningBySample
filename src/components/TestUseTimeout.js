import React, { useEffect, useState, useCallback } from 'react'
import useTimeout from '../hooks/useTimeout'

window.thien = 1

function TestLifecycle(props) {

  console.log("run in TestLifecycle", window.thien++)

  const [sideValue, setSideValue] = useState(true)
  const [count, setCount] = useState(10)

  const {reset, clear} = useTimeout(() => setCount(0), 2000)

  useEffect(()=>{
    console.log('render TestLifecycle')

  })

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
      <hr />
      <button onClick={() => setSideValue(!sideValue)}>
        Trigger side change {sideValue ? '1' : '0'}
      </button>
    </>
  )
}


export default TestLifecycle