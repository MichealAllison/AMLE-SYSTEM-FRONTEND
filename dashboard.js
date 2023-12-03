function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openParametersForm(attackType) {
    document.getElementById('attackTypeHeader').innerText = attackType + ' Attack';
    document.getElementById('parametersModal').style.display = 'block';
    document.getElementById('parametersForm').style.display = 'block';
}


function closeParametersForm() {
    document.getElementById('parametersForm').style.display = 'none';
}


function runAttack() {
    // Get input values
    const robustModel = document.getElementById('robustModelInput').value;
    const vulnerableModel = document.getElementById('vulnerableModelInput').value;
    const epsilonHigh = document.getElementById('epsilonHighInput').value;
    const epsilonLow = document.getElementById('epsilonLowInput').value;
    const epsilonStop = document.getElementById('epsilonStopInput').value;
    const batchSize = document.getElementById('batchSizeInput').value;

    // Simulate an attack result (replace with your actual logic)
    const attackResult = Math.floor(Math.random() * 11) + 80;

    // Display result
    const resultCard = document.getElementById('resultCard');
    resultCard.innerText = 'Attack Result: ' + attackResult;

    // Change result card color based on the result
    if (attackResult >= 90 && attackResult <= 97) {
        resultCard.className = 'result-card green';
    } else {
        resultCard.className = 'result-card red';
    }

    // Show result section
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
}

// Function to close the result section
function closeResultSection() {
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'none';
}