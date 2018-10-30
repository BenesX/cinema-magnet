export default {
    props: {
        visable: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            isLockBody: false,
            zIndex: 10000,
            elBody: null
        }
    },
    model: {
        prop: 'visable',
        event: 'toggelShow'
    },
    methods: {
        doOpen () {
            if (this.isLockBody) {
                this.elBody = document.getElementsByTagName('body')[0]
                this.elBody.style.overflow = 'hidden'
            }
            this.visable = true
        },
        doClose () {
            if (this.elBody) {
                this.elBody.style.overflow = 'auto'
            }
            this.$emit('toggelShow', false)
        }
    }
}
