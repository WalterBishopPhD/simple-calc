function whichKey(ke) {
  const display = document.querySelector("#calc-io");
  const key = ke.key || ke.target.textContent;

  if (/[0123456789/*\-+.()]/.test(key)) {
    display.value += key;
  }

  if (/=|Enter/.test(key) && display.value !== "" && !display.value.match(/(\(\))/g)) {
    display.value = eval(display.value);
  }

  if (/Backspace|Delete|CE/.test(key)) {
    display.value = display.value.slice(0, -1);
  }

  if (/Escape|AC/.test(key)) {
    display.value = "";
  }
}

document.addEventListener("keydown", whichKey);
document.addEventListener("click",  whichKey);
document.addEventListener("click", e => document.activeElement.blur(e));
