class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.spe = "Healing lighting";
  }
}
