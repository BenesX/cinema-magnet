/**
 * 全局自定义指令
 */
const SEAT_DIR = 'seat'

const directiveInstall = (Vue, options) => {
    Vue.directive(SEAT_DIR, function (el, binding) {
        el.style.width = '100%'
        el.style.paddingBottom = `${binding.expression}%`
        el.style.position = 'relative'
        el.style.backgroundColor = '#E3E9EE'
        const img = el.getElementsByTagName('img')[0]
        img.style.position = 'absolute'
        img.style.top = '0'
    })
}

export { directiveInstall }
