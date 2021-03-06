import Home from '@/components/home/index'
import HelloWorld from '@/components/HelloWorld'
import Lodash from '@/components/lodash/index'
import Jquery from '@/components/jquery/index'
import Style from '@/components/style/index'
import Less from '@/components/less/index'
import ElementUi from '@/components/elementUi/index'
import VuexIncrease from '@/components/vuex/increase'
import VuexDecrease from '@/components/vuex/decrease'
import Component from '@/components/component/index'
import Http from '@/components/http/index'
import MaxLength from '@/components/maxLength/index'
import VModel from '@/components/vModel/index'
import Sentry from '@/components/sentry/index'

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
    path: '/less',
    name: 'less',
    component: Less
  },
  {
    path: '/elementUi',
    name: 'elementUi',
    component: ElementUi
  },
  {
    path: '/vuex/increase',
    name: 'vuexIncrease',
    component: VuexIncrease
  },
  {
    path: '/vuex/decrease',
    name: 'vuexDecrease',
    component: VuexDecrease
  },
  {
    path: '/component',
    name: 'component',
    component: Component
  },
  {
    path: '/http',
    name: 'http',
    component: Http
  },
  {
    path: '/maxLength',
    name: 'maxLength',
    component: MaxLength
  },
  {
    path: '/vModel',
    name: 'vModel',
    component: VModel
  },
  {
    path: '/sentry',
    name: 'sentry',
    component: Sentry
  }
]
