import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputTag = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  :active {
    border: none;
  }
`

export default function Input({
  dataKey,
  value,
  type,
  onUpdate,
  readOnly,
  placeholder,
}) {
  const onChange = useCallback(
    ({ target }) => {
      const typeCheck = v => {
        const typeMap = {
          text: val => String(val),
          number: val => Number(val),
        }
        return typeMap[type](v)
      }
      onUpdate({ [dataKey]: typeCheck(target.value) })
    },
    [dataKey, onUpdate, type]
  )

  return (
    <InputTag
      type={type}
      value={value}
      disabled={readOnly}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

Input.defaultProps = {
  readOnly: false,
}

Input.propTypes = {
  dataKey: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  onUpdate: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
}
