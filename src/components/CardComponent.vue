<template>
  <div id="card" @click="onClick()">
    <img :src="imgPath" :alt="cardName" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { CARD_BACK_IMAGE_NAME, PointEnum, SuitEnum } from "@/ts/Card";

const props = defineProps<{
  suit: SuitEnum;
  num: PointEnum;
}>();

/**
 * 牌名
 */
const cardName = `${props.suit}${props.num}`;

/**
 * 牌面图片路径
 */
let imgPath = ref(`poker/${CARD_BACK_IMAGE_NAME}.png`);

/**
 * 正面朝上
 */
let faceUp = ref(false);

/**
 * 冻结（不可点击）
 */
let isFrozen = ref(false);

function onClick(): void {
  if (isFrozen.value) {
    return;
  }

  faceUp.value = !faceUp.value;

  imgPath.value = faceUp.value
    ? `/poker/${cardName}.png`
    : `/poker/${CARD_BACK_IMAGE_NAME}.png`;
}
</script>

<style scoped>
#card {
  margin: 5px;
  width: 64px;
  height: 90px;
  box-shadow: 5px 5px 5px #cccccc;
}
</style>
