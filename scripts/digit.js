const text = "Hello World! Meu nome é Bruno José";
const element = document.getElementById("welcome");

let i = 0;

function digit() {
  element.innerHTML = text.slice(0, i) + '<span class="cursor">|</span>';

  if (i < text.length) {
    i++;
    setTimeout(digit, 100);
  } else {
    setTimeout(() => {
      i = 0;
      element.innerHTML = '<span class="cursor">|</span>';
      digit();
    }, 4000);
  }
}

digit();