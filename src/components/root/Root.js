import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Landing from '../landing/Landing'
import Adopt from '../adopt/Adopt'

function Root() {
  return <main>
    <h1>Petful</h1>
    <Switch>
      <Route
        exact path={'/'}
        component={Landing}
      />
      <Route
        exact path={'/adopt'}
        component={Adopt}
      />
    </Switch>
  </main>
}

export default Root
