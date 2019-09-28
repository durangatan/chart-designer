import { useEffect } from 'react'
import { useMIDI, useMIDIMessage } from '@react-midi/hooks'

export default function useMidiInput(onMidiMessage) {
  const [inputs] = useMIDI()
  const message = useMIDIMessage(inputs[0])
  useEffect(() => onMidiMessage(message), [message, onMidiMessage])
}
