import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './view/pages/home/index.jsx'
import Profile from './view/pages/profile/index.jsx'
import OrderBasket from './view/pages/basket/index.jsx'

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} />
          <Route path="/order-basket" component={OrderBasket} />
        </Switch>
      </Router>
    </>
  )
}
