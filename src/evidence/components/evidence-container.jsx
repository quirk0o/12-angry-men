import React from 'react'
import PropTypes from 'prop-types'

import Evidence from './evidence'

export default class EvidenceContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {value: 0.5}
  }

  handleChange = (value) => {
    this.setState({value})
  }

  render () {
    return (
      <Evidence {...this.props} value={this.state.value} onChange={this.handleChange} />
    )
  }
}

EvidenceContainer.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
