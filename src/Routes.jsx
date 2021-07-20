import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './view/pages/home/index.jsx'
import Profile from './view/pages/profile/index.jsx'
import OrderBasket from './view/pages/basket/index.jsx'
import Campaigns from './view/pages/campaigns/index.jsx'
import SolutionCenter from './view/pages/solution-center/index.jsx'
import Login from './view/pages/authentication/login/index.jsx'
import Register from './view/pages/authentication/register/index.jsx'

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} />
          <Route path="/order-basket" component={OrderBasket} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/solution-center" component={SolutionCenter} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  )
}
