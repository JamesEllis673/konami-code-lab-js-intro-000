const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.addEventListener('keydown', onKeyDownHandler);
}

var index = 0;
init()

function onKeyDownHandler(e) {
  const key = e.key;
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Wow!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}
