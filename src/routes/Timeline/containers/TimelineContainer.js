import React from 'react'
import PropTypes from 'prop-types'

import { stateType } from 'utils/propTypes'
import mapDispatchToProps from 'utils/mapDispatchToProps'

import Timeline from '../components'
import {
  addSection,
  updateSection,
  updateSelectedSection,
  deleteSection,
} from '../module/timeline'

export default function TimelineContainer({ dispatch, state }) {
  const { sections, selected } = state.timeline
  const { width } = state.windowSize

  const mappedActions = mapDispatchToProps(
    {
      updateSection,
      deleteSection,
      addSection,
      updateSelectedSection,
    },
    dispatch
  )
  const chartDurationInBars = sections.reduce(
    (acc, sec) => acc + sec.durationInBars,
    sections.length ? 0 : 4
  )
  return (
    <Timeline
      sections={sections}
      selectedSectionId={selected}
      chartDurationInBars={chartDurationInBars}
      pixelsPerBar={width / chartDurationInBars}
      {...mappedActions}
    />
  )
}

TimelineContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.objectOf(stateType).isRequired,
}
