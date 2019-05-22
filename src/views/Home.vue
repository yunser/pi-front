<template>
    <my-page title="圆周率">
        <div class="common-container container">
            <div class="tool-list">
                <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                    v-for="app in apps">
                    <router-link class="link" :to="app.to">
                        <img :src="app.icon" class="img">
                        <div class="info">
                            <h3 class="text">{{ app.name }}</h3>
                            <div class="desc">{{ app.desc }}</div>
                        </div>
                        <i class="icon icon-heart"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                apps: [
                    {
                        name: '计算任意位数 π 值',
                        desc: '',
                        icon: '/static/img/pi.svg',
                        to: '/calculator'
                    },
                    {
                        name: '记住圆周率训练',
                        desc: '',
                        icon: '/static/img/math_pi.svg',
                        to: '/pi'
                    },
                    {
                        name: '在 π 中搜索',
                        desc: '',
                        icon: '/static/img/pi.svg',
                        to: '/search'
                    },
                    {
                        name: '查找 π 的第几位',
                        desc: '',
                        icon: '/static/img/pi.svg',
                        to: '/index'
                    }
                ]
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/var';

.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>
