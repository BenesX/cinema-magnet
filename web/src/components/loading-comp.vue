<template lang="html">
    <transition name="dialog-fade">
        <div class="v-wegene-wrapper" v-show="visable">
            <div class="v-wegene-loading">
                <div class="v-wegene-loading-box" :style="{backgroundPosition: '0px '  + positionY + 'px'}"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import Popup from '@/components/modal/popup'

export default {
    name: 'WegeneLoading',
    mixins: [Popup],
    created () {
    },
    data () {
        return {
            counter: 0,
            rotateTimer: null,
            rotateCount: 0,
            positionY: 0
        }
    },
    methods: {
        loading () {
            this.counter++
            this.doOpen()
            !this.rotateTimer && this._startAnimate()
        },
        complete () {
            this.counter > 0 ? this.counter-- : ''
            if (this.counter === 0) {
                this.doClose()
                this._endAnimate()
            }
        },
        _startAnimate () {
            this.rotateTimer = setInterval(() => {
                this.rotateCount++
                this.positionY = this.rotateCount * -70
                if (this.rotateCount === 22) {
                    this.rotateCount = 0
                }
            }, 100)
        },
        _endAnimate () {
            clearInterval(this.rotateTimer)
            this.rotateTimer = null
        }
    }
}
</script>

<style lang="less">
.v-wegene-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, .4);
    .v-wegene-loading {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 70px;
        height: 70px;
        margin: 0 0 0 -35px;
        z-index: 10001;
        background: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        .v-wegene-loading-box {
            width: 70px;
            height: 70px;
            background: url('../assets/img/loading.png') no-repeat #fff;
            background-size: 70px;
            border-radius: 50%;
        }
    }
}

.dialog-fade-enter-active {
    transition: all .3s ease;
}
.dialog-fade-leave-active {
    transition: all .3s ease;
}
.dialog-fade-enter, .dialog-fade-leave-to {
    opacity: 0;
}
</style>
