import { RECEIVE_MIDI_MESSAGE } from 'module/midi'

export const PLAYBACK_STATES = {
  PLAYING: 'PLAYING',
  RECORDING: 'RECORDING',
  STOPPED: 'STOPPED',
  PAUSED: 'PAUSED',
}

const UPDATE_PLAYBACK_STATE = 'UPDATE_PLAYBACK_STATE'

export const updatePlaybackState = playbackState => ({
  type: UPDATE_PLAYBACK_STATE,
  playbackState,
  notes: [],
})

const ACTIONS = {
  [UPDATE_PLAYBACK_STATE]: (state, action) => ({
    ...state,
    playbackState: action.playbackState,
  }),
  [RECEIVE_MIDI_MESSAGE]: (state, action) => ({
    ...state,
    notes:
      state.playbackState === PLAYBACK_STATES.RECORDING
        ? [...state.notes, action.message]
        : state.notes,
  }),
}

export function sessionReducer(state, action) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action)
  }
  return state
}
