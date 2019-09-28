const RECEIVE_MIDI_MESSAGE = 'RECEIVE_MIDI_MESSAGE'

export const receiveMidiMessage = message => ({
  message,
  type: RECEIVE_MIDI_MESSAGE,
})

export function midiReducer(state, action) {
  if (action.type === RECEIVE_MIDI_MESSAGE) {
    const { data, timeStamp } = action.message
    return { ...state, messages: [...state.messages, { data, timeStamp }] }
  }
  return state
}
