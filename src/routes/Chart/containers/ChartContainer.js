import React from 'react'
import PropTypes from 'prop-types'

import mapDispatchToProps from 'utils/mapDispatchToProps'
import { stateType } from 'utils/propTypes'
import ChartToolbar from '../components'
import { updateChart } from '../module/chart'

export default function ChartContainer({ state, dispatch }) {
  const { title } = state.chart

  const mappedActions = mapDispatchToProps({ updateChart }, dispatch)

  return <ChartToolbar title={title} {...mappedActions} />
}

ChartContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.objectOf(stateType).isRequired,
}
