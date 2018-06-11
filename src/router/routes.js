import Home from '@/components/home/index'
import HelloWorld from '@/components/HelloWorld'
import Lodash from '@/components/lodash/index'
import Jquery from '@/components/jquery/index'
import Style from '@/components/style/index'
import ElementUi from '@/components/elementUi/index'

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
      }, 'async-route-using-require-ensure')
    })
  },
  {
    path: '/asyncRouteWithBundleName',
    name: 'asyncRouteWithBundleName',
    component: () => import(/* webpackChunkName: 'async-route-using-import' */ '@/components/asyncRoute/withBundleName')
  },
  {
    path: '/asyncRouteWithoutBundleName',
    name: 'asyncRouteWithoutBundleName',
    component: () => import('@/components/asyncRoute/withoutBundleName')
  },
  {
    path: '/asyncAwait',
    name: 'asyncAwait',
    component: () => import('@/components/asyncAwait/index')
  },
  {
    path: '/jquery',
    name: 'jquery',
    component: Jquery
  },
  {
    path: '/style',
    name: 'style',
    component: Style
  },
  {
    path: '/elementUi',
    name: 'elementUi',
    component: ElementUi
  }
]
