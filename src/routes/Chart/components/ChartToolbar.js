import React from 'react'
import PropTypes from 'prop-types'
import Input from 'components/Input'

export default function ChartToolbar({ title, updateChart }) {
  return (
    <div>
      <Input type="text" dataKey="title" value={title} onUpdate={updateChart} />
    </div>
  )
}

ChartToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  updateChart: PropTypes.func.isRequired,
}
