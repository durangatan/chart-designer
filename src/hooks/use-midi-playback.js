import { useState } from 'react'
import { PLAYBACK_STATES } from '../routes/Session/module/session'

export default function useMidiPlayback(playbackState, notes) {
  // const playbackStateMap ={
  //     [STOPPED]:
  // }
  
    const [playbackStateMemo, setPlaybackStateMemo] = useState(
    PLAYBACK_STATES.STOPPED
  )
  if (playbackState === playbackStateMemo) return
  
}
