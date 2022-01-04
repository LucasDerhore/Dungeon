class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 12), (dmg = 4), (mana = 40), status, hasplayed);
    this.spe = "Dark vision";
    this.actived = false;
  }
}
