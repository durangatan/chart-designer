import {
  includesEscapeKey,
  hasLeftOrRightArrow,
  hasLetter,
} from 'module/keypress'

import getId from 'utils/getId'

const deleteSelected = state => {
  if (state.selected !== '-1') {
    return {
      ...state,
      sections: state.sections.filter(sec => sec.id !== state.selected),
      selected: '-1',
    }
  }
  return state
}

const changeSelectedSection = (state, action) => {
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
}

const addNewSection = state => ({
  ...state,
  sections: state.sections.concat([
    {
      stack: { parts: [] },
      durationInBars: 8,
      title: '',
      id: getId(),
    },
  ]),
})

const timelineKeypressMap = new Map([
  [includesEscapeKey, deleteSelected],
  [hasLeftOrRightArrow, changeSelectedSection],
  [hasLetter('n'), addNewSection],
])

export const timelineKeypressReducer = (state, action) => {
  for (const [criteria, callback] of timelineKeypressMap) {
    if (criteria(state, action)) {
      return callback(state, action)
    }
  }
  return state
}
