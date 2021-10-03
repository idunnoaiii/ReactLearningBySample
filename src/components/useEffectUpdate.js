import {useEffect} from 'react'
import useTimeout from './useTimeout'

export default function useEffectUpdate(callback, deps){
  const {reset, clear} = useTimeout(callback, 1)
  useEffect(reset, [...deps])
  useEffect(clear, [])
}