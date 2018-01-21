import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const styles = require('./verdict.scss')

const Verdict = ({yes, no, playOff}) => (
  <div className={styles.bar} style={{gridTemplateColumns: `${yes * 100}% ${playOff * 100}% ${no * 100}%`}}>
    <div className={classnames(styles.marker, styles.failure)}>
      <span className={styles.value}>{yes}</span>
      <span className={styles.label}>Guilty</span>
    </div>
    <div className={classnames(styles.marker, styles.warning)}>
      <span className={styles.value}>{playOff}</span>
      <span className={styles.label}>Play off</span>
    </div>
    <div className={classnames(styles.marker, styles.success)}>
      <span className={styles.value}>{no}</span>
      <span className={styles.label}>Not guilty</span>
    </div>
  </div>
)

Verdict.propTypes = {
  yes: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  playOff: PropTypes.number.isRequired
}

export default Verdict
