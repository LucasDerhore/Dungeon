class Warlock extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 12), (dmg = 3), (mana = 150), status, hasplayed);
    this.spe = "Trait du chaos";
  }

  specialMove(victim) {
    this.dmg = 7;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}.`);
    this.dealDamage(victim);
    this.dmg = 2;
    this.mana -= 30;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n Cause 7 points de dégats. \n Coûte 30 points de mana.`
    );
  }
}
