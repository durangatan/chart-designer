import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import mapDispatchToProps from 'utils/mapDispatchToProps'
import { updatePlaybackState } from '../module/session'

import PlaybackControls from './PlaybackControls'

export default function SessionContainer({ children, dispatch, state }) {
  const { playbackState } = state.session
  const mappedActions = mapDispatchToProps(
    {
      updatePlaybackState,
    },
    dispatch
  )
  return (
    <div>
      <PlaybackControls playbackState={playbackState} {...mappedActions} />
      {children}
    </div>
  )
}

SessionContainer.propTypes = {
  
}
SessionContainer.defaultProps = {}
