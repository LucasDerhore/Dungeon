class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.spe = "Etreinte Divine";
  }

  specialMove(victim) {
    this.dmg = 4;
    alert(`${this.name} utilise ${this.spe} sur ${victim.name}`);
    this.dealDamage(victim);
    alert(`${this.name} gagne 5 points de vie`);
    this.dmg = 3;
    this.hp += 5;
    this.mana -= 40;
  }

  seeSpecialMove() {
    alert(
      `${this.spe}\n inflige 4 dégats a l'adversaire.\n Restaure 5 points de vie.\n Coûte 40 points de mana.`
    );
  }
}
