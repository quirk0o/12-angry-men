import axios from 'axios'
import {adjust, compose, fromPairs, map, toPairs} from 'ramda'

const apiUrl = process.env.API_URL

const nameToEvKey = {
  cinema: 'ev1',
  neighbor: 'ev2',
  knife: 'ev3',
  woman: 'ev4',
  defendant: 'ev5',
  train: 'ev6',
  oldMan: 'ev7',
  juryman: 'jm1'
}

export const VerdictService = {
  evaluate (variables) {
    const keyedVariables = compose(
      fromPairs,
      map(adjust(key => nameToEvKey[key], 0)),
      toPairs
    )(variables)
    console.log(keyedVariables)
    return axios.post(`${apiUrl}/api/probability`, keyedVariables)
  }
}
