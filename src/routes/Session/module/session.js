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
})

const ACTIONS = {
  [UPDATE_PLAYBACK_STATE]: (state, action) => ({
    ...state,
    playbackState: action.playbackState,
  }),
}

export function sessionReducer(state, action) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action)
  }
  return state
}
