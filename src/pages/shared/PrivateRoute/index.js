import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'


class PrivateRoute extends React.Component {
    gotoLogin = () => {
        const { routerStore } = this.props
        routerStore.history.replace('/login')
    }

    checkLocalUserInfo = () => {
      
    }

    componentDidMount() {
    }

    render() {
        const { component: Component, ...rest } = this.props
        return <Route {...rest} render={props => <Component {...props} {...rest} />} />
    }
}

export default PrivateRoute
