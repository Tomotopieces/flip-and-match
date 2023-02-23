<template>
  <div id="menu">
    <el-row justify="center">
      <el-space direction="vertical" wrap>
        <el-button size="large" type="primary" @click="router.push('/table')">
          开始
        </el-button>
        <el-button size="large" type="info" plain @click="showRule = true">
          规则
        </el-button>

        <!-- 规则对话框 -->
        <el-dialog v-model="showRule" title="规则说明" width="30%">
          任意翻开两张牌，若数字一样（不论花色）则积一分，若数字不一样则重新盖上，直到翻出所有的牌。
        </el-dialog>
      </el-space>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const showRule = ref(false);
</script>

<style scoped>
#menu {
  margin: 0 auto;
  width: 80%;
}
</style>
