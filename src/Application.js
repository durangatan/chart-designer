import React from 'react'
import { createGlobalStyle } from 'styled-components'
import ApplicationContainer from './containers/ApplicationContainer'

const GlobalStyles = createGlobalStyle`
#app {
  height: 600px;
}

body {
  margin: 0;
}


* {
  font-family: 'Open Sans', sans-serif;
 }
`

export default function Application() {
  return (
    <>
      <ApplicationContainer />
      <GlobalStyles />
    </>
  )
}
