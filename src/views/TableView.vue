<template>
  <div id="table">
    <!-- 4行，每行13张 -->
    <el-row v-for="row in 4" :key="row" justify="center">
      <el-col :span="1.5" v-for="col in 52" :key="col">
        <card-component
          v-if="!shuffling && col - 1 >= (row - 1) * 13 && col - 1 < row * 13"
          :position="col - 1"
        />
      </el-col>
    </el-row>
    <el-divider />
    <el-row justify="center" align="middle">
      <el-col :span="6">
        <el-button @click="router.back()">返回</el-button>
      </el-col>
      <el-col :span="6">
        <el-statistic title="时间" :value="timeStamp" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="分数" :value="game.score + ' / 26'" />
      </el-col>
      <el-col :span="6">
        <el-button @click="reset()">重置</el-button>
      </el-col>
    </el-row>

    <!-- 胜利提示 -->
    <el-dialog v-model="game.end" title="胜利" width="30%">
      游戏结束，本次游戏耗时：{{ timeStamp }}。
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import router from "@/router";
import store from "@/store";
import {
  ComponentInternalInstance,
  computed,
  getCurrentInstance,
  ref,
} from "vue";

/* data */

/**
 * 本局游戏
 */
const game = ref(store.state.game);

/**
 * 正在洗牌
 *
 * 控制卡牌组件的强制重新渲染
 */
const shuffling = ref(false);

/**
 * 实例
 *
 * getCurrentInstance() 需在顶级或setup()方法内执行才能获取到实例
 */
const { proxy } = getCurrentInstance() as ComponentInternalInstance;

/* computed */

const timeStamp = computed(() => {
  const time = new Date(game.value.time);
  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  } as Intl.DateTimeFormatOptions;
  return `${new Intl.DateTimeFormat("default", options).format(time)}`;
});

/* created */

// 进入页面时重置游戏
game.value.reset();

/* methods */

/**
 * 重置
 */
function reset(): void {
  // 通过v-if来强制重新渲染卡牌组件
  shuffling.value = true;
  game.value.reset();
  proxy?.$nextTick(() => {
    // 在DOM内容更新后再修改v-if状态
    shuffling.value = false;
  });
}
</script>

<style scoped>
* {
  text-align: center;
}

#table {
  width: 80%;
  margin: 0 auto;
}
</style>
