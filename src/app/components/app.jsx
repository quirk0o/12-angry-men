import React from 'react'
import {Grid, Card} from 'semantic-ui-react'

import 'style-loader!css-loader!semantic-ui-css/semantic.css'
import 'style-loader!css-loader!rc-slider/assets/index.css'

const style = require('./app.scss')

import {Layout} from '@src/base'
import {Arrow, Evidence} from '@src/evidence'

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
  }
]

const App = () => (
  <Layout>
    <div className={style.grid}>
      {evidence.map(evidence => (
        <Evidence type={evidence.type} title={evidence.title} description={evidence.description} />
      ))}
      <Arrow />
      <Arrow />
      <Arrow />
      <Arrow />
      <Arrow />
      <Arrow />
    </div>
  </Layout>
)

export default App
