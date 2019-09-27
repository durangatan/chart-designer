import PropTypes from 'prop-types'

export const PART_TYPES = {
  MELODY: 'MELODY',
  CHORDS: 'CHORDS',
  BASSLINE: 'BASSLINE',
  DRUMS: 'DRUMS',
}
export const stackPartType = PropTypes.shape({
  type: PropTypes.oneOf(Object.keys(PART_TYPES)),
})

export const sectionType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  durationInBars: PropTypes.number.isRequired,
  stack: PropTypes.objectOf({ parts: PropTypes.arrayOf(stackPartType) }),
  id: PropTypes.string.isRequired,
})

export const stateType = PropTypes.shape({
  timeline: PropTypes.objectOf({
    sections: PropTypes.arrayOf(sectionType).isRequired,
    selected: PropTypes.string.isRequired,
  }),
  chart: PropTypes.objectOf({ title: PropTypes.string.isRequired }),
  keypress: PropTypes.object,
  windowSize: PropTypes.object,
})
