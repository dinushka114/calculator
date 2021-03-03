const inputNum = document.querySelector("#input");

function calculate(num) {
  inputNum.value += num;
}

function result() {
  try {
    const result = eval(inputNum.value);
    inputNum.value = result;
  } catch {
    inputNum.value = "undefined";
  }
}

function clearData() {
  inputNum.value = " ";
}
