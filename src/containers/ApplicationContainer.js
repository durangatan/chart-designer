import React, { useReducer, useCallback } from 'react'

import useKeyPress from 'hooks/use-key-press'
import useWindowSize from 'hooks/use-window-size'
import useMidiInput from 'hooks/use-midi-input'

import { setKeysPressed } from 'module/keypress'
import { setWindowSize } from 'module/windowSize'
import { receiveMidiMessage } from 'module/midi'
import { rootReducer, initialState } from 'module/application'

import ApplicationRoutes from 'routes/ApplicationRoutes'

export default function ApplicationContainer() {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  const keyPressCallback = useCallback(
    keys => dispatch(setKeysPressed(keys)),
    []
  )
  useKeyPress(state.keypress, keyPressCallback)

  const windowSizeCallback = useCallback(
    size => dispatch(setWindowSize(size)),
    []
  )
  useWindowSize(state.windowSize, windowSizeCallback)

  const midiCallback = useCallback(
    midiMessage => dispatch(receiveMidiMessage(midiMessage)),
    []
  )
  useMidiInput(midiCallback)

  return <ApplicationRoutes state={state} dispatch={dispatch} />
}
