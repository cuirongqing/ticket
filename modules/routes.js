/*global LEANCLOUD_APP_ID, LEANCLOUD_APP_KEY, LEANCLOUD_APP_ENV*/
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import moment from 'moment'
import AV from 'leancloud-storage/live-query'

import common from './common'
import App from './App'
import About from './About'
import Login from './Login'

import Tickets from './Tickets'
import NewTicket from './NewTicket'
import Ticket from './Ticket'
import CustomerService from './CustomerService'
import CSTickets from './CustomerServiceTickets'
import CSStats from './CustomerServiceStats'
import User from './User'
import Home from './Home'

import Settings from './Settings'
import SettingsCSProfile from './settings/CustomerServiceProfile'
import Members from './settings/Members'
import Categories from './settings/Categories'
import Category from './settings/Category'
import Error from './Error'

moment.locale('zh-cn')

AV.init({
  appId: LEANCLOUD_APP_ID,
  appKey: LEANCLOUD_APP_KEY,
})
AV.setProduction(LEANCLOUD_APP_ENV === 'production')

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/tickets" component={Tickets} />
    <Route path="/tickets/new" component={NewTicket} />
    <Route path="/tickets/:nid" component={Ticket} />
    <Route path="/customerService" component={CustomerService} onEnter={common.requireCustomerServiceAuth}>
      <Route path="/customerService/tickets" component={CSTickets} />
      <Route path="/customerService/stats" component={CSStats} />
    </Route>
    <Route path="/users/:username" component={User} />
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/settings" component={Settings} onEnter={common.requireAuth}>
      <Route path="/settings/customerServiceProfile" component={SettingsCSProfile} />
      <Route path="/settings/members" component={Members} />
      <Route path="/settings/categories" component={Categories} />
      <Route path="/settings/categories/:id" component={Category} />
    </Route>
    <Route path="/error" component={Error} />
  </Route>
)
