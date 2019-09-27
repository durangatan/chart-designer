const timelineKeypressMap = new Map([
  [
    (state, action) => action.keys.has('Escape'),
    state => {
      if (state.selected !== '-1') {
        return {
          ...state,
          sections: state.sections.filter(sec => sec.id !== state.selected),
          selected: '-1',
        }
      }
      return state
    },
  ],
  [
    (state, action) => {
      return action.keys.has('ArrowLeft') || action.keys.has('ArrowRight')
    },
    (state, action) => {
      const selectedIndex = state.sections.findIndex(sec => {
        return sec.id === state.selected
      })
      if (selectedIndex > -1) {
        const delta = action.keys.has('ArrowLeft') ? -1 : 1
        const newSelected = state.sections[selectedIndex + delta]
        return {
          ...state,
          selected: newSelected ? newSelected.id : state.selected,
        }
      }
      return state
    },
  ],
])

export const timelineKeypressReducer = (state, action) => {
  for (const [criteria, callback] of timelineKeypressMap) {
    if (criteria(state, action)) {
      return callback(state, action)
    }
  }
  return state
}
