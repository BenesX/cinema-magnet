/**
 * 挂载全局组件
 */
import VueLazyComp from '@/components/Vue-Lazy-Comp.vue'

const componentInstall = (Vue, options) => {
    Vue.component(VueLazyComp.name, VueLazyComp)
}

export { componentInstall }
