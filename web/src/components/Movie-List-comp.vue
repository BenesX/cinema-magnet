<template>
    <div class="m-list">
        <div style="width: 100%;overflow-x:scroll;flex: 1;display: flex;padding: 40px 0;">
            <div v-for="(item, index) in swiperItem" :key="item.text">
                <div
                  :class="[currentIndex === index && 'm-movie-item-active', currentIndex != '' && currentIndex < index && 'slideToRight', currentIndex != '' && currentIndex > index && 'slideToLeft']" 
                  class="m-movie-item" :style="{background: `url(${item.imgUrl})`, backgroundSize: 'cover'}" 
                  @click="showInfo(item, index)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import horse2 from '../assets/img/horse2.jpeg';
import horse from '../assets/img/horse.jpg';

export default {
    name: "movie-list",
    props: ['isShowInfo'],
    data () {
        return {
            currentIndex: '',
            swiperItem: [
                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },
                {
                    imgUrl: horse,
                    text: '狼的孩子雨和雪'
                },
                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },
                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },
                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },

                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },
                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },
                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },
                {
                    imgUrl: horse2,
                    text: '狼的孩子雨和雪'
                },
                
            ]
        }
    },
    components: {
        swiper, swiperSlide
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
