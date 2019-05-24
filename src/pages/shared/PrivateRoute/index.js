import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'

// import { ComponentExt } from '@utils/reactExt'
// import { getCookie } from '@utils/index'
// import { COOKIE_KEYS } from '@constants/index'




class PrivateRoute extends React.Component {
    gotoLogin = () => {
        const { routerStore } = this.props
        routerStore.history.replace('/login')
    }

    checkLocalUserInfo = () => {
        // const token = getCookie(COOKIE_KEYS.TOKEN)
        // if (!token) {
        //     return this.gotoLogin()
        // }
        // const { userInfo, initUserInfo } = this.props
        // if (!userInfo) {
        //     try {
        //         const userInfoByInit = initUserInfo()
        //         if (userInfoByInit.token !== token) {
        //             throw new Error('cookie 上储存的token与localStorage 上储存的token不一致!')
        //         }
        //     } catch (err) {
        //         console.warn(err)
        //         this.gotoLogin()
        //     }
        // }
    }

    componentDidMount() {
        // this.checkLocalUserInfo()
    }

    render() {
        const { component: Component, ...rest } = this.props
        return <Route {...rest} render={props => <Component {...props} {...rest} />} />
    }
}

export default PrivateRoute
