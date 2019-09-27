import React from 'react'
import PropTypes from 'prop-types'

import { stateType } from 'utils/propTypesF'
import getId from 'utils/getId'
import Timeline from '../components'
import {
  addSection,
  updateSection,
  updateSelectedSection,
  deleteSection,
} from '../module/timeline'

export const TimelineDispatch = React.createContext(null)

export default function TimelineContainer({ dispatch, state }) {
  const { sections, selected } = state.timeline
  const { width } = state.windowSize

  const createNewSection = () => ({
    stack: { parts: [] },
    durationInBars: 8,
    title: '',
    id: getId(),
  })
  function dispatchUpdate(id, updates) {
    dispatch(updateSection(id, updates))
  }

  function dispatchDelete(id) {
    dispatch(deleteSection(id))
  }

  function dispatchAddNewSection(section = createNewSection()) {
    dispatch(addSection(section))
  }

  function dispatchUpdateSelected(id) {
    dispatch(updateSelectedSection(id))
  }

  const mapDispatchToProps = {
    updateSection: dispatchUpdate,
    deleteSection: dispatchDelete,
    addNewSection: dispatchAddNewSection,
    updateSelectedSection: dispatchUpdateSelected,
  }
  const chartDurationInBars = sections.reduce(
    (acc, sec) => acc + sec.durationInBars,
    4
  )
  return (
    <TimelineDispatch.Provider value={dispatch}>
      <Timeline
        sections={sections}
        selectedSectionId={selected}
        chartDurationInBars={chartDurationInBars}
        pixelsPerBar={width / chartDurationInBars}
        {...mapDispatchToProps}
      />
    </TimelineDispatch.Provider>
  )
}

TimelineContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.objectOf(stateType).isRequired,
}
