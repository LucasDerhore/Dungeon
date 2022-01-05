class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.spe = "Cercle de vie";
  }

  specialMove() {
    this.hp += 8;
    this.mana -= 25;
    alert(`${this.name} utilise ${this.spe} et gagne 8 points de vie.`);
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n- Restaure 8 points de vie.\n- Coûte 25 points de mana.`
    );
  }
}
