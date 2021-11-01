<template>
  <el-card
    class="box-card"
    style="align-self: center;align-items: center;width: 100%;"
  >
    <el-card class="calculator" style="width: 50%;margin-left: 25%;">
      <div class="header results">
        <input class="input" v-model="current" />
      </div>
      <div class="mode">
        <button class="button" @click="press">sin</button>
        <button class="button" @click="press">cos</button>
        <button class="button" @click="press">tan</button>
        <button class="button" @click="press">x^</button>
        <button class="button" @click="press">&#60;=</button>
        <button class="button" @click="press">C</button>
        <button class="button" @click="press">log</button>
        <button class="button" @click="press">ln</button>
        <button class="button" @click="press">e</button>
        <button class="button" @click="press">∘</button>
        <button class="button" @click="press">rad</button>
        <button class="button" @click="press">√</button>
        <button class="button" @click="press">7</button>
        <button class="button" @click="press">8</button>
        <button class="button" @click="press">9</button>
        <button class="button" @click="press">/</button>
        <button class="button" @click="press">x ²</button>
        <button class="button" @click="press">x !</button>
        <button class="button" @click="press">4</button>
        <button class="button" @click="press">5</button>
        <button class="button" @click="press">6</button>
        <button class="button" @click="press">*</button>
        <button class="button" @click="press">(</button>
        <button class="button" @click="press">)</button>
        <button class="button" @click="press">1</button>
        <button class="button" @click="press">2</button>
        <button class="button" @click="press">3</button>
        <button class="button" @click="press">-</button>
        <button class="button" @click="press">%</button>
        <button class="button" @click="press">±</button>
        <button class="button" @click="press">0</button>
        <button class="button" @click="press">.</button>
        <button class="button" @click="press">&#x003C0;</button>
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
      current: ""
    };
  },
  methods: {
      press: function press(event) {
      var me = this;
      var key = event.target.textContent;

      if (key != '=' && key != 'C' && key != '*' && key != '/' && key != '√' && key != "x ²" && key != "%" && key != "<=" && key != "±" && key != "sin" && key != "cos" && key != "tan" && key != "log" && key != "ln" && key != "x^" && key != "x !" && key != "π" && key != "e" && key != "rad" && key != "∘") {
        me.current += key;
      } else if (key === '=') {
        me.current = this.calculate(me.current);
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
        me.current = this.calculate(me.current);
        if (me.current.charAt(0) === '-') {
          me.current = me.current.slice(1);
        } else {
          me.current = '-' + me.current;
        }
      } else if (key === '<=') {
        me.current = me.current.substring(0, me.current.length - 1);
      } else if (key === '%') {
        me.current += '%';
      } else if (key === 'π') {
        me.current += 'π';
      } else if (key === 'x ²') {
        me.current = eval(this.calculate(me.current)) * eval(this.calculate(me.current));
      } else if (key === '√') {
        me.current += '√';
      } else if (key === 'sin') {
        me.current += 'sin';
      } else if (key === 'cos') {
        me.current += 'cos';
      } else if (key === 'tan') {
        me.current += 'tan';
      } else if (key === 'log') {
        me.current += 'log';
      } else if (key === 'ln') {
        me.current += 'ln';
      } else if (key === 'x^') {
        me.current += '^';
      } else if (key === 'x !') {
        var number = 1;
        if (me.current === 0) {
          me.current = '1';
        } else if (me.current < 0) {
          me.current = NaN;
        } else {
          var _number = 1;
          for (var i = me.current; i > 0; i--) {
            _number *= i;
          }
          me.current = _number;
        }
      } else if (key === 'e') {
        me.current += 'E';
      } else if (key === 'rad') {
        me.current += 'rad';
      } else if (key === '∘') {
        me.current += '∘';
      }
      
    },
    calculate(str){
                while(str.indexOf('%') > -1){
                    var number = this.getSubstring(str, str.indexOf('%'), -1);
                    var Strnumber = eval(this.calculate(number)) / 100;
                    str = str.replace(number + '%', String(Strnumber));
                }
                while(str.indexOf('rad') > -1){
                    var number = this.getSubstring(str, str.indexOf('rad')+2, 1);
                    var Strnumber = eval(this.calculate(number)) * Math.PI / 180;
                    str = str.replace('rad'+number, String(Strnumber));
                }
                while(str.indexOf('∘') > -1){
                    var number = this.getSubstring(str, str.indexOf('∘'), -1);
                    var Strnumber = eval(this.calculate(number)) * 180 / Math.PI;
                    str = str.replace(number + '∘', String(Strnumber))
                }
                while(str.indexOf('sin') > -1){
                    var number = this.getSubstring(str, str.indexOf('sin')+2, 1)
                    var Strnumber = Math.sin(eval(this.calculate(number)))
                    str = str.replace('sin'+number, String(Strnumber))
                }
                while(str.indexOf('cos') > -1){
                    var number = this.getSubstring(str, str.indexOf('cos')+2, 1)
                    var Strnumber = Math.cos(eval(this.calculate(number)))
                    str = str.replace('cos'+number, String(Strnumber))
                }
                while(str.indexOf('tan') > -1){
                    var number = this.getSubstring(str, str.indexOf('tan')+2, 1)
                    var Strnumber = Math.tan(eval(this.calculate(number)))
                    str = str.replace('tan'+number, String(Strnumber))
                }
                while(str.indexOf('log') > -1){
                    var number = this.getSubstring(str, str.indexOf('log')+2, 1)
                    var Strnumber = Math.log10(eval(this.calculate(number)))
                    str = str.replace('log'+number, String(Strnumber))
                }
                while(str.indexOf('ln') > -1){
                    var number = this.getSubstring(str, str.indexOf('ln')+1, 1)
                    var Strnumber = Math.log(eval(this.calculate(number)))
                    str = str.replace('ln'+number, String(Strnumber))
                }
                while(str.indexOf('√') > -1){
                    var number = this.getSubstring(str, str.indexOf('√'), 1)
                    var Strnumber = Math.sqrt(eval(this.calculate(number)))
                    str = str.replace('√'+number, String(Strnumber)) 
                }
                while(str.indexOf('^') > -1){
                    var number = this.getSubstring(str, str.indexOf('^'), -1)
                    var exp = this.getSubstring(str, str.indexOf('^'), 1)
                    var subNumber = this.calculate(number)
                    var exponent = this.calculate(exp)
                    str = str.replace(number + '^' + exp, String(eval('Math.pow(' + String(subNumber) + ',' + String(exponent) + ')')))
                }
                str = str.replace('E', String(Math.E));
                str = str.replace('π', String(Math.PI));
                str = String(eval(str));
                return str;
            },
            getSubstring(str, i, dir){
                var start = i, count = 0, numberfirst = 0;
                while(1){
                    if(i + dir >= str.length || i + dir < 0) break;
                    if(start == i && ((str[i + dir] <= '9'&&str[i + dir] >= '0')||str[i + dir] == 'E'||str[i + dir] == 'π')) numberfirst = 1;
                    if(numberfirst == 1){
                        if((str[ i+ dir] > '9'||str[i + dir] < '0') && str[i + dir] != '.' && str[i + dir] != 'E'&&str[i + dir] != 'π') break;
                    }
                    i+=dir;
                    if(str[i] === '(') count+=1;
                    if(str[i] === ')') count-=1;
                    if(count == 0 && numberfirst == 0) break;
                }
                if(dir < 0) return str.slice(i, start);
                else return str.slice(start+1, i+1);
            },
  },
  watch: {},
  created() {}
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
-->
