<template>
    <my-page title="搜索" :page="page">
        <div class="common-container container">
            <div>
                <ui-text-field v-model="number" type="number" label="数字" hintText="输入一串数字" />
            </div>
            <div class="btns">
                <ui-raised-button primary label="查找" @click="calculator" />
            </div>
            <div class="ui-loading" v-if="loading">
                <ui-circular-progress :size="24"/>
            </div>
            <ui-article class="result" v-if="result && result !== -1">
                <p> “{{ result.content }}” 在圆周率小数位数的第 {{ result.index }} 位。</p>
                <p>π = 3.<span v-if="result.index > 11">……</span>{{ result.prev }}<strong class="strong">{{ result.content }}</strong>{{ result.next }}……</p>
            </ui-article>
            <p v-if="result === -1">在圆周率前 1 亿位中找不到这串数字</p>
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
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/help'
                        // }
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
                        text: '请输入一串数字'
                    })
                    return
                }
                if (!/^\d+$/.test(this.number)) {
                    this.$message({
                        type: 'danger',
                        text: '只能输入数字'
                    })
                    return
                }
                if (this.number.length > 500) {
                    this.$message({
                        type: 'danger',
                        text: '长度不能超过 500'
                    })
                    return
                }
                this.loading = true
                this.result = null
                this.searchNumber = this.number
                this.$http.get('/pi?keyword=' + this.number).then(
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
