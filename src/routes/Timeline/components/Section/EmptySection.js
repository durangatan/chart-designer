import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/Icon'
import { SectionTag, AddSectionButton } from './styled'

export default function EmptySection({ addNewSection, pixelsPerBar }) {
  const addSectionMemo = useCallback(() => addNewSection(), [addNewSection])
  return (
    <SectionTag durationInBars={4} pixelsPerBar={pixelsPerBar}>
      <AddSectionButton onClick={addSectionMemo} title="Add Section">
        <Icon name="volume-up" />
      </AddSectionButton>
    </SectionTag>
  )
}

EmptySection.propTypes = {
  addNewSection: PropTypes.func.isRequired,
  pixelsPerBar: PropTypes.number.isRequired,
}
