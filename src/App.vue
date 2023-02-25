<template>
  <div id="app">
    <el-container id="container">
      <!-- 页头 -->
      <el-header id="header">
        <div id="title">神经衰弱</div>
      </el-header>
      <!-- 内容 -->
      <el-main id="main">
        <router-view />
      </el-main>
      <!-- 页脚 -->
      <el-footer id="footer">
        <el-space spacer="|">
          <el-link type="primary" href="https://tomoto.top">tomoto.top</el-link>
          <el-link
            type="primary"
            href="https://github.com/Tomotopieces/flip-and-match"
          >
            v1.0
          </el-link>
        </el-space>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

/* created */

// 进入页面时中间内容部分导航至标题界面
router.push("/title");
</script>

<style scoped>
#app {
  position: absolute;
  top: 0;
  bottom: 1rem;
  left: 0;
  right: 0;
}

#container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

#header {
  flex: 1;
}

#title {
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 3.5rem;
}

#main {
  flex: 1;
}

#footer {
  flex: 0;
  text-align: center;
}
</style>

<style>
/* 全局字体 */
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
