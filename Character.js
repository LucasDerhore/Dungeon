class Character {
  constructor(hp, dmg, mana, status = "playing", hasplayed = false) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.hasplayed = hasplayed;
  }
}
