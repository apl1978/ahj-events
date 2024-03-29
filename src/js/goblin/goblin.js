export default class Goblin {
  constructor(element) {
    this._element = element;
  }

  toggleActive() {

    this.hideGoblin();

    const holes = this._element.querySelectorAll('.hole');
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add('active');
  }

  addNewHole() {
    const item = document.createElement('div');
    item.classList.add('hole');
    this._element.insertBefore(item, this._element.querySelector('.hole'));

  }

  hideGoblin() {
    const activeGoblin = this._element.querySelector('.active');
    if (activeGoblin) {
      activeGoblin.classList.remove('active');
    }
  }
}
