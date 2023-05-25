let input = "";

function appendInput(value) {
  if (!isNaN(value) || value === '.') { // Check if value is a number or decimal point
    input += value;
    document.getElementById("result").value = input;
  } else {
    input += value;
    document.getElementById("result").value = input;
  }
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
    const formattedResult = result.toLocaleString(); // Add comma formatting
    document.getElementById("result").value = formattedResult;
    input = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
