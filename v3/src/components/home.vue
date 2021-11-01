<template>
  <div class="home">
    <el-container class="home_container">
      <!-- 头部 -->
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="/standard" style="align-self: center;">
            <router-link to="/standard" class="link">
              标准计算器
            </router-link>
          </el-menu-item>
          <el-menu-item index="/science" style="align-self: center;">
            <router-link to="/science" class="link">
              科学计算器
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <!-- END 头部 -->
      <!-- 主体 -->
      <el-main style="height: 80%; flex-grow: 1">
        <router-view></router-view>
      </el-main>
      <!-- END 主体 -->
      <!-- 底部 -->
      <el-footer>
        <div>
          <el-menu class="el-menu-demo" mode="horizontal" />
          Copyright © 2021 Calculator 科技改变世界
        </div>
      </el-footer>
      <!-- END 底部 -->
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //对应el-menu中的 index
      activeIndex: this.$route.path
    };
  },
  watch: {
    $route(to, from) {
      // 监听路由的变化  如果路由发生改变则当前tab栏默认值也相应改变
      this.activeIndex = to.path;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin-top: 0px;
  /*统一设置高度为100%*/
  height: 100%;
  width: 100%;
}

.el-container {
  margin: 200px;
  margin-top: 0px;
}

.el-menu {
  width: 100%;
}

.el-header {
  margin-right: 80px;
  width: 100%;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  margin-bottom: 0px;
  margin-right: 80px;
  width: 100%;
  text-align: center;
  line-height: 60px;
  font-size: 10px;
  color: darkgrey;
}

.el-main {
  /* margin-right: 80px; */
  width: 100%;
  height: 100%;
  text-align: center;
  align-self: center;
}

.link {
  text-decoration: none;
  display: inline-block;
  height: inherit;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
