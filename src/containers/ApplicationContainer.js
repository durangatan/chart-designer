import React, { useReducer } from 'react'
import useKeyPress from 'hooks/use-key-press'
import useWindowSize from 'hooks/use-window-size'
import TimelineContainer from '../routes/Timeline'
import ChartContainer from '../routes/Chart'
import { chartReducer } from '../routes/Chart/module/chart'
import { timelineReducer } from '../routes/Timeline/module/timeline'
import { keyPressReducer, setKeysPressed } from '../module/keypress'
import {
  setWindowSize,
  windowSizeReducer,
  getWindowSize,
} from '../module/windowSize'

const reducers = {
  timeline: timelineReducer,
  keypress: keyPressReducer,
  chart: chartReducer,
  windowSize: windowSizeReducer,
}

const initialState = {
  timeline: { sections: [], selected: '-1' },
  chart: { durationInBars: 48 },
  keypress: new Set(),
  windowSize: getWindowSize(),
}

const rootReducer = (state, action) => {
  console.log(`[ROOT]:[STATE]:${JSON.stringify(state)}`)
  console.log(`[ROOT]:[ACTION}:${JSON.stringify(action)}`)
  let newState = { ...state }
  Object.entries(reducers).forEach(([stateKey, reducer]) => {
    newState = { ...newState, [stateKey]: reducer(state[stateKey], action) }
  })
  return newState
}

export default function ApplicationContainer() {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  useKeyPress(state.keypress, keys => dispatch(setKeysPressed(keys)))
  useWindowSize(state.windowSize, size => dispatch(setWindowSize(size)))
  return (
    <>
      <ChartContainer dispatch={dispatch} state={state} />
      <TimelineContainer dispatch={dispatch} state={state} />
    </>
  )
}
