import React from 'react'
import ReactDOM from 'react-dom'

export default config => {
  ReactDOM.render(
    config.view(React),
    document.getElementById(config.node)
  )
}
