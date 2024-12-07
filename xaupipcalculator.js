// Function for Pip Value Calculation
function calculatePipValue() {
  const pips = parseFloat(document.getElementById("pips").value);
  const units = parseFloat(document.getElementById("units").value);
  const pipSize = parseFloat(document.getElementById("pipSize").value);

  if (isNaN(pips) || isNaN(units) || isNaN(pipSize)) {
    document.getElementById("result").textContent = "Invalid input. Please try again.";
    document.getElementById("pipValue").textContent = "Single Pip Value: US$0.00";
    return;
  }

  // Calculate single pip value
  const singlePipValue = units * pipSize;

  // Calculate total pip value
  const totalPipValue = singlePipValue * pips;

  // Display results
  document.getElementById("result").textContent = `Total Pip Value: US$${totalPipValue.toFixed(2)}`;
  document.getElementById("pipValue").textContent = `Single Pip Value: US$${singlePipValue.toFixed(2)}`;
}

// Function for Pip Movement Calculation
function calculatePips() {
  const startPrice = parseFloat(document.getElementById('start-price').value);
  const endPrice = parseFloat(document.getElementById('end-price').value);

  if (isNaN(startPrice) || isNaN(endPrice)) {
    alert("Please enter valid numbers for both prices.");
    return;
  }

  const pipMovement = Math.abs(startPrice - endPrice) / 0.01;
  document.getElementById('pipMovementResult').textContent = `The price moved ${pipMovement.toFixed(1)} pips.`;
}
