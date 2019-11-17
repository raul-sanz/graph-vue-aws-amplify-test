import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Amplify, * as AmplifyModules from "aws-amplify"
import { AmplifyPlugin } from 'aws-amplify-vue'

let webSocket = new WebSocket('wss://subscriptions.graph.cool/v1/cjoxk8yfu9gzi01321dnvtsfq');

Amplify.configure({
  API: {
    graphql_endpoint: 'https://api.graph.cool/simple/v1/cjoxk8yfu9gzi01321dnvtsfq'
  }
})

Vue.config.productionTip = false

Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
