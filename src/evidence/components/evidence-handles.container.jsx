import React from 'react'
import {compose, fromPairs, map} from 'ramda'
import EvidenceHandles from './evidence-handles'
import {VerdictService} from '@src/verdict/verdict.service'

const evidence = [
  {
    type: 'cinema',
    title: 'I Was at the Cinema',
    description: 'The defendant went to the cinema during the time of the crime.'
  },
  {
    type: 'knife',
    title: 'Switch Blade Fell Out',
    description: 'The switch blade fell out of a hole in the defendant\'s pocket.'
  },
  {
    type: 'woman',
    title: 'Woman\'s Shout',
    description: 'The downstairs neighbour heard a woman\'s scream after the murder.'
  },
  {
    type: 'train',
    title: 'Woman and Train',
    description: 'The neighbour from across the street saw the defendant murdering his father through a window of a passing L train.'
  },
  {
    type: 'oldMan',
    title: 'Old Man Watched the Stairs',
    description: 'The downstairs neighbour got to the door in time to see the defendant fleeing the scene of the crime.'
  },
  {
    type: 'defendant',
    title: 'Went Back to Crime Scene',
    description: 'The defendant went back to the crime scene to retrieve the blade he left behind.'
  },
  {
    type: 'neighbor',
    title: 'Heard the Shouting',
    description: 'The downstairs neighbour heard a fight between the defendant and his father before the crime.'
  }
]

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      verdict: {
        yes: 0.5,
        no: 0.2,
        playOff: 0.3
      },
      values: compose(
        fromPairs,
        map(evidence => [evidence.type, 0.5])
      )(evidence)
    }
  }

  handleValueChange = async (change) => {
    this.setState(state => ({values: {...state.values, ...change}}))
    try {
      const result = await VerdictService.evaluate(this.state.values)
      const data = result.data
      this.setState({verdict: {yes: data.guiltyProb, no: data.notGuiltyProb, playOff: data.playOffProb}})
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    return <EvidenceHandles
      evidence={evidence}
      values={this.state.values}
      verdict={this.state.verdict}
      onValueChange={this.handleValueChange}
    />
  }
}
