import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sectionType } from 'utils/propTypes'
import Section, { EmptySection } from './Section'

const TimelineWrapper = styled.main`
  display: flex;
  height: 100%;
  width: ${({ chartDurationInBars, pixelsPerBar }) =>
    chartDurationInBars * pixelsPerBar}px;
  border: 1px solid black;
  margin: 5vh 1.5vh;
`

export default function Timeline({
  sections,
  updateSection,
  deleteSection,
  addNewSection,
  updateSelectedSection,
  selectedSectionId,
  pixelsPerBar,
  chartDurationInBars,
}) {
  return (
    <TimelineWrapper
      chartDurationInBars={chartDurationInBars}
      pixelsPerBar={pixelsPerBar}
    >
      {sections.map(sec => (
        <Section
          key={sec.id}
          section={sec}
          updateSection={updateSection}
          deleteSection={deleteSection}
          updateSelectedSection={updateSelectedSection}
          selectedSectionId={selectedSectionId}
          pixelsPerBar={pixelsPerBar}
        />
      ))}
      <EmptySection addNewSection={addNewSection} pixelsPerBar={pixelsPerBar} />
    </TimelineWrapper>
  )
}

Timeline.defaultProps = {
  sections: [],
}

Timeline.propTypes = {
  sections: PropTypes.arrayOf(sectionType),
  updateSection: PropTypes.func.isRequired,
  deleteSection: PropTypes.func.isRequired,
  addNewSection: PropTypes.func.isRequired,
  updateSelectedSection: PropTypes.func.isRequired,
  selectedSectionId: PropTypes.string.isRequired,
  pixelsPerBar: PropTypes.number.isRequired,
  chartDurationInBars: PropTypes.number.isRequired,
}
