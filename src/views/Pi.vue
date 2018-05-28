<template>
    <my-page title="记住圆周率训练">
        <div class="input">{{ input }}<span class="help">?</span></div>
        <div class="line">
            <div class="key" @click="select('1')" :style="keyStyle('1')">1</div>
            <div class="key" @click="select('2')" :style="keyStyle('2')">2</div>
            <div class="key" @click="select('3')" :style="keyStyle('3')">3</div>
        </div>
        <div class="line">
            <div class="key" @click="select('4')" :style="keyStyle('4')">4</div>
            <div class="key" @click="select('5')" :style="keyStyle('5')">5</div>
            <div class="key" @click="select('6')" :style="keyStyle('6')">6</div>
        </div>
        <div class="line">
            <div class="key" @click="select('7')" :style="keyStyle('7')">7</div>
            <div class="key" @click="select('8')" :style="keyStyle('8')">8</div>
            <div class="key" @click="select('9')" :style="keyStyle('9')">9</div>
        </div>
        <div class="line">
            <div class="key"></div>
            <div class="key" @click="select('0')" :style="keyStyle('0')">0</div>
            <div class="key"></div>
        </div>
        <div class="score">得分：{{ score }}</div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                pi: '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989',
                input: 'π=3.',
                index: 0,
                score: 0,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
                    ]
                },
                error: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
            },
            keyStyle(num) {
                if (this.error) {
                    if (num === this.error.input) {
                        return {
                            color: '#f00'
                        }
                    }
                    if (num === this.error.right) {
                        return {
                            color: '#1cec0e'
                        }
                    }
                    return {}
                }
                if (this.index > 4) {
                    return {}
                }
                if (num === this.pi.charAt(this.index)) {
                    return {
                        color: '#1cec0e'
                    }
                }
                return {}
            },
            reset() {
                this.input = 'π=3.'
                this.index = 0
                this.score = 0
            },
            select(num) {
                if (this.error) {
                    this.error = null
                    this.reset()
                    return
                }
                if (num !== this.pi.charAt(this.index)) {
                    this.error = {
                        input: num,
                        right: this.pi.charAt(this.index)
                    }
                    console.log('答错了', this.error)
                    return
                }
                this.score++
                this.input += num
                const MAX_LENGTH = 20
                if (this.input.length > MAX_LENGTH) {
                    this.input = this.input.substring(this.input.length - MAX_LENGTH)
                }
                this.index++
                if (this.index === this.pi.length) {
                    alert('成功')
                    this.reset()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input {
        font-size: 30px;
        margin-bottom: 16px;
    }
    .line {
        max-width: 480px;
        overflow: hidden;
        .key {
            float: left;
            width: 33.33%;
            height: 80px;
            text-align: center;
            line-height: 80px;
            font-size: 30px;
            border: 1px solid #999;
            cursor: pointer;
        }
    }
    .help {
        color: #ccc;
    }
    .score {
        margin-top: 16px;
    }
</style>
