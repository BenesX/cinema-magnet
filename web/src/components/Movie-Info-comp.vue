<template>
    <div class="m-info" :class="addAni && 'm-info-active'" v-show="!hide">
        <div class="m-info-head" :class="addAni && 'm-info-head-active'">
            <!-- <h1 v-html="movieInfo.movie_title"></h1> -->
        </div>
        <div class="m-info-content">
            <p>magnet: <input type="text" v-model="movieInfo.movie_magnet"><a>复制</a></p>
            <p v-if="movieInfo.movie_ftp">ftp: <input type="text" v-model="movieInfo.movie_ftp"><a>复制</a></p>
            <div class="m-info-desc" v-html="movieInfo.movie_desc"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie-info',
    props: ['isShow', 'movieInfo'],
    data () {
        return {
            addAni: false,
            hide: true
        }
    },
    watch: {
        isShow () {
            if (this.isShow) {
                this.hide = false;
                setTimeout(() => {
                    this.addAni = true
                }, 100)
            } else {
                this.addAni = false
                setTimeout(() => {
                    this.hide = true
                }, 100);
            }
        }
    }
}
</script>

<style lang="less">
.m-info {
    width: 35vw;
    height: 65vh;
    padding: 15px;
    border-radius: 10px;
    background: rgba(255, 255, 255, .5);
    overflow-y: scroll;
    transition: all .2s;
    transform: translateY(60px);
    opacity: 0;
    &.m-info-active {
        transform: translateY(40px);
        opacity: 1;
    }
    .m-info-head {
        transform: translateY(-50px);
        transition: all .2s;
        opacity: 0;
        &.m-info-head-active {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    .m-info-content {
        margin-top: 20px;
        img {
            width: 100%;
        }
    }
    .m-info-desc {
        margin-top: 15px;
        font-size: 14px;
    }
    p {
        word-break:normal;
        word-wrap:break-word;
        display: -webkit-box;    
        -webkit-box-orient: vertical;    
        -webkit-line-clamp: 2;    
        overflow: hidden; 
    }
    input {
        width: 20vw;
        height: 30px;
        line-height: 30px;
        border: none;
        background: none;
        margin-right: 20px;
        font-size: 14px;
    }
    a {
        cursor: pointer;
        font-size: 14px;
    }
    &::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 3px;
        background: #2c3e50;
    }
    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
        border-radius: 3px;
        background: none;
    }

}
</style>
