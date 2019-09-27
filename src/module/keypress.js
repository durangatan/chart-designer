export const SET_KEYS_PRESSED = 'keypress/SET_KEYS_PRESSED'

export const setKeysPressed = keys => ({
  type: SET_KEYS_PRESSED,
  keys,
})

export function keyPressReducer(state, action) {
  if (action.type === SET_KEYS_PRESSED) {
    return action.keys
  }
  return state
}
