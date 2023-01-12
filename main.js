const certiBtn = document.querySelector('.certi-btn');
const idBtn = document.querySelector('.id-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const img = document.querySelector('img');
const yearMonthBox = document.querySelector('.yearMonth-box');
const dayBox = document.querySelector('.day-box');
const dateBox = document.querySelector('.date-box');
const darkScreen = document.querySelector('.dark-screen');

let today = new Date();
let year = today.getFullYear() - 2000;
let month = today.getMonth() + 1;
let day = today.getDate();

idBtn.addEventListener('click', () => {
  darkScreen.style.zIndex = 0;
  darkScreen.style.animation = 'opacity1 250ms ease';
  setTimeout(() => {
    img.src = 'img/certification_dong.jpg';
    darkScreen.style.zIndex = -1;
    img.style.animation = 'transform 300ms ease';
  }, 250);
  setTimeout(() => {
    yearMonthBox.innerText =
      `${year < 10 ? '0' + year : year}` +
      '.' +
      '  ' +
      `${month < 10 ? '0' + month : month}` +
      '.';
    dayBox.innerText = `${day < 10 ? '0' + day : day}` + '.';
    dateBox.style.animation = 'opacity2 300ms ease';
  }, 300);
});

certiBtn.addEventListener('click', () => {
  darkScreen.style.zIndex = 0;
  darkScreen.style.animation = 'opacity1 250ms ease';
  setTimeout(() => {
    img.src = 'img/certification_gyu.jpg';
    darkScreen.style.zIndex = -1;
    img.style.animation = 'transform 300ms ease';
  }, 250);
  setTimeout(() => {
    yearMonthBox.innerText =
      `${year < 10 ? '0' + year : year}` +
      '.' +
      '  ' +
      `${month < 10 ? '0' + month : month}` +
      '.';
    dayBox.innerText = `${day < 10 ? '0' + day : day}` + '.';
    dateBox.style.animation = 'opacity2 300ms ease';
  }, 300);
});

cancelBtn.addEventListener('click', () => {
  img.src = 'img/main.jpg';
  yearMonthBox.innerText = '';
  dayBox.innerText = '';
  img.style.animation = '';
  darkScreen.style.animation = '';
  dateBox.style.animation = '';
});
