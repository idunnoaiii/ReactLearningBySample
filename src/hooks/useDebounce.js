import { useEffect } from 'react';
import useTimeout from './useTimeout';

export default function useDebounce(callback, delay, deps) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...deps]);
  useEffect(clear, []);
}
