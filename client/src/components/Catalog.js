import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Plants from './Plants'
import Plant from './Plant'

const Catalog = () => (
  <Switch>
    <Route exact path='/plants' component={Plants}/>
    <Route path='/plant/:name' component={Plant}/>
  </Switch>
)

export default Catalog