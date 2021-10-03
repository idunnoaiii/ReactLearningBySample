import { useEffect } from 'react';
import useTimeout from './useTimeout';

export default function useDebounce(callback, delay, deps) {
  const { reset, clear } = useTimeout(callback, delay); //change delay to 0 we also get useUpdateEffect <3
  useEffect(reset, [...deps]);
  useEffect(clear, []);
}
