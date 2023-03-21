const refs = {
  bodyColor: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
console.log(refs.bodyColor);
console.log(refs.btnStart);
console.log(refs.btnStop);

refs.btnStop.setAttribute('disabled', true);

const INTERVAL_DELAY = 1000;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);

  refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute('disabled');
});

refs.btnStop.addEventListener('click', () => {
  clearInterval(timerId);

  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
});
