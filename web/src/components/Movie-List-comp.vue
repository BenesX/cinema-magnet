<template>
    <div class="m-list">
        <div style="width: 100%;overflow-x:scroll;flex: 1;display: flex;padding: 40px 0;" @scroll="scroll">
            <div v-for="(item, index) in movieList" :key="item.movie_magnet + index">
                <div
                  :class="[currentIndex === index && 'm-movie-item-active', currentIndex != '' && currentIndex < index && 'slideToRight', currentIndex != '' && currentIndex > index && 'slideToLeft']" 
                  class="m-movie-item" :style="{background: `url(${item.movie_post})`, backgroundSize: 'cover'}" 
                  @click="showInfo(item, index)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { throttle } from '../utils';

export default {
    name: "movie-list",
    props: ['isShowInfo', 'movieList'],
    data () {
        return {
            currentIndex: ''
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    watch: {
        isShowInfo () {
            !this.isShowInfo && (this.currentIndex = '')
        }
    },
    methods: {
        scroll (e) {
            throttle (this.handleScroll, 500, e)
        },
        handleScroll (e) {
            const target = e.target
            const containerWidth = (this.movieList.length - 1) * 320
            console.log(target.scrollLeft, containerWidth)
            if (target.scrollLeft >= containerWidth) { 
                this.$emit('reachRigth')
            }
        },
        showInfo (item, index) {
            this.$emit('showInfo', item)
            this.scaleToHide(index)
        },
        scaleToHide (index) {
            this.currentIndex = index
        }
    }
    
}
</script>

<style lang="less">
.m-list {
    display: flex;
    .m-movie {
        display: flex;
    }
    .m-movie-item {
        width: 320px;
        height: 440px;
        flex-shrink: 0;
        margin-right: 30px;
        border-radius: 10px;
        position: relative;
        z-index: 999;
        cursor: pointer;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, .2);
        transition: all .2s ease-out;
        transform-origin: right center;
        &:hover {
            transform: translateY(-30px);
        }
        &.m-movie-item-active {
            transition-delay: .2s;
            transform: translateY(-30px) scale(2);
            opacity: 0;
        }
        &.slideToRight {
            transition-delay: .2s;
            transform: translateX(120px);
            opacity: 0;
        }
        &.slideToLeft {
            transition-delay: .2s;
            transform: translateX(-120px);
            opacity: 0;
        }
    }
}
</style>
