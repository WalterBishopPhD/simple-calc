// input
function whichKey(ke){
  const display = document.getElementById("calc-io");
  const key = ke.key || ke.target.textContent;

  if ("0123456789/*-+.()".includes(key)) {
    display.value += key;
  }
  if (["=", "Enter"].includes(key) && display.value !== "" && !display.value.match(/(\(\))/g)) {
    proverkaNaDuraka();
    display.value = eval(display.value);
  }
  if (["Backspace", "Delete", "CE"].includes(key)) {
    display.value = display.value.slice(this.length, -1);
    display.style.backgroundColor = "";
  }
  if (["Escape", "AC"].includes(key)) {
    display.value = "";
  }
}
function proverkaNaDuraka() {
  const display = document.getElementById("calc-io");
  if (display.value.match(/\(.+\)/g)) {
    const dif = display.value.match(/[(]/g).length - display.value.match(/[)]/g).length;
    
    if (dif > 0) {
      for (let i = 0; i < dif; ++i) {
        display.value += ")";
      }
    }
    if (dif < 0) {
      display.style.backgroundColor = "red";
    }
  }
}

document.addEventListener("keydown", whichKey);
document.addEventListener("click",  whichKey);
document.addEventListener("click", (e) => {document.activeElement.blur(e)});

// document.addEventListener("click", (e) => {console.log(e)});