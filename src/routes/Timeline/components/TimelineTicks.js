import React from 'react'
import styled from 'styled-components'

const Tick = styled.div`
  border-right: 1px solid gray;
  height: 100%;
  width: ${({ width }) => width}px;
`

function calculateEmptyBars({ chartDurationInBars, sections }) {
  const sectionDurationInBars = sections.reduce(
    (acc, curr) => acc + curr.durationInBars,
    0
  )
  const addSectionButtonDuration = 4
  return chartDurationInBars - sectionDurationInBars - addSectionButtonDuration
}

export default function TimelineTicks({
  chartDurationInBars,
  sections,
  pixelsPerBar,
}) {
  const emptyBars = calculateEmptyBars({ chartDurationInBars, sections })
  return [...Array(emptyBars)].map(() => <Tick width={pixelsPerBar} />)
}
