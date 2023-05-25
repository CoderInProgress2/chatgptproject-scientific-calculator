let input = "";

function appendInput(value) {
  input += value;
  document.getElementById("result").value = input;
}

function clearResult() {
  input = "";
  document.getElementById("result").value = "";
}

function deleteLast() {
  input = input.slice(0, -1);
  document.getElementById("result").value = input;
}

function calculateResult() {
  try {
    const result = eval(input);
    document.getElementById("result").value = result;
    input = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
