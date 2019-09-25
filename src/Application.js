import React from 'react'
import { Timeline } from './components'

export default class Application extends React.Component {
  state = {
    sections: [],
  }

  render() {
    const { sections } = this.state
    return <Timeline sections={sections} />
  }
}
