import './index.scss'
import 'antd/dist/antd.css';

import React from "react";
import * as ReactDOM from "react-dom";
import { Router } from 'react-router-dom'
import AppRouter from '@shared/App'
// import { useStrict } from 'mobx'
import { syncHistoryWithStore } from 'mobx-react-router'
import * as stores from './store'
import { Provider } from 'mobx-react';

const createHashHistory  = require("history").createHashHistory;

// useStrict(true)

console.log('stores',{...stores});
const hashHistory = createHashHistory()

const render = Component => {
  ReactDOM.render(
    <Provider {...stores}>
      <Router history={hashHistory}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

render(AppRouter)