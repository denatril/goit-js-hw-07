const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
function createBoxes(amount) {
  destroyBoxes();

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.append(box);
  }

  boxes.append(fragment);
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);
