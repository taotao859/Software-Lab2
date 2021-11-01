<template>
  <el-card class="box-card" style="align-self: center; align-items: center; width: 100%">
    <!-- <el-button :plain="true" @click="error">错误</el-button> -->
    <el-card class="calculator" style="width: 50%; margin-left: 25%">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark" style="padding: 12px; color: aliceblue; float: right">
            {{ instantRes }}
          </div>
        </el-col>
      </el-row>

      <input class="input" v-model="current"/>
      <div class="mode">
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
        current: "", //当前input框的内容
        instantRes: "", //即时计算结果
      };
    },
    methods: {
      //针对对不同的按键进行不同的操作
      press(event) {
        var key = event.target.textContent;
        if (
          key != "=" &&
          key != "C" &&
          key != "*" &&
          key != "/" &&
          key != "√" &&
          key != "x ²" &&
          key != "%" &&
          key != "<=" &&
          key != "±" &&
          key != "sin" &&
          key != "cos" &&
          key != "tan" &&
          key != "log" &&
          key != "ln" &&
          key != "x^" &&
          key != "x !" &&
          key != "π" &&
          key != "e" &&
          key != "rad" &&
          key != "∘"
        ) {
          //输入了操作数，实时计算当前的结果
          this.current += key;
          try {
            var tmp = this.calculate(this.current);
            this.instantRes = tmp.toString();
          } catch (error) {
            this.instantRes = "";
          }
        } else if (key === "=") {
          try {
            this.current = this.calculate(this.current);
            this.instantRes = this.current;
          } catch (error) {
            this.instantRes = "";
            this.showError("输入格式存在错误！");
          }
        } else if (key === "C") {
          this.current = "";
          this.instantRes = "";
        } else if (key === "*") {
          this.current += "*";
        } else if (key === "/") {
          this.current += "/";
        } else if (key === "+") {
          this.current += "+";
        } else if (key === "+") {
          this.current += "+";
        } else if (key === "%") {
          this.current += "%";
        } else if (key === "x ²") {
          try {
            var tmp = eval(this.calculate(this.current));
            this.current = String(tmp * tmp);
            this.instantRes = this.current;
          } catch (error) {
            this.instantRes = "";
            this.showError("输入格式存在问题！");
          }
        } else if (key === "±") {
          try {
            this.current = (-eval(this.calculate(this.current))).toString();
            this.instantRes = this.current;
          } catch (error) {
            this.instantRes = "";
            this.showError("输入格式存在问题！");
          }
        } else if (key === "<=") {
          this.current = this.current.substring(0, this.current.length - 1);
          if (this.current.length != 0) {
            try {
              this.instantRes = this.calculate(this.current);
            } catch (error) {
              this.instantRes = "";
            }
          } else {
            this.instantRes = "";
          }
        }
      },
      //显示友好的错误提示框
      showError(msg) {
        this.$message({
          showClose: true,
          message: msg,
          type: "error",
        });
      },
      //将current字符串中的特殊操作符进行计算替换
      calculate(str) {
        while (str.indexOf("%") > -1) {
          var number = this.getOprand(str, str.indexOf("%"), -1);
          var Strnumber = eval(this.calculate(number)) / 100;
          str = str.replace(number + "%", String(Strnumber));
        }
        while (str.indexOf("rad") > -1) {
          var number = this.getOprand(str, str.indexOf("rad") + 2, 1);
          var Strnumber = (eval(this.calculate(number)) * Math.PI) / 180;
          str = str.replace("rad" + number, String(Strnumber));
        }
        while (str.indexOf("∘") > -1) {
          var number = this.getOprand(str, str.indexOf("∘"), -1);
          var Strnumber = (eval(this.calculate(number)) * 180) / Math.PI;
          str = str.replace(number + "∘", String(Strnumber));
        }
        while (str.indexOf("sin") > -1) {
          var number = this.getOprand(str, str.indexOf("sin") + 2, 1);
          var Strnumber = Math.sin(eval(this.calculate(number)));
          str = str.replace("sin" + number, String(Strnumber));
        }
        while (str.indexOf("cos") > -1) {
          var number = this.getOprand(str, str.indexOf("cos") + 2, 1);
          var Strnumber = Math.cos(eval(this.calculate(number)));
          str = str.replace("cos" + number, String(Strnumber));
        }
        while (str.indexOf("tan") > -1) {
          var number = this.getOprand(str, str.indexOf("tan") + 2, 1);
          var Strnumber = Math.tan(eval(this.calculate(number)));
          str = str.replace("tan" + number, String(Strnumber));
        }
        while (str.indexOf("log") > -1) {
          var number = this.getOprand(str, str.indexOf("log") + 2, 1);
          var Strnumber = Math.log10(eval(this.calculate(number)));
          str = str.replace("log" + number, String(Strnumber));
        }
        while (str.indexOf("ln") > -1) {
          var number = this.getOprand(str, str.indexOf("ln") + 1, 1);
          var Strnumber = Math.log(eval(this.calculate(number)));
          str = str.replace("ln" + number, String(Strnumber));
        }
        while (str.indexOf("^") > -1) {
          var number = this.getOprand(str, str.indexOf("^"), -1);
          var exp = this.getOprand(str, str.indexOf("^"), 1);
          var subNumber = this.calculate(number);
          var exponent = this.calculate(exp);
          str = str.replace(
            number + "^" + exp,
            String(
              eval("pow(" + String(subNumber) + "," + String(exponent) + ")")
            )
          );
        }
        str = String(eval(str));
        return str;
      },
      //获取某个特殊操作符对应的操作数
      //str为待操作的算式整体，i为操作数的索引下标，dir为查找的方向
      getOprand(str, i, dir) {
        var start = i,
          count = 0,
          numberfirst = 0;
        while (1) {
          if (i + dir >= str.length || i + dir < 0) break;
          if (start == i && str[i + dir] <= "9" && str[i + dir] >= "0")
            numberfirst = 1;
          if (numberfirst == 1) {
            if ((str[i + dir] > "9" || str[i + dir] < "0") && str[i + dir] != ".")
              break;
          }
          i += dir;
          if (str[i] === "(") count += 1;
          if (str[i] === ")") count -= 1;
          if (count == 0 && numberfirst == 0) break;
        }
        if (dir < 0) return str.slice(i, start);
        else return str.slice(start + 1, i + 1);
      },
    },
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