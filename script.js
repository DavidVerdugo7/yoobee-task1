function EvaluateSysInfo() {
  const ram = document.getElementById("ramDropdown").value;
  const cpu = document.getElementById("cpuDropdown").value;
  const result = "Your system has " + ram + "GB of RAM and " + cpu + " cores.";

  // Display the result
  document.getElementById("result").innerText = result;
}
