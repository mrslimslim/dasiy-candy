import React from "react";
import * as ReactDOM from "react-dom";
const createHashHistory  = require("history").createHashHistory;
import { Router } from 'react-router-dom'
import AppRouter from '@shared/App'

const hashHistory = createHashHistory()

const render = Component => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Component />
    </Router>,
    document.getElementById('root')
  )
}

render(AppRouter)