import { useEffect, useRef } from 'react'
import useTimeout from './useTimeout'

export default function useUpdateEffect(callback, deps) {
  const isFirstTimeRenderRef = useRef(true);
  useEffect(()=>{
    if(!isFirstTimeRenderRef.current){
      isFirstTimeRenderRef.current = false
      return
    }
    callback()
  }, deps)
}