import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sectionType } from 'utils/propTypes'
import Button from 'components/Button'
import Input from 'components/Input'

const HeaderControls = styled.div`
  display: flex;
  justify-content: space-between;
`

const BarsWrapper = styled.h3`
  display: flex;
`

export default function SectionHeading({
  section,
  updateSection,
  deleteSection,
}) {
  const { title, durationInBars, id } = section
  const [didPressDelete, setDidPressDelete] = useState(false)

  const handleClickDelete = useCallback(() => {
    if (didPressDelete) {
      deleteSection(id)
    } else {
      setDidPressDelete(true)
    }
  }, [deleteSection, didPressDelete, id])

  const onDeleteMemo = useCallback(() => setDidPressDelete(false), [])

  const updateSectionMemo = useCallback(updates => updateSection(id, updates), [
    id,
    updateSection,
  ])

  return (
    <header>
      <HeaderControls>
        {didPressDelete ? (
          <>
            <p>Are you sure you want to delete this section?</p>
            <div>
              <Button onClick={onDeleteMemo}>Cancel</Button>
              <Button onClick={handleClickDelete}>Delete</Button>
            </div>
          </>
        ) : (
          <>
            <h3>
              <Input
                dataKey="title"
                value={title}
                type="text"
                onUpdate={updateSectionMemo}
                placeholder="Section Name"
              />
            </h3>
            <BarsWrapper>
              <Input
                dataKey="durationInBars"
                value={durationInBars}
                type="number"
                onUpdate={updateSectionMemo}
              />
              bars
            </BarsWrapper>
            <Button onClick={handleClickDelete}>&times;</Button>
          </>
        )}
      </HeaderControls>
    </header>
  )
}

SectionHeading.defaultProps = {}

SectionHeading.propTypes = {
  section: PropTypes.objectOf(sectionType).isRequired,
  updateSection: PropTypes.func.isRequired,
  deleteSection: PropTypes.func.isRequired,
}
