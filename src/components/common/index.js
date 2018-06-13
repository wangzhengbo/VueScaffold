import _ from 'lodash'

const NAME_PREFIX = 'Ui'
const COMPONENT_PREFIX = 'ui-'

export default Vue => {
  // 根据组件name属性自动注册全局的组件，没有设置name属性时会忽略此组件
  const components = require.context('.', true, /\.vue$/)
  const componentNames = {}
  components.keys().forEach(fileName => {
    let componentConfig = components(fileName)
    componentConfig = componentConfig.default || componentConfig
    let name = componentConfig.name
    const file = componentConfig.__file || ''
    if (name) {
      if (name.startsWith(NAME_PREFIX)) {
        name = name.substring(NAME_PREFIX.length)
      }
      if (!componentNames[name]) {
        componentNames[name] = file
        const componentName = COMPONENT_PREFIX + _.kebabCase(name)
        console.log(`Register global component ${componentName}`)
        Vue.component(componentName, componentConfig)
      } else {
        console.warn(
          `Component name '${name}' for file '${file}' is already used by another file '${componentNames[name]}'.`
        )
      }
    }
  })
}
