<template>
    <my-page title="计算任意位数 π 值" :page="page">
        <div>
            <ui-text-field v-model.number="number" type="number" label="PI 的小数位数" />
            <br>
            <ui-raised-button primary label="计算" @click="calculator" />
        </div>
        <div class="result">
            {{ text }}
        </div>
    </my-page>
</template>

<script>
    const generatePi = require('../util/pi')

    export default {
        data () {
            return {
                number: 1024,
                text: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
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
                        text: '请输入小数位数'
                    })
                }
                this.text = ''
                let start = new Date().getTime()
                this.text = generatePi.get(this.number)
                console.log((new Date().getTime() - start) / 1000)
            }
        }
    }
</script>

<style scoped>
.result {
    margin-top: 16px;
    width: 600px;
    max-width: 100%;
    word-wrap: break-word;
}
</style>
