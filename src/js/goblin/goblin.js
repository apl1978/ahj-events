export default class Goblin {
    constructor(element) {
        this._element = element;
    }

  toggleActive() {
    const activeGoblin = this._element.querySelector('.active');
    activeGoblin.classList.remove('active');

    const holes = this._element.querySelectorAll('.hole');
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add('active');
  }
  
  addNewGoblin() {
      const item = document.createElement('div');
      item.classList.add('hole');
      this._element.insertBefore(item, this._element.querySelector('.hole'));

  }
}
