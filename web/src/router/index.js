import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            component: resolve => require(['@/pages/index/Index.vue'], resolve)
        },
        {
            path: '/label',
            component: resolve => require(['@/pages/label/Label.vue'], resolve)
        }
    ]
})
