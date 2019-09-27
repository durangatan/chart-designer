import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { sectionType } from 'utils/propTypes'
import { SectionTag, SectionBody } from './styled'
import { SectionHeading } from '.'
import Stack from '../Stack'

export default function Section({
  section,
  updateSection,
  deleteSection,
  updateSelectedSection,
  selectedSectionId,
  pixelsPerBar,
}) {
  const { stack, id, durationInBars } = section
  const updateSelectedMemo = useCallback(() => {
    if (selectedSectionId !== id) updateSelectedSection(id)
  }, [id, selectedSectionId, updateSelectedSection])
  const isSelected = selectedSectionId === id
  return (
    <SectionTag
      isSelected={selectedSectionId === id}
      pixelsPerBar={pixelsPerBar}
      durationInBars={durationInBars}
    >
      <SectionHeading
        section={section}
        updateSection={updateSection}
        deleteSection={deleteSection}
        isSelected={isSelected}
      />
      <SectionBody onClick={updateSelectedMemo}>
        <Stack stack={stack} />
      </SectionBody>
    </SectionTag>
  )
}

Section.propTypes = {
  section: PropTypes.objectOf(sectionType).isRequired,
  updateSection: PropTypes.func.isRequired,
  updateSelectedSection: PropTypes.func.isRequired,
  deleteSection: PropTypes.func.isRequired,
  selectedSectionId: PropTypes.string.isRequired,
  pixelsPerBar: PropTypes.number.isRequired,
}
