import React from 'react'
import styled from 'styled-components'

const TimelineContainer = styled.main`
  display: flex;
`
const Section = styled.section``

const EmptySection = styled.section`
  border: 1px dotted black;
`

export default function Timeline({ sections }) {
  return (
    <TimelineContainer>
      {sections.map(() => (
        <Section />
      ))}
      <EmptySection />
    </TimelineContainer>
  )
}
