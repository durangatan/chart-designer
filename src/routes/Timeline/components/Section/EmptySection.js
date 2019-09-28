import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import { SectionTag, AddSectionButton } from './styled'

export default function EmptySection({ addSection, pixelsPerBar }) {
  return (
    <SectionTag durationInBars={4} pixelsPerBar={pixelsPerBar}>
      <AddSectionButton onClick={addSection} title="Add Section">
        <Icon name="volume-up" />
      </AddSectionButton>
    </SectionTag>
  )
}

EmptySection.propTypes = {
  addSection: PropTypes.func.isRequired,
  pixelsPerBar: PropTypes.number.isRequired,
}
