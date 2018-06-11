import Vue from 'vue'
import {
  Button,
  Message,
  MessageBox,
  Notification
} from 'element-ui'

// 按需引入：http://element.eleme.io/#/zh-CN/component/quickstart
Vue.use(Button)

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
