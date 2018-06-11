import Home from '@/components/home/index'
import HelloWorld from '@/components/HelloWorld'
import Lodash from '@/components/lodash/index'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/lodash',
    name: 'lodash',
    component: Lodash
  },
  {
    path: '/asyncRouteUsingRequireEnsure',
    name: 'asyncRouteUsingRequireEnsure',
    component: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('@/components/asyncRoute/index'))
      }, 'asyncRoute')
    })
  },
  {
    path: '/asyncRouteWithBundleName',
    name: 'asyncRouteWithBundleName',
    component: () => import(/* webpackChunkName: 'async-route' */ '@/components/asyncRoute/withBundleName')
  },
  {
    path: '/asyncRouteWithoutBundleName',
    name: 'asyncRouteWithoutBundleName',
    component: () => import('@/components/asyncRoute/withoutBundleName')
  }
]
