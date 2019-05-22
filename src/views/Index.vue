<template>
    <my-page title="查找 π 的第几位" :page="page">
        <div class="common-container container">
            <div>
                <ui-text-field v-model.number="number" type="number" label="位数" hintText="1 到 1 亿" />
            </div>
            <div class="btns">
                <ui-raised-button primary label="查找" @click="calculator" />
            </div>
            <div class="ui-loading" v-if="loading">
                <ui-circular-progress :size="24"/>
            </div>
            <ui-article class="result" v-if="result && result !== -1">
                <p> 圆周率小数位数的第 {{ result.index }} 位是 “{{ result.content }}”。</p>
                <p>π = 3.<span v-if="result.index > 11">……</span>{{ result.prev }}<strong class="strong">{{ result.content }}</strong>{{ result.next }}……</p>
            </ui-article>
            <p v-if="result === -1">系统出错</p>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                number: null,
                searchNumber: '',
                result: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/b9484c006aa211e9b4d1bd0d5567c0e9',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted() {
            // this.calculator()
        },
        methods: {
            calculator() {
                if (!this.number) {
                    this.$message({
                        type: 'danger',
                        text: '请输入位数'
                    })
                    return
                }
                if (this.number <= 0) {
                    this.$message({
                        type: 'danger',
                        text: '位数必须大于 0'
                    })
                    return
                }
                if (this.number > 100000000) {
                    this.$message({
                        type: 'danger',
                        text: '位数必须小于 1 亿'
                    })
                    return
                }
                this.loading = true
                this.result = null
                this.searchNumber = this.number
                this.$http.get('/pi?index=' + this.number).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        if (!data) {
                            this.result = -1
                        } else {
                            this.result = data
                        }
                        this.loading = false
                    },
                    response => {
                        console.log(response)
                        this.loading = false
                    })
            }
        }
    }
</script>

<style scoped>
.btns {
    margin-top: 16px;
    margin-bottom: 16px;
}
.result {
    margin-top: 16px;
    width: 600px;
    max-width: 100%;
    word-wrap: break-word;
}
.strong {
    color: #f00;
}
</style>
