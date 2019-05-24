import Loadable from 'react-loadable'

import PageLoading from '@components/PageLoading'

const loadComponent = (loader) =>
    Loadable({
        loader,
        loading: PageLoading
    })

export const asynchronousComponents = {
    Dashboard: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@views/Dashboard'))
}

export const menu = [
    {
        id: 1,
        path: '/',
        title: 'Dashboard',
        icon: 'dashboard',
        component: 'Dashboard',
        exact: true
    }
]

export default menu
