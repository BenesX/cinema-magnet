<template lang="html">
    <div class="m-head">
        <div class="m-title">
            Movie Theater
        </div>
        <div class="m-nav">
            <ul>
                <li 
                  v-for="item in movieTypeList" 
                  :key="item.type"
                  :class="movieType === item.type && 'active'"
                  @click="setMovieType(item.type)"
                >
                    <a>{{ item.desc }}</a>
                </li>
            </ul>   
        </div>
    </div>
</template>

<script>
import { MOVIE_TYPE_LIST } from '@/config/config.site';

export default {
    name: 'Header',
    props: ['movieType'],
    data () {
        return {
            movieTypeList: MOVIE_TYPE_LIST,
        }
    },
    created () {
        this.setMovieType(this.movieTypeList[0].type)
    },
    methods: {
        setMovieType (type) {
            this.$emit('switchMovieType', { movieType: type })
        }
    }
}
</script>

<style lang="less">
.m-head {
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-size: 16px;
    .m-title {
        flex: 2;
    }
}
.m-nav {
    display: flex;
    flex: 2;
    position: relative;
}
.m-nav ul {
    flex: 1;
    display: flex;
    list-style: none;
    li {
        flex: 1;
        text-align: center;
        a {
            cursor: pointer;
        }
        &.active {
            font-weight: bold;
        }
    }
}

@media screen and (max-width: 680px) {
    .m-title {
        display: none;
    }
    .m-nav {
        ul {
            padding: 0;
        }
    }
}
</style>
