import styled from 'styled-components'
import { lighten } from 'polished'
import { PART_TYPES } from 'utils/propTypes'

const { MELODY, CHORDS, BASSLINE, DRUMS } = PART_TYPES

function getBackgroundColor(type = MELODY) {
  const bgMap = {
    [MELODY]: 'blue',
    [CHORDS]: 'green',
    [BASSLINE]: 'orange',
    [DRUMS]: 'red',
  }

  return bgMap[type] || bgMap.MELODY
}

// function getBorderColor(type = 'MELODY') {
//   const borderMap = { MELODY: 'slate' }

//   return borderMap[type] || borderMap.MELODY
// }

// function getTextColor(type = 'MELODY') {
//   const textMap = { MELODY: 'white' }
//   return textMap[type] || textMap.MELODY
// }

export const PartWrapper = styled.div`
  width: 100%;
  background: ${({ type }) => getBackgroundColor(type)};
  height: 100%;
  border-radius: 4px;
  button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    svg {
      width: 50px;
    }
    :hover {
      background: ${({ type }) => lighten(0.3)(getBackgroundColor(type))};
    }
  }
`
