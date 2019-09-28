import { SET_KEYS_PRESSED } from 'module/keypress'
import getId from 'utils/getId'
import { timelineKeypressReducer } from './timeline-keypress'

export const ADD_SECTION = 'timeline/ADD_SECTION'
export const DELETE_SECTION = 'timeline/DELETE_SECTION'
export const UPDATE_SECTION = 'timeline/UPDATE_SECTION'
export const UPDATE_SELECTED_SECTION = 'timeline/UPDATE_SELECTED_SECTION'
export const CHANGE_SELECTED_INDEX = 'timeline/CHANGE_SELECTED_INDEX'

export const addSection = () => ({
  section: {
    stack: { parts: [] },
    durationInBars: 8,
    title: '',
    id: getId(),
  },
  type: ADD_SECTION,
})

export const onAddSection = (state, action) => ({
  ...state,
  sections: state.sections.concat([action.section]),
  selected: state.sections.length === 0 ? action.section.id : state.selected,
})

export const deleteSection = sectionId => ({ sectionId, type: DELETE_SECTION })

export const updateSection = (sectionId, payload) => ({
  sectionId,
  payload,
  type: UPDATE_SECTION,
})

export const updateSelectedSection = selected => ({
  selected,
  type: UPDATE_SELECTED_SECTION,
})

export const changeSelectedIndex = delta => ({
  type: CHANGE_SELECTED_INDEX,
  delta,
})

const ACTIONS = {
  [ADD_SECTION]: onAddSection,

  [DELETE_SECTION]: (state, action) => {
    const filteredSections = state.sections.filter(
      sec => sec.id !== action.sectionId
    )
    const newSelected = filteredSections.length ? filteredSections[0].id : '-1'
    return {
      ...state,
      sections: filteredSections,
      selected:
        action.sectionId === state.selected ? newSelected : state.selected,
    }
  },

  [UPDATE_SECTION]: (state, action) => {
    const { sections } = state
    const indexToUpdate = sections.findIndex(sec => sec.id === action.sectionId)
    if (indexToUpdate > -1) {
      const sectionsCopy = [...sections]
      sectionsCopy[indexToUpdate] = {
        ...sections[indexToUpdate],
        ...action.payload,
      }
      return { ...state, sections: sectionsCopy }
    }
    return state
  },
  [CHANGE_SELECTED_INDEX]: (state, action) => {
    const selectedIndex = state.sections.indexOf(
      sec => sec.id === state.selected
    )
    const newSelected = state.sections[selectedIndex + action.delta]
    return { ...state, selected: newSelected || state.selected }
  },
  [UPDATE_SELECTED_SECTION]: (state, action) => ({
    ...state,
    selected: action.selected,
  }),
  [SET_KEYS_PRESSED]: timelineKeypressReducer,
}

export function timelineReducer(state, action) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action)
  }
  return state
}
