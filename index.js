let input1 = document.getElementById("id1");
let input2 = document.getElementById("id2");

let button1 = document.getElementById("plus");
let button2 = document.getElementById("minus");
let button3 = document.getElementById("mult");
let button4 = document.getElementById("div");

button1.addEventListener("click", handlePlusClick);
function handlePlusClick() {
  console.log("hi");
  let sum = Number(input1.value) + Number(input2.value);
  console.log(Number(input1.value));
  console.log(Number(input2.value));
  console.log(sum);
}
button2.addEventListener("click", handleMinusClick);
function handleMinusClick() {
  let minus = Number(input1.value) - Number(input2.value);

  console.log(minus);
}
button3.addEventListener("click", handleMultClick);
function handleMultClick() {
  console.log("hi");
  let mult = Number(input1.value) + Number(input2.value);

  console.log(mult);
}
button4.addEventListener("click", handlePDivClick);
function handlePDivClick() {
  let div = Number(input1.value) + Number(input2.value);
  console.log(Number(input1.value));
  console.log(Number(input2.value));
  console.log(div);
}
