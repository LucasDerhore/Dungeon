class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft);
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`C'est le tour ${this.turnNumber}`);
    this.setHasplayedToFalse(this.playersAlive());
  }

  pickPlayerRandomly(players) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    alert(`${randomPlayer.name}, c'est ton tour !`);
    return randomPlayer;
  }

  playerActionsMenu(player) {
    let playerResponse = prompt(
      `${player.name}, Que veux tu faire ?\n- [0] pour attaquer un autre joueur \n- [1] pour voir tes stats \n- [2] pour voir les stats des autres héros \n- [3] pour voir ton attaque spécial \n- [4] pour faire ton attaque spécial`
    );

    switch (playerResponse) {
      case "0":
        player.dealDamage(this.chooseTarget(player));
        break;

      case "1":
        this.watchStatsCurrentPlayer(player);
        this.playerActionsMenu(player);
        break;

      case "2":
        this.watchStatsOtherPlayers(player);
        this.playerActionsMenu(player);
        break;

      case "3":
        player.seeSpecialMove();
        this.playerActionsMenu(player);
        break;

      case "4":
        if (
          player.constructor.name == "Fighter" ||
          player.constructor.name == "Paladin" ||
          player.constructor.name == "Monk" ||
          player.constructor.name == "Mago" ||
          player.constructor.name == "Hunt" ||
          player.constructor.name == "Warlock"
        ) {
          player.specialMove(this.chooseTarget(player));
        } else {
          player.specialMove();
        }
        break;

      default:
        alert("Désolé, réponse invalide, essaye encore !");
        this.playerActionsMenu(player);
    }

    player.hasplayed = true;
  }

  chooseTarget(player) {
    let targets = this.playersAlive().filter((target) => target != player);

    let indexes = Array.from(Array(targets.length).keys());

    let action = `${player.name}, Qui veux tu attaquer ?`;
    for (let i in targets) {
      action += `\n Tape [${i}] pour attaquer ${targets[i].name}`;
    }
    let playerResponse = prompt(action);

    if (indexes.includes(parseInt(playerResponse))) {
      return targets[parseInt(playerResponse)];
    } else {
      alert("Désolé réponse invalide, essaye encore !");
      this.chooseTarget(player);
    }
  }

  playersAliveAndHaventPlayed() {
    return this.playersAlive().filter((player) => player.hasplayed == false);
  }

  turnPlay() {
    while (
      this.playersAliveAndHaventPlayed().length > 0 &&
      this.playersAlive().length > 1
    ) {
      this.playerActionsMenu(
        this.pickPlayerRandomly(this.playersAliveAndHaventPlayed())
      );
    }
  }

  watchStatsOtherPlayers(player) {
    this.watchStats(this.playersAlive().filter((p) => p != player));
  }

  watchStatsCurrentPlayer(player) {
    this.watchStats(this.playersAlive().filter((p) => p == player));
  }

  setHasplayedToFalse(players) {
    players.map((player) => (player.hasplayed = false));
  }

  deactivateFigthersSpe(players) {
    players
      .filter((player) => player.constructor.name == "Fighter")
      .map((player) => player.resetSpe());
  }
}
