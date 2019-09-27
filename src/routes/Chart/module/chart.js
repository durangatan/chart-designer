export const SET_CHART_DURATION_IN_BARS = 'SET_CHART_DURATION_IN_BARS'

const ACTIONS = {
  [SET_CHART_DURATION_IN_BARS]: (state, action) => ({
    ...state,
    durationInBars: action.durationInBars,
  }),
}

export function chartReducer(state, action) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action)
  }
  return state
}
