class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 12), (dmg = 4), (mana = 40), status, hasplayed);
    this.spe = "Sanguinaire";
    this.actived = false;
  }

  specialMove(victim) {
    this.dmg = 5;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    this.dmg = 4;
    this.actived = true;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n- Inflige 5 dégats a l'ennemi.\n- Atténue les dégats reçu de 2 par hit jusqu'a la fin du tour`
    );
  }

  takeDamage(damage) {
    if (this.actived == true) {
      damage -= 2;
      this.hp -= damage;
      alert(
        `${this.name} utilise ${this.spe} pour atténuer les dégats.\n${this.name} subit seulement ${damage} dégats. \n${this.name} à encore ${this.hp} point de vie.`
      );
    } else {
      this.hp -= damage;
      alert(
        `${this.name} subit ${damage} dégats.\n${this.name} à encore ${this.hp} point de vie.`
      );
    }
  }

  resetSpe() {
    this.actived = false;
  }
}
