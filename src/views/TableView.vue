<template>
  <div id="table">
    <el-row v-for="r in 4" :key="r" justify="center">
      <el-col
        span="2"
        v-for="card in cards.filter((_, i) => i >= (r - 1) * 13 && i < r * 13)"
        :key="card.suit + card.point"
      >
        <card-component :suit="card.suit" :num="card.point" />
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <el-button @click="back()"> 返回</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import shuffle from "@/ts/CradUtils";
import router from "@/router";

const cards = shuffle();

function back(): void {
  router.back();
}
</script>

<style scoped>
#table {
  width: 80%;
  margin: 0 auto;
}
</style>
