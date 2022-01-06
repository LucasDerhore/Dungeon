const Garrosh = new Fighter("Garrosh");
const Uther = new Paladin("Uther");
const Khadgar = new Mago("Khadgar");
const Shen = new Monk("Shen");

let players = [Garrosh, Uther, Khadgar, Shen];

const Go = new Game(players);

alert("Bienvenue dans Hacking World !");
alert("Appuie sur une touche pour commencer la partie");
alert("Et zééééé Partis !");

while (Go.turnLeft > 0 && !Go.DidSomeoneWin()) {
  Go.newTurn();
  let turn = new Turn(players, Go.turnLeft);
  turn.startTurn();
  turn.turnPlay();
}

Go.gameOver();
