/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name }) => (
  <div dangerouslySetInnerHTML={{ __html: require(`./svg/${name}.svg`) }} />
)

export default Icon

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}
