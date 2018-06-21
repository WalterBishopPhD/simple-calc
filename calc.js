// input
function whichKey(ke){
  const display = document.getElementById("calc-io");
  const key = ke.key || ke.target.textContent;
  if (/^[-\d\/\*\+\.\(\)]$/.test(key)) {
    display.value += key;
  }
  if (/^(=|Enter)$/.test(key)) {
    display.value = eval(display.value);
  }
  if (/^(Backspace|Delete)$/.test(key)) {
    display.value = display.value.slice(this.length, -1);
  }
  if (/^Escape$/.test(key)) {
    display.value = "";
  }
}
document.addEventListener("keydown", whichKey);
document.addEventListener("click",  whichKey);
document.addEventListener("click", (e) => {document.activeElement.blur(e)});

document.addEventListener("click", (e) => {console.log(e)});
