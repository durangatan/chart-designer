import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PART_TYPES, stackPartType } from 'utils/propTypes'
import Part, { AddPart } from './Part'

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`

// const { MELODY, CHORDS, BASSLINE, DRUMS } = PART_TYPES

export default function Stack({ stack }) {
  const { parts } = stack
  return (
    <StackContainer>
      {Object.keys(PART_TYPES).map(partType => {
        const matchingPart = parts.find(part => part.type === partType)
        if (matchingPart) {
          return <Part part={matchingPart} key={partType} />
        }
        return <AddPart type={partType} key={partType} />
      })}
    </StackContainer>
  )
}

Stack.propTypes = {
  stack: PropTypes.arrayOf(stackPartType).isRequired,
}
