import Field from './field/field';

document.addEventListener('DOMContentLoaded', () => {

  const field = new Field(document.querySelector('.field'));
  field.drawCells();

})
