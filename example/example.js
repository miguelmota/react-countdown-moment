import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import Countdown from 'react-countdown-moment'

const endDate = moment().add(2, 'hours')

ReactDOM.render(
  <Countdown endDate={endDate} />,
  document.getElementById('root')
)
