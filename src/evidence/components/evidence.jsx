import React from 'react'
import PropTypes from 'prop-types'
import {Card, Image, Input} from 'semantic-ui-react'
import BaseSlider, {createSliderWithTooltip} from 'rc-slider'

const Slider = createSliderWithTooltip(BaseSlider)

const style = require('./evidence.scss')

const evidenceMap = {
  cinema: require('./img/cinema.svg'),
  knife: require('./img/knife.svg'),
  woman: require('./img/woman.svg'),
  train: require('./img/train.svg'),
  oldMan: require('./img/old-man.svg'),
  defendant: require('./img/runner.svg'),
  neighbor: require('./img/ear.svg')
}

const Evidence = ({type, title, description, value, onChange}) => (
  <Card className={style.card}>
    <Image src={evidenceMap[type]} width={250} height={250} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      {/*<Card.Meta>Joined in 2016</Card.Meta>*/}
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra className={style.extra}>
      <Slider
        value={value}
        min={0}
        max={1}
        step={0.01}
        onChange={onChange}
        trackStyle={{backgroundColor: '#00b5ad', height: 10}}
        handleStyle={[
          {
            borderColor: '#00b5ad',
            height: 20,
            width: 20
          }
        ]}
        railStyle={{ marginTop: 4 }}
      />
      <Input size="mini" value={value} onChange={onChange} className={style.input} />
    </Card.Content>
  </Card>
)

Evidence.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Evidence
