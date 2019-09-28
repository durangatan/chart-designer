import { chartReducer } from 'routes/Chart/module/chart'
import { timelineReducer } from 'routes/Timeline/module/timeline'
import { keyPressReducer } from 'module/keypress'
import { windowSizeReducer, getWindowSize } from 'module/windowSize'
import { midiReducer } from 'module/midi'
import {
  PLAYBACK_STATES,
  sessionReducer,
} from '../routes/Session/module/session'

export const reducers = {
  timeline: timelineReducer,
  keypress: keyPressReducer,
  chart: chartReducer,
  windowSize: windowSizeReducer,
  midi: midiReducer,
  session: sessionReducer,
}

export const initialState = {
  timeline: { sections: [], selected: '-1' },
  chart: { title: '' },
  keypress: new Set(),
  windowSize: getWindowSize(),
  midi: { messages: [] },
  session: { playbackState: PLAYBACK_STATES.STOPPED },
}

export const rootReducer = (state, action) => {
  console.log(`[ROOT]:[STATE]:${JSON.stringify(state)}`)
  console.log(`[ROOT]:[ACTION}:${JSON.stringify(action)}`)
  let newState = { ...state }
  Object.entries(reducers).forEach(([stateKey, reducer]) => {
    newState = { ...newState, [stateKey]: reducer(state[stateKey], action) }
  })
  return newState
}
