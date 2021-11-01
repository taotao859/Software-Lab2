<template>
    <el-card class="box-card" style="align-self: center;align-items: center;width: 100%;">
        <!-- <el-button :plain="true" @click="error">错误</el-button> -->
        <el-card class="calculator" style="width: 50%;margin-left: 25%;">
            <div class="results">
                <input class="input" v-model="current" />
            </div>
            <div class="mode">
                <!-- <el-button type="primary" class="button" @click="press">7</el-button> -->
                <button class="button" @click="press">7</button>
                <button class="button" @click="press">8</button>
                <button class="button" @click="press">9</button>
                <button class="button" @click="press">*</button>
                <button class="button" @click="press">&#60;=</button>
                <button class="button" @click="press">C</button>
                <button class="button" @click="press">4</button>
                <button class="button" @click="press($event)">5</button>
                <button class="button" @click="press">6</button>
                <button class="button" @click="press">/</button>
                <button class="button" @click="press">(</button>
                <button class="button" @click="press">)</button>
                <button class="button" @click="press">1</button>
                <button class="button" @click="press">2</button>
                <button class="button" @click="press">3</button>
                <button class="button" @click="press">-</button>
                <button class="button" @click="press">x ²</button>
                <button class="button" @click="press">±</button>
                <button class="button" @click="press">0</button>
                <button class="button" @click="press">.</button>
                <button class="button" @click="press">%</button>
                <button class="button" @click="press">+</button>
                <button class="button equal-sign" @click="press">=</button>
            </div>
        </el-card>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                msg: "标准计算器",
                current: '',
            };
        },
        methods: {
            press(event) {
                var me = this;
                var key = event.target.textContent;

                if (key != '=' && key != 'C' && key != '*' && key != '/' && key != '√' && key != "x ²" && key != "%" && key != "<=" && key != "±" && key != "sin" && key != "cos" && key != "tan" && key != "log" && key != "ln" && key != "x^" && key != "x !" && key != "π" && key != "e" && key != "rad" && key != "∘") {
                    me.current += key;
                } else if (key === '=') {
                    if (me.current.indexOf('^') > -1) {
                        var base = me.current.slice(0, me.current.indexOf('^'));
                        var exponent = me.current.slice(me.current.indexOf('^') + 1);
                        me.current = eval('Math.pow(' + base + ',' + exponent + ')');
                    } else {
                        // '1+45+Math.pow(89)'
                        me.current = eval(me.current);
                    }
                } else if (key === 'C') {
                    me.current = '';
                } else if (key === '*') {
                    me.current += '*';
                } else if (key === '/') {

                    me.current += '/';
                } else if (key === '+') {

                    me.current += '+';
                } else if (key === '-') {

                    me.current += '-';
                } else if (key === '±') {
                    if (me.current.charAt(0) === '-') {
                        me.current = me.current.slice(1);
                    } else {
                        me.current = '-' + me.current;
                    }
                } else if (key === '<=') {
                    me.current = me.current.substring(0, me.current.length - 1);
                }
            },
            error() {
                this.$message({
                    showClose: true,
                    message: '输入语法存在错误哦',
                    type: 'error'
                });
            }
        },
        watch: {},
        created() { }
    };
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
</style> -->