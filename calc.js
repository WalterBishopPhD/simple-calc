// input
function whichKey(ke){
  const display = document.getElementById("calc-io");
  const key = ke.key || ke.target.textContent;

  if ("0123456789/*-+.()".includes(key)) {
    display.value += key;
  }
  if (["=", "Enter"].includes(key) && display.value !== "") {
    display.value = eval(display.value);
  }
  if (["Backspace", "Delete"].includes(key)) {
    display.value = display.value.slice(this.length, -1);
  }
  if (["Escape"].includes(key)) {
    display.value = "";
  }
}

document.addEventListener("keydown", whichKey);
document.addEventListener("click",  whichKey);
document.addEventListener("click", (e) => {document.activeElement.blur(e)});

document.addEventListener("click", (e) => {console.log(e)});