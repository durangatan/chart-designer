import React from 'react'
import PropTypes from 'prop-types'
import { stackPartType } from 'utils/propTypes'

export default function Part({ part }) {
  return <div>{part.type}</div>
}

Part.propTypes = {
  part: PropTypes.shape(stackPartType).isRequired,
}
