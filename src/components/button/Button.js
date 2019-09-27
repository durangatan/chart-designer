import styled from 'styled-components'

function getBackgroundColor(kind = 'default') {
  const bgMap = { default: 'lightgray' }

  return bgMap[kind] || bgMap.default
}

function getBorderColor(kind = 'default') {
  const borderMap = { default: 'slate' }

  return borderMap[kind] || borderMap.default
}

function getTextColor(kind = 'default') {
  const textMap = { default: 'white' }
  return textMap[kind] || textMap.default
}

const Button = styled.button`
  background: ${({ kind }) => getBackgroundColor(kind)};
  border: ${({ kind }) => getBorderColor(kind)};
  color: ${({ kind }) => getTextColor(kind)};
`

export default Button
