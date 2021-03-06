
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

function randomColor() {
    refs.body.bgColor = colors[randomIntegerFromInterval(0, colors.length)];
}

function start() {
    refs.startBtn.disabled = true;
   intervalID=setInterval(randomColor, 1000);
}


function stop() {
    refs.startBtn.disabled = false;
    clearInterval(intervalID);
}
