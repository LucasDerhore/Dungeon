class Hunt extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 11), (dmg = 5), (mana = 70), status, hasplayed);
    this.spe = "Visée";
  }

  specialMove(victim) {
    this.dmg = 9;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}.`);
    this.dealDamage(victim);
    this.dmg = 5;
    this.mana -= 30;
    this.hp -= 3;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n- Inflige 9 points de dégats. \n- Coûte 3 points de vie et 30 points de mana.`
    );
  }
}
