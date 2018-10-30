<template lang="html">
    <transition name="dialog-top">
        <div class="popup-wrapper" v-if="visable">
                <div class="popup" v-if="visable">
                    <div class="popup-dialog">
                        <div class="popup-header">
                            <slot name="header" />
                        </div>
                        <div class="popup-content">
                            1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
                            1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
                            1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
                            <slot name="content" />
                        </div>
                        <div class="Popup-footer">
                            <slot name="footer" />
                        </div>
                    </div>
                </div>
            <a class="icon icon-delete" @click="doClose"></a>
            <div class="popup-masker" v-if="visable"></div>
        </div>
    </transition>
</template>

<script>
import Popup from '@/components/modal/popup'

export default {
    mixins: [Popup],
    props: {
    },
    data () {
        return {
        }
    },
    created () {
        this.isLockBody = true;
    },
    mounted () {
    },
    methods: {
    }
}
</script>

<style lang="less" scoped="">
.popup-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
.popup-masker {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
}
.icon {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    opacity: 1;
    z-index: 10000;
}
.popup {
    position: relative;
    z-index: 10000;
    margin: 50px 20px 20px;
    width: auto;
    min-height: 200px;
    border-radius: 4px;
    background: #fff;
    .popup-dialog {
        padding: 20px;
        background-clip: padding-box;
        outline: 0;

    }
    .popup-header {
        margin-bottom: 20px;
        padding: 0 0 15px;
        position: relative;
    }
    .popup-content {
        max-height: 300px;
        overflow: scroll;
        position: relative;
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
.slide-top-enter-active {
    transition: all .3s ease;
}
.slide-top-leave-active {
    transition: all .3s ease;
}
.slide-top-enter, .slide-top-leave-to {
    top: 100px;
}
</style>
