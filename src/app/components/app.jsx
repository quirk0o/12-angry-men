import React from 'react'

import 'style-loader!css-loader!semantic-ui-css/semantic.css'
import 'style-loader!css-loader!rc-slider/assets/index.css'

import {Layout} from '@src/base'
import {EvidenceHandles} from '@src/evidence'

const App = () => (
  <Layout>
    <EvidenceHandles />
  </Layout>
)

export default App
