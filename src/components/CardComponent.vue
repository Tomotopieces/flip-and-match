<template>
  <div id="card" @click="game.process(card)">
    <img :src="imgPath" :alt="cardName" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { CARD_BACK_IMAGE_NAME } from "@/ts/Card";
import store from "@/store";

/* props */

const props = defineProps<{
  /**
   * 位置
   */
  position: number;
}>();

/* data */

/**
 * 本局游戏
 */
const game = ref(store.state.game);

/**
 * 牌
 */
const card = ref(game.value.cards[props.position]);

/**
 * 牌名
 */
const cardName = `${card.value.suit}${card.value.point}`;

/* computed */

/**
 * 牌面图片路径
 */
const imgPath = computed(() =>
  card.value.faceUp
    ? `poker/${cardName}.png`
    : `poker/${CARD_BACK_IMAGE_NAME}.png`
);
</script>

<style scoped>
#card {
  margin: 5px;
  width: 64px;
  height: 90px;
  box-shadow: 5px 5px 5px #cccccc;
}
</style>
