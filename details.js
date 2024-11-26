/**
 * Author: David Verdugo
 * Date: 20 nov 2024
 * Description: This function evaluates system compatibility based on selected RAM and CPU.
 */

// taking the variables from the html file
document
  .getElementById("submitButton")
  .addEventListener("click", EvaluateSysInfo);

document.getElementById("resetButton").addEventListener("click", resetValues);

function EvaluateSysInfo() {
  // getting the RAM AND CPU VALUES
  const ram = document.getElementById("ramDropdown").value;
  const cpu = document.getElementById("cpuDropdown").value;

  // Show the curret config of the pc
  const configResult =
    "Your system has " + ram + "GB of RAM and " + cpu + " cores.";
  document.getElementById("result").innerText = configResult;

  // getting the variable submit
  const submitButton = document.getElementById("submitButton");

  // Obtener los valores mínimos ingresados por el usuario
  const requiredRam = document.getElementById("minRam").value;
  const requiredCpu = document.getElementById("minCpu").value;

  // Comparar con los requisitos mínimos definidos por el usuario
  if (
    parseInt(ram) >= parseInt(requiredRam) &&
    parseInt(cpu) >= parseInt(requiredCpu)
  ) {
    submitButton.style.backgroundColor = "green";
    submitButton.innerText = "Sufficient Resources";
  } else {
    submitButton.style.backgroundColor = "red";
    submitButton.innerText = "Insufficient Resources";
  }
}

//function reset button.
function resetValues() {
  document.getElementById("ramDropdown").value = "4";
  document.getElementById("cpuDropdown").value = "2";

  document.getElementById("minRam").value = "8";
  document.getElementById("minCpu").value = "4";

  const submitButton = document.getElementById("submitButton");
  submitButton.style.backgroundColor = "";
  submitButton.innerText = "Submit";

  document.getElementById("result").innerText = "";
}
