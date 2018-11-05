<template>
    <div id="app">
        <div class="m-con">
            <transition name="fade">
              <div v-show="isShowing" class="m-con-bg" :style="{backgroundImage: `url(${bgImg})`}"></div>
            </transition>
            <Header class="m-con-head" @close="close"/>
            <div class="m-content">
                <div class="m-content-title" :class="isShowing && 'm-content-title-active'">
                    <h1>Best</h1>
                    <h1>Moive</h1>
                </div>
                <div class="m-content-list">
                    <movie-list @showInfo="showInfo" :isShowInfo="isShowing" :movie-list="currMovieList"/>
                </div>
                <movie-info :isShow="isShowing" :movie-info="movieInfo" class="m-con-info"></movie-info>
            </div>
        </div> 
    </div>
</template>

<script>
import HorseImg from './assets/img/horse2.jpeg'
import RGBaster from './utils/rgb';
import { getBase64 } from './utils';
import Header from '@/components/Header-Comp'
import MovieList from '@/components/Movie-List-Comp'
import MovieInfo from '@/components/movie-Info-Comp'

export default {
    name: 'App',
    data () {
        return {
            horseImg: HorseImg,
            currMovieList: [],
            movieInfo: {},
            opa: 0,
            bgImg: '',
            isShowing: false,
            isShowContent: false,
            isImgBoxActive: false
        }
    },
    created () {
        this.reqMovieList()
    },
    methods: {
        async reqMovieList () {
            const res = await this.$api.IndexService.getMovieList('jpan', 2)
            if (res.res) {
                this.currMovieList = res.res
            }
        },
        t () {
            this.isImgBoxActive = true
        },
        q () {
            this.isImgBoxActive = false
        },
        showInfo (item) {
            this.bgImg = item.movie_post
            this.movieInfo = item
            RGBaster.colors(this.bgImg, {
                success: function(payload) {
                    // payload.dominant是主色，RGB形式表示
                    // payload.secondary是次色，RGB形式表示
                    // payload.palette是调色板，含多个主要颜色，数组
                    console.log(payload.dominant);
                    console.log(payload.secondary);
                    console.log(payload.palette);
                }
                });
            setTimeout(() => {
                this.isShowing = true
            }, 200)
        },
        close () {
            this.isShowing = false
        }
    },
    components: {
        Header, MovieList, MovieInfo
    }
}
</script>

<style lang="less">
* {
    margin: 0;
    paddding: 0;
}
a, a:visited, a:hover {
    color: #2c3e50;
    text-decoration: none;
}
body {
    background-color: #EDECEC;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.m-con {
    position: relative;
    top: 6vh;
    left: 3vw;
    width: 94vw;
    height: 88vh;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .01);
    overflow: hidden;
    .m-con-head {
        position: relative;
        z-index: 5;
    }
    .m-con-info {
        position: absolute;
        left: 15px;
        z-index: 6;
    }
    .m-con-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        z-index: 4;
    }
}
.m-content {
    display: flex;
    .m-content-title {
        font-size: 30px;
        padding-top: 40px;
        padding-left: 20px;
        padding-right: 80px;
        transition: all .1s;
        &.m-content-title-active {
            transform: translateY(-60px);
        }
    }
    .m-content-list {
        flex: 1;
        overflow: hidden;
        padding-right: 10px;
        position: relative;
        z-index: 3;
    }
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
