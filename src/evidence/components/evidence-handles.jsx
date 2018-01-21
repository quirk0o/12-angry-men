import React from 'react'
import PropTypes from 'prop-types'
import Evidence from './evidence'
import Arrow from './arrow'
import Verdict from '@src/verdict/components/verdict'

const style = require('./evidence-handles.scss')

const EvidenceHandles = ({evidence, values, onValueChange, verdict}) => (
  <div className={style.grid}>
    {evidence.map(evidence => (
      <Evidence
        key={evidence.type}
        type={evidence.type}
        title={evidence.title}
        description={evidence.description}
        value={values[evidence.type]}
        onChange={(value) => onValueChange({[evidence.type]: value})}
      />
    ))}
    {evidence.map(evidence => (
      <Arrow key={`${evidence.type}_arrow`} />
    ))}
    <div style={{gridColumnStart: 1, gridColumnEnd: -1}}>
      <Verdict yes={verdict.yes} no={verdict.no} playOff={verdict.playOff}/>
    </div>
  </div>
)

EvidenceHandles.propTypes = {
  evidence: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired
}

export default EvidenceHandles
