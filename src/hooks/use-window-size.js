import { useEffect } from 'react'
import { debounce } from 'lodash/fp'

export default function useWindowSize(windowSize, setWindowSize) {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  useEffect(() => {
    const handleResizeDebounce = debounce(100)(function handleResize() {
      setWindowSize(getSize())
    })

    window.addEventListener('resize', handleResizeDebounce)
    return () => window.removeEventListener('resize', handleResizeDebounce)
  }, [setWindowSize])

  return windowSize
}
