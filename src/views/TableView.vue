<template>
  <div id="table">
    <el-row v-for="r in 4" :key="r" justify="center">
      <el-col
        span="1"
        v-for="card in game.cards.filter(
          (_, i) => i >= (r - 1) * 13 && i < r * 13
        )"
        :key="card.suit + card.point"
      >
        <card-component :suit="card.suit" :num="card.point" />
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <el-button @click="router.back()">返回</el-button>
      <el-button @click="game.reset()">重置</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import router from "@/router";
import store from "@/store";
import { ref } from "vue";

store.state.game.reset();

const game = ref(store.state.game);
</script>

<style scoped>
#table {
  width: 80%;
  margin: 0 auto;
}
</style>
