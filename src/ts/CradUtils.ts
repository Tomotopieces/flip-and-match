import { Card, PointEnum, SuitEnum } from "@/ts/Card";

/**
 * 洗牌
 */
export default function shuffle(): Array<Card> {
  const result = new Array<Card>();
  const indices = getOrderedNumberArray(52); // 作为
  while (indices.length > 0) {
    const index = randomInteger(indices.length);
    result.push(ORDERED_DECK[indices[index]]);
    indices.splice(index, 1);
  }
  return result;
}

/**
 * 有序牌组
 */
const ORDERED_DECK = initOrderedDeck();

/**
 * 初始化有序牌组
 */
function initOrderedDeck(): Array<Card> {
  const result = [] as Array<Card>;
  for (const s in SuitEnum) {
    for (const n in PointEnum) {
      result.push({
        suit: SuitEnum[s as keyof typeof SuitEnum],
        point: PointEnum[n as keyof typeof PointEnum],
      });
    }
  }
  return result;
}

/**
 * 随机一个正整数
 *
 * @param bound 最大值（不包含）
 */
function randomInteger(bound: number): number {
  return Math.floor(Math.random() * (bound - 1));
}

/**
 * 生成有序数组
 */
function getOrderedNumberArray(quantity: number): Array<number> {
  const indices: Array<number> = [];
  for (let i = 0; i < quantity; i++) {
    indices[i] = i;
  }
  return indices;
}
