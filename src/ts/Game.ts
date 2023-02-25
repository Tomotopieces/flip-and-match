import { Card } from "@/ts/Card";
import shuffle from "@/ts/DeckUtils";
import { flip, freeze } from "@/ts/CardUtils";

/**
 * 一局游戏
 */
export default class Game {
  /**
   * 冻结时间（单位ms）
   */
  private static readonly FREEZE_TIME = 1000;

  /**
   * 总分
   */
  private static readonly TOTAL_SCORE = 1;

  /**
   * 牌组
   */
  private _cards = [] as Array<Card>;

  /**
   * 分数
   */
  private _score = 0;

  /**
   * 两张牌中的前一张
   */
  private _firstCard?: Card;

  /**
   * 两张牌中的后一张
   */
  private _secondCard?: Card;

  /**
   * 本局游戏开始时刻
   */
  private _startTime = 0;

  /**
   * 本局游戏时间
   */
  private _time = 0;

  /**
   * 计时任务 id
   */
  private _interval = 0;

  /**
   * 牌桌是否被冻结
   */
  private _tableFrozen = false;

  /**
   * 游戏是否结束
   */
  private _end = false;

  /**
   * 重置游戏
   */
  reset(): void {
    this._cards = shuffle();
    this._score = 0;
    this._firstCard = undefined;
    this._startTime = 0;
    this._time = 0;

    if (this._interval !== 0) {
      clearInterval(this._interval);
      this._interval = 0;
    }

    this._tableFrozen = false;
    this._end = false;
  }

  /**
   * 游戏流程
   *
   * @param card 卡片
   */
  process(card: Card): void {
    if (this._end || this._tableFrozen || card.faceUp || card.frozen) {
      return;
    }

    flip(card);

    // 初次点击后开始计时
    if (this._time === 0) {
      this.startTimeCount();
    }

    this.matching(card);

    if (this.win()) {
      this._tableFrozen = true;
      this._end = true;
    }
  }

  /**
   * 开始计时
   */
  startTimeCount(): void {
    this._startTime = Date.now();
    const _this = this;
    this._interval = setInterval(() => _this.updateTime(_this), 1);
  }

  /**
   * 更新计时器
   *
   * @param game 本局游戏
   */
  updateTime(game: Game): void {
    if (!game._end) {
      game._time = Date.now() - game._startTime;
    }
  }

  /**
   * 匹配
   *
   * @param card 刚点击的牌
   */
  matching(card: Card): void {
    // 第一张牌
    if (!this._firstCard) {
      this._firstCard = card;
      return;
    }

    // 第二张牌且匹配成功
    if (this._firstCard.point === card.point) {
      this.addScore();
      freeze(this._firstCard);
      freeze(card);
      this._firstCard = undefined;
      return;
    }

    // 第二张牌匹配失败
    this._secondCard = card;
    this.freezeTable();
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
    return this._score === Game.TOTAL_SCORE;
  }

  /**
   * 暂时冻结牌桌
   */
  freezeTable(): void {
    this._tableFrozen = true;
    const interval = setInterval(() => {
      this.unfreezeTable(interval);
    }, Game.FREEZE_TIME);
  }

  /**
   * 解冻牌桌
   *
   * @param interval 定时任务 id
   */
  unfreezeTable(interval: number): void {
    this._tableFrozen = false;
    clearInterval(interval);
    if (this._firstCard) {
      flip(this._firstCard);
      this._firstCard = undefined;
    }
    if (this._secondCard) {
      flip(this._secondCard);
      this._secondCard = undefined;
    }
  }

  get cards(): Array<Card> {
    return this._cards;
  }

  get score(): number {
    return this._score;
  }

  get firstCard(): Card | undefined {
    return this._firstCard;
  }

  set firstCard(value: Card | undefined) {
    this._firstCard = value;
  }

  get secondCard(): Card | undefined {
    return this._secondCard;
  }

  set secondCard(value: Card | undefined) {
    this._secondCard = value;
  }

  get time(): number {
    return this._time;
  }

  get tableFrozen(): boolean {
    return this._tableFrozen;
  }

  get end(): boolean {
    return this._end;
  }

  set end(value: boolean) {
    this._end = value;
  }
}
