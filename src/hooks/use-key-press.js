import { useEffect, useCallback } from 'react'

export default function useMultiKeyPress(keysPressed, setKeyPressed) {
  const downHandler = useCallback(
    ({ key }) => {
      setKeyPressed(keysPressed.add(key))
    },
    [keysPressed, setKeyPressed]
  )

  const upHandler = useCallback(
    ({ key }) => {
      keysPressed.delete(key)
      setKeyPressed(keysPressed)
    },
    [keysPressed, setKeyPressed]
  )

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler])
  return keysPressed
}
