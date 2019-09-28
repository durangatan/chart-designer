export const UPDATE_CHART = 'UPDATE_CHART'

export const updateChart = updates => ({ type: UPDATE_CHART, updates })

const ACTIONS = {
  [UPDATE_CHART]: (state, action) => ({
    ...state,
    ...(action.updates || {}),
  }),
}

export function chartReducer(state, action) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action)
  }
  return state
}
