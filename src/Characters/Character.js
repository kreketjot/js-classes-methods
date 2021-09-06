/* eslint-disable no-underscore-dangle */
const characterTypes = new Set([
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
]);

export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  set name(name) {
    if (name.length > 1 && name.length < 11) {
      this._name = name;
    } else {
      throw new Error('min name lenght is 2, max is 10');
    }
  }

  get name() {
    return this._name;
  }

  set type(type) {
    if (characterTypes.has(type)) {
      this._type = type;
    } else {
      throw new Error(`${type} is unsupported type`);
    }
  }

  get type() {
    return this._type;
  }
}
