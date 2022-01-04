class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft);
    this.turnNumber = 10 - turnLeft;
  }
}
