import styled from 'styled-components'

export const SectionTag = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ durationInBars, pixelsPerBar }) =>
    durationInBars * pixelsPerBar}px;
  height: 100%;
  padding: 0 5px;

  border: ${p => (p.isSelected ? '3px solid yellow' : 'none')};
`

export const AddSectionButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: none;
  :hover {
    border: 1px dashed gray;
    background: lightgray;
  }
  svg {
    max-width: 100px;
  }
  padding: 50px;
`

export const SectionBody = styled.div`
  width: 100%;
  height: 100%;
`
