import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();
  console.log('run in use', callbackRef.current == callback);

  useEffect(() => {
    console.log('set');
    callbackRef.current = callback;
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    return () => {
      console.log('clear');
      clearTimeout(timeoutRef.current);
    };
  });

  const reset = function () {
    timeout = setTimeout(() => callback(), delay);
  };

  const clear = function () {
    clearTimeout(timeout);
  };

  return {
    reset,
    clear,
  };
}
