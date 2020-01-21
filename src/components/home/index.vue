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
        <router-link to="/style">style作用域</router-link>
      </li>
      <li>
        <router-link to="/less">less</router-link>
      </li>
      <li>
        <router-link to="/elementUi">饿了么 VUE 组件库按需加载</router-link>
      </li>
      <li>
        <router-link to="/vuex/increase">Vuex</router-link>
      </li>
      <li>
        <router-link to="/component">自定义公共组件</router-link>
      </li>
      <li>
        <router-link to="/http">后端接口调用</router-link>
      </li>
      <li>
        <router-link to="/maxLength">支持中文(中文算2个字符)的max length</router-link>
      </li>
      <li>
        <router-link to="/vModel">v-model</router-link>
      </li>
    </ul>
  </div>
</template>
