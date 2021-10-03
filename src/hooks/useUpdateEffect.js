import { useEffect } from 'react'
import useTimeout from './useTimeout'

export default function useUpdateEffect(callback, deps) {
  const { reset, clear } = useTimeout(callback, 2000)
  useEffect(reset, [...deps])
  useEffect(clear, [])
}