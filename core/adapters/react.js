import React from 'react'
import ReactDOM from 'react-dom'

export default config => {
  ReactDOM.render(
    config.view(React, config.model),
    document.getElementById(config.node)
  )
}
