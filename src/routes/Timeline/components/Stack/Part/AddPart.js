import React from 'react'
import PropTypes from 'prop-types'
import { PART_TYPES } from 'utils/propTypes'
import Icon from 'components/Icon'

import { PartWrapper } from './styled'

const { MELODY, CHORDS, BASSLINE, DRUMS } = PART_TYPES

export default function AddPart({ type }) {
  const iconMap = {
    [MELODY]: 'saxophone',
    [CHORDS]: 'keyboard',
    [BASSLINE]: 'bass-clef',
    [DRUMS]: 'drummer-set',
  }
  return (
    <PartWrapper type={type}>
      <button type="button">
        <Icon name={iconMap[type]} />
      </button>
    </PartWrapper>
  )
}

AddPart.propTypes = {
  type: PropTypes.oneOf([MELODY, CHORDS, BASSLINE, DRUMS]).isRequired,
}
