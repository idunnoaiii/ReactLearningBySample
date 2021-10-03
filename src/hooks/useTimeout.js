import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  console.log('run in useTimeout');
  useEffect(() => {
    console.log('assign callback');
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    console.log('set');
    timeoutRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    console.log('clear');
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return {
    clear,
    reset,
  };
}
