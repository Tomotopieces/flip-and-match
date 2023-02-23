<template>
  <div id="menu">
    <el-row justify="center">
      <el-button type="primary" plain @click="start()">开始</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

function start(): void {
  router.push("/table");
}
</script>

<style scoped>
#menu {
  margin: 0 auto;
  width: 80%;
}
</style>
