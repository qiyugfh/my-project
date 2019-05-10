// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import first from './components/first.vue'
import second from './components/second.vue'
import father from './components/father.vue'



Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/first',
    component: first
  },
  {
    path: '/second',
    component: second
  },
  {
    path: '/father',
    component: father
  }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
// 或
// const app = new Vue({
//   router: router,
//   render: h => h(App)
// }).$mount('#app')
