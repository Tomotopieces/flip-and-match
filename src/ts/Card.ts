/**
 * 牌
 */
export interface Card {
  /**
   * 花色
   */
  suit: SuitEnum;

  /**
   * 点数
   */
  point: PointEnum;
}

/**
 * 花色
 */
export enum SuitEnum {
  HEART = "Heart",
  DIAMOND = "Diamond",
  SAPDE = "Spade",
  CLUB = "Club",
}

/**
 * 点数
 */
export enum PointEnum {
  ACE = "Ace",
  TWO = "Two",
  THREE = "Three",
  FOUR = "Four",
  FIVE = "Five",
  SIX = "Six",
  SEVEN = "Seven",
  EIGHT = "Eight",
  NINE = "Nine",
  TEN = "Ten",
  JACK = "Jack",
  QUEEN = "Queen",
  KING = "King",
}

/**
 * 牌背图片名称
 */
export const CARD_BACK_IMAGE_NAME = "Back";
