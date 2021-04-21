import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// fontawesome

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSave,
  faCogs,
  faHome,
  faWifi,
  faFilePdf,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSave, faCogs, faHome, faWifi, faFilePdf, faAngleDoubleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// base component global registration

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './components/ui',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

// base component global registration finish

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
