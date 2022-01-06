class Game {
  constructor(players, turnLeft = 10) {
    this.players = players;
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft -= 1;
  }

  playersAlive() {
    return this.players.filter((player) => player.isCharacterKilled() == false);
  }

  displayWinners() {
    let winners = players.filter((player) => player.status == "winner");
    return winners.length == 1
      ? alert(`Le gagnant est ${winners[0].name}`)
      : alert(`Les gagnant sont ${winners.map((winner) => winner.name)}`);
  }

  gameOver() {
    alert("Game over !");
    this.playersAlive().map((player) => player.changeStatusToWinner());
    this.displayWinners();
  }

  DidSomeoneWin() {
    if (this.turnLeft == 0 || this.playersAlive().length == 1) {
      return true;
    }
  }

  watchStats(players) {
    players.map((player) =>
      alert(
        `Héro: ${player.name} \nClasse: ${player.constructor.name} \nHP: ${player.hp} \nMana: ${player.mana} \nDégats: ${player.dmg}`
      )
    );
  }
}
