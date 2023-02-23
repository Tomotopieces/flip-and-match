<template>
  <div id="app">
    <el-container id="container">
      <el-header id="header">
        <div id="title">神经衰弱</div>
      </el-header>
      <el-main id="main">
        <router-view />
      </el-main>
      <el-footer id="footer">
        <el-space spacer="|">
          <el-link type="primary" href="https://tomoto.top">tomoto.top</el-link>
          <el-link
            type="primary"
            href="https://github.com/Tomotopieces/flip-and-match"
          >
            GitHub
          </el-link>
        </el-space>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

// 中间内容部分导航至标题界面
router.push("/title");
</script>

<style scoped>
#title {
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 3.5rem;
}

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

#main {
  flex: 1;
}

#footer {
  flex: 0;
  text-align: center;
}
</style>
