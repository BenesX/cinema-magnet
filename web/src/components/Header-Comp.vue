<template lang="html">
    <div class="m-head">
        <div class="m-title">
            Movie Theater
        </div>
        <div class="m-nav">
            <ul>
                <li class="active">
                    <a href="">最新电影</a>
                </li>
                <li>
                    <a href="">日韩</a>
                </li>
                <li>
                    <a href="">港片</a>
                </li>
                <li>
                    <a href="">动画</a>
                </li>
            </ul>
            <div class="m-nav-close" @click="close">X</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    created () {

    },
    methods: {
        close () {
            this.$emit('close')
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
    .m-nav-close {
        position: absolute;
        top: 2px;
        right: 10px;
        font-weight: 800;
        font-size: 20px;
        cursor: pointer;
    }
}
.m-nav ul {
    flex: 1;
    display: flex;
    list-style: none;
    li {
        flex: 1;
        text-align: center;
        &.active {
            font-weight: bold;
        }
    }
}
</style>
