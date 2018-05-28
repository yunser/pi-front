<template>
    <my-page title="帮助" backable>
        <ui-article>
            输入需要计算 PI 的小数位，就可以计算出 PI 的数值，计算 1000 位可以秒出！
        </ui-article>
    </my-page>
</template>

<script>
    const generatePi = require('generate-pi')

    export default {
        data () {
            return {
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
            this.text = generatePi.get(100)
        }
    }
</script>

<style scoped>
</style>
