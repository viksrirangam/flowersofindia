import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Catalog from './Catalog'
import Settings from './Settings'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/catalog' component={Catalog}/>
      <Route path='/settings' component={Settings}/>
    </Switch>
  </main>
)

export default Main
