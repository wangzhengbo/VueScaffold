<template>
  <div>
    <h1>首页</h1>
    <ul>
      <li>
        <router-link to="/hello">Hello</router-link>
      </li>
      <li>
        <router-link to="/lodash">Lodash工具库按需加载函数</router-link>
      </li>
      <li>
        <router-link to="/asyncRouteUsingRequireEnsure">异步路由（使用require.ensure）</router-link>
      </li>
      <li>
        <router-link to="/asyncRouteWithBundleName">异步路由（使用import, 指定了打包出来的chunk的名称）</router-link>
      </li>
      <li>
        <router-link to="/asyncRouteWithoutBundleName">异步路由（使用import, 未指定打包出来的chunk的名称）</router-link>
      </li>
      <li>
        <router-link to="/asyncAwait">aysnc / await</router-link>
      </li>
      <li>
        <router-link to="/jquery">aysnc fetch jquery</router-link>
      </li>
      <li>
        <router-link to="/style">style</router-link>
      </li>
      <li>
        <router-link to="/elementUi">饿了么 VUE 组件库按需加载</router-link>
      </li>
    </ul>
  </div>
</template>
