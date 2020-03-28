const main = document.querySelector('main'),
voicesSelect = document.getElementById('voices'),
textarea = document.getElementById('text'),
readBtn = document.getElementById('read'),
toggleBtn = document.getElementById('toggle'),
closeBtn = document.getElementById('close');

const data = [
  {
    image: './img/Drink.jpg',
    text: "I'm thirsty"
  },
  {
    image: './img/hungry.jpg',
    text: "I'm hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm scared"
  },
  {
    image: './img/outside.jpg',
    text: "I want to go outside"
  },
  {
    image: './img/home.jpg',
    text: "I want to go home"
  },
]

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const {image, text} = item;

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  // @todo - speak event

  main.appendChild(box);
}