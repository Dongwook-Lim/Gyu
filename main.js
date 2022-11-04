const certiBtn = document.querySelector('.certi-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const img = document.querySelector('img');
const monthBox = document.querySelector('.month-box');
const dayBox = document.querySelector('.day-box');
const darkScreen = document.querySelector('.dark-screen');

let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();

certiBtn.addEventListener('click', () => {
  darkScreen.style.zIndex = 0;
  darkScreen.style.animation = 'opacity 500ms ease';
  setTimeout(() => {
    img.src = 'img/certification.jpg';
    darkScreen.style.zIndex = -1;
    img.style.animation = 'opacity 300ms ease';
    img.style.animation = 'transform 300ms ease';
  }, 500);
  setTimeout(() => {
    monthBox.innerText = `${month < 10 ? '0' + month : month}` + '.';
    dayBox.innerText = `${day < 10 ? '0' + day : day}` + '.';
  }, 800);
});

cancelBtn.addEventListener('click', () => {
  img.src = 'img/main.jpg';
  monthBox.innerText = '';
  dayBox.innerText = '';
});
