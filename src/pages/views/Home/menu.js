import Loadable from 'react-loadable'
import PageLoading from '@components/PageLoading'

const loadComponent = (loader) =>
    Loadable({
        loader,
        loading: PageLoading
    })

export const asynchronousComponents = {
    PlayGround: loadComponent(() => import(/* webpackChunkName: "playground" */ '@views/PlayGround'))
}

export const menu = [
    {
        id: 1,
        // path: '/',
        title: 'PlayGround',
        icon: 'dashboard',
        // component: 'PlayGround',
        // exact: true
    },{
        pid:1,
        id:11,
        path: '/',
        title: 'market',
        component: 'PlayGround',
        exact: true
    }
]

export default menu
