import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import TimelineContainer from 'routes/Timeline'
import ChartContainer from 'routes/Chart'
import SessionContainer from 'routes/Session'

import { stateType } from 'utils/propTypes'

export default function ApplicationRoutes({ state, dispatch }) {
  return (
    <BrowserRouter>
      <Route path="/">
        <SessionContainer dispatch={dispatch} state={state}>
          <ChartContainer dispatch={dispatch} state={state} />
          <TimelineContainer dispatch={dispatch} state={state} />
        </SessionContainer>
      </Route>
    </BrowserRouter>
  )
}

ApplicationRoutes.propTypes = {
  state: PropTypes.objectOf(stateType).isRequired,
  dispatch: PropTypes.func.isRequired,
}
