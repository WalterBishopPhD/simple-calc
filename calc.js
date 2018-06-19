// // inner buttons input
// $(document).ready(function(){
//   const display = document.getElementById("calc-io");

//   $(".expr").click((ke) => {
//     display.value += ke.target.textContent;
//   });
//   $(".eval").click(() => {  
//     display.value = eval(display.value);
//   });
//   $(".allClear").click(() => {  
//     display.value = "";
//   });
//   $(".clearEntry").click(() => {
//     display.value = display.value.slice(this.length, -1);
//   });
//   $(".cos").click(() => {
//     display.value = (display.value);
//   });
//   $(".cosh").click(() => {
//     display.value = (display.value);
//   });
//   $(".sin").click(() => {
//     display.value = (display.value);
//   });
//   $(".sinh").click(() => {
//     display.value = (display.value);
//   });
//   $(".tg").click(() => {
//     display.value = (display.value);
//   });
//   $(".tgh").click(() => {
//     display.value = (display.value);
//   });
//   $(".pi").click(() => {
//     display.value = (display.value);
//   });
//   $(".ctg").click(() => {
//     display.value = (display.value);
//   });
//   $(".ctgh").click(() => {
//     display.value = (display.value);
//   });
//   $(".euler").click(() => {
//     display.value = (display.value);
//   });
//   $(".ln2").click(() => {
//     display.value = (display.value);
//   });
//   $(".sqrt").click(() => {
//     display.value = (display.value);
//   });
//   $(".pow").click(() => {
//     display.value = (display.value);
//   });
//   $(".arcs").click(() => {
//     display.value = (display.value);
//   });
//   $(".arcc").click(() => {
//     display.value = (display.value);
//   });
//   $(".arctg").click(() => {
//     display.value = (display.value);
//   });
//   $(".arcctg").click(() => {
//     display.value = (display.value);
//   });
// });

// keyboard input
function whichKey(ke){
  const display = document.getElementById("calc-io");
  const key = ke.key; // WHY? BECAUSE I CAN
  if (/[-\d\/*+.\(\)]/.test(key)) { 
    display.value += key;
  }
  if (key === "=" || key === "Enter") {
    display.value = eval(display.value);
  }
  if (key === "Backspace" || key === "Delete") {
    display.value = display.value.slice(this.length, -1);
  }
  if (key === "Escape") {
    display.value = "";
  }
}
window.addEventListener("keydown", whichKey);


function witchButton(ke) {
  const display = document.getElementById("calc-io");
  const button = ke.target.textContent;
  if (/[-\d\/*+.\(\)]/.test(button)) {
    display.value += button;
  }
}
document.querySelectorAll(".expr").forEach(addEventListener("click", witchButton));



window.addEventListener("click", () => {console.log(event)});
document.addEventListener("click", () => {document.activeElement.blur()});

