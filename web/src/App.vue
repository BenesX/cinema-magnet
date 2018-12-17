<template>
    <div id="app">
        <div class="loading-con">
            <LoadingVue v-show="!isLoadComp"/>
        </div>
        <div class="m-con">
            <transition name="fade">
                <div v-show="isShowing" class="m-con-bg" :style="{backgroundImage: `url(${bgImg})`}"></div>
            </transition>
            <Header 
              class="m-con-head"
              :movieType="currMovieType"
              @switchMovieType="reqMovieList"
              v-show="!isShowing"
            />
            <div 
              class="m-close-btn" 
              @click="close"
              v-if="isShowing"
            >X</div>
            <div class="m-content">
                <div class="m-content-title" :class="isShowing && 'm-content-title-active'">
                    <h1>Best</h1>
                    <h1>Moive</h1>
                </div>
                <div class="m-content-list">
                    <movie-list 
                      @showInfo="showInfo"
                      @reachRigth="reqMovieList"
                      :isShowInfo="isShowing" 
                      :movie-list="currMovieList"
                    />
                </div>
                <movie-info 
                  :isShow="isShowing" 
                  :movie-info="movieInfo" 
                  class="m-con-info"
                />
            </div>
        </div> 
    </div>
</template>

<script>
import Header from '@/components/Header-Comp'
import MovieList from '@/components/Movie-List-Comp'
import MovieInfo from '@/components/movie-Info-Comp'
import LoadingVue from './components/Loading.vue';

export default {
    name: 'App',
    data () {
        return {
            currMovieList: [], // 电影列表
            movieInfo: {}, // 展示电影信息
            isShowing: false, // 是否展示电影信息模块
            currMovieType: '', // 当前展示电影类型
            bgImg: '', // 背景图片
            opa: 0, // 背景图片透明度
            isLoadComp: true // 是否在加载数据
        }
    },
    methods: {
        async reqMovieList (params = {}) {
            if(!this.isLoadComp) return
            this.isLoadComp = false
            const { movieType } = params;
            if (movieType) {
                this.currMovieType = movieType
                this.page = 0
                this.currMovieList = []
            }
            const res = await this.$api.IndexService.getMovieList(this.currMovieType, ++this.page)
            if (res.res) {
                this.currMovieList = this.currMovieList.concat(res.res)
            }
            this.isLoadComp = true
        },
        showInfo (item) {
            this.bgImg = item.movie_post
            this.movieInfo = item
            setTimeout(() => {
                this.isShowing = true
            }, 200)
        },
        close () {
            this.isShowing = false
        }
    },
    components: {
        Header,
        MovieList,
        MovieInfo,
        LoadingVue
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
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
        background-position: 50% center;
        z-index: 4;
    }
}
.m-close-btn {
    position: absolute;
    top: 16px;
    right: 30px;
    z-index: 5;
    font-weight: 800;
    font-size: 20px;
    cursor: pointer;
    transform: scaleY(.8);
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
        z-index: 3;
    }
}

.loading-con {
    position: absolute;
    top: 5px;
    right: 10px;
}
</style>
