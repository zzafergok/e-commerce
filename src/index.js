import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './assets/less/e-commerce.less'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import App from './App'

import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
