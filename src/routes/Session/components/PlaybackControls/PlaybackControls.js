import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'

import { PLAYBACK_STATES } from '../../module/session'

const ButtonContainer = styled.div`
  display: inline-flex;
  background: lightgray;
`

const PlaybackButton = styled(Button)`
  svg {
    width: 20px;
  }
`

const StopButton = styled(PlaybackButton)``

const PlayButton = styled(PlaybackButton)``

const RecordButton = styled(PlaybackButton)`
  svg {
    fill: red;
  }
`

export default function PlaybackControls({
  updatePlaybackState,
  playbackState,
}) {
  const stopCallback = useCallback(
    () => updatePlaybackState(PLAYBACK_STATES.STOPPED),
    [updatePlaybackState]
  )

  const playCallback = useCallback(() => {
    if (playbackState === PLAYBACK_STATES.PLAYING) {
      updatePlaybackState(PLAYBACK_STATES.PAUSED)
      return
    }
    if (playbackState === PLAYBACK_STATES.RECORDING) {
      return
    }
    updatePlaybackState(PLAYBACK_STATES.PLAYING)
  }, [playbackState, updatePlaybackState])

  const recordCallback = useCallback(() => {
    if (playbackState !== PLAYBACK_STATES.RECORDING) {
      updatePlaybackState(PLAYBACK_STATES.RECORDING)
    }
  }, [playbackState, updatePlaybackState])

  return (
    <>
      <ButtonContainer>
        <StopButton onClick={stopCallback}>
          <Icon name="stop" />
        </StopButton>
        <PlayButton onClick={playCallback}>
          <Icon
            name={playbackState === PLAYBACK_STATES.PLAYING ? 'pause' : 'play'}
          />
        </PlayButton>
        <RecordButton onClick={recordCallback}>
          <Icon name="record" />
        </RecordButton>
      </ButtonContainer>
      <div>{playbackState}</div>
    </>
  )
}

PlaybackControls.propTypes = {
  updatePlaybackState: PropTypes.func.isRequired,
  playbackState: PropTypes.oneOf(Object.keys(PLAYBACK_STATES)).isRequired,
}
PlaybackControls.defaultProps = {}
