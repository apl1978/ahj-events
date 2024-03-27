import Goblin from '../goblin/goblin';

export default class Field {
  constructor(element) {
    this._element = element;
    this.interval = null;
    this._hits = 0;
    this._misses = 0;
    this._hitElement = document.querySelector('.results .hit');
    this._missElement = document.querySelector('.results .miss');
  }

  drawCells() {

    const goblin = new Goblin(this._element);
    for (let i = 0; i < 16; i++) {
      goblin.addNewGoblin();
    }

    const activeGoblin = this._element.firstElementChild;
    activeGoblin.classList.add('active');

    this.interval = setInterval(() => {
      goblin.toggleActive();
    }, 1000);

    this._element.addEventListener('click', (event) => {
      const hole = event.target.closest('.hole');
      if (hole) {
        if (hole.classList.contains('active')) {
          this._hits++;
          this._hitElement.innerText = this._hits;
        } else {
          this._misses++;
          this._missElement.innerText = this._misses;
        }
        this.checkStatus();
      }
    });
  }

  checkStatus() {
    if (this._misses === 5) {
      clearInterval(this.interval);
      alert('Вы проиграли!');
    }
    if (this._hits === 10) {
      clearInterval(this.interval);
      alert('Вы победили!');
    }
  }

}
