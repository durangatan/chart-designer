import React from 'react'
import PropTypes from 'prop-types'
import Input from 'components/Input'
import Button from 'components/Button'

export default function ChartToolbar({ title, addSection, updateChart }) {
  return (
    <div>
      <Input type="text" dataKey="title" value={title} onUpdate={updateChart} />
      <Button onClick={addSection}>Add Section</Button>
    </div>
  )
}

ChartToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  addSection: PropTypes.func.isRequired,
  updateChart: PropTypes.func.isRequired,
}
