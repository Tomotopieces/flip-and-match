import { Card } from "@/ts/Card";
import shuffle from "@/ts/CradUtils";

/**
 * 一局游戏
 */
export default class Game {
  /**
   * 牌组
   */
  private _cards = [] as Array<Card>;

  /**
   * 分数
   */
  private _score = 0;

  /**
   * 翻开的卡
   */
  private _currentCard: Card | undefined;

  /**
   * 本局游戏开始时刻
   */
  private _startTime = 0;

  /**
   * 本局游戏时间
   */
  private _timer = 0;

  /**
   * 重置游戏
   */
  reset(): void {
    this._cards = shuffle();
    this._score = 0;
    this._currentCard = undefined;
    this._timer = 0;
  }

  /**
   * 开始游戏
   */
  start(): void {
    this._timer = this._startTime = Date.now();
  }

  /**
   * 更新计时器
   */
  updateTime(): void {
    this._timer = Date.now() - this._startTime;
  }

  /**
   * 加分
   */
  addScore(): void {
    this._score++;
  }

  /**
   * 胜利判断
   */
  win(): boolean {
    return this._score === 26;
  }

  get cards(): Array<Card> {
    return this._cards;
  }

  get score(): number {
    return this._score;
  }

  get currentCard(): Card | undefined {
    return this._currentCard;
  }

  get timer(): number {
    return this._timer;
  }
}
