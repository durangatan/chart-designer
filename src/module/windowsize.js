export const SET_WINDOW_SIZE = 'windowsize/SET_WINDOW_SIZE'

export const setWindowSize = size => ({ type: SET_WINDOW_SIZE, size })

export const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

export function windowSizeReducer(state, action) {
  if (action.type === SET_WINDOW_SIZE) {
    return action.size
  }
  return state
}
