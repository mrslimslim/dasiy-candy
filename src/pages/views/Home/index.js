import * as React from 'react'
import { Layout } from 'antd'
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import menu, { asynchronousComponents } from "./menu"
import { hot } from 'react-hot-loader'
import Sider from './Sider'
import Header from './Header'
import { observer, inject } from 'mobx-react'
 

function Home(props) {
    return (
        <Layout>
            <Sider />
            <Layout>
                <Header />
                <Layout.Content className='content'>
                    <Router>
                        <Switch>
                            {menu.map(m => {
                                if (!m.path) {
                                    return null
                                }
                                return (
                                    <Route
                                        key={m.id}
                                        exact={m.exact}
                                        path={m.path}
                                        component={m.component ? asynchronousComponents[m.component] : null}
                                    />
                                )
                            })}
                            <Route component={Error} />                      
                        </Switch>
                    </Router>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default inject('playGroundStore')(observer(Home));



