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
  }
]
