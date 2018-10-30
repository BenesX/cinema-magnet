<template>
    <div class="m-info" :class="addAni && 'm-info-active'" v-show="!hide">
        <div class="m-info-head" :class="addAni && 'm-info-head-active'">
            <h1>狼的孩子雨和雪</h1>
        </div>
        <div class="m-info-content">
            <p>magnet: <input type="text" v-model="magnet"><a>复制</a></p>
            <p>ftp: <input type="text" v-model="ftp"><a>复制</a></p>
            <div class="m-info-desc">{{ desc }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie-info',
    props: ['isShow'],
    data () {
        return {
            magnet: 'magnet:?xt=urn:btih:22e2114adf45b179c6223e967408a03b6fd6df47&dn=%E9%98%B3%E5%85%89%E7%94%B5%E5%BD%B1www.ygdy8.com.%E8%B6%85%E4%BA%BA%E6%80%BB%E5%8A%A8%E5%91%982.HD.720p.%E4%B8%AD%E8%8B%B1%E5%8F%8C%E5%AD%97%E5%B9%95.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fthetracker.org%3a80%2fannounce&tr=http%3a%2f%2fretracker.telecom.by%2fannounce',
            ftp: 'ftp://ygdy8:ygdy8@yg45.dydytt.net:4097/阳光电影www.ygdy8.com.超人总动员2.HD.720p.中英双字幕.mkv',
            desc: '超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。 超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。 超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。 ',
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
