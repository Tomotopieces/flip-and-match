import { Card } from "@/ts/Card";

/**
 * 翻面
 * @param card 牌
 */
export function flip(card: Card): void {
  if (!card.frozen) {
    card.faceUp = !card.faceUp;
  }
}

/**
 * 冻结
 * @param card 牌
 */
export function freeze(card: Card): void {
  card.frozen = true;
}
