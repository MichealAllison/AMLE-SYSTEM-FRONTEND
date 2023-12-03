// previous_attacks.js

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

document.addEventListener('DOMContentLoaded', function () {
    // Show a loading state until the data is fetched
    showLoadingState();

    // Fetch previous attacks from the backend (replace this with your API endpoint)
    fetch('https://your-backend-api/previous-attacks')
        .then(response => response.json())
        .then(data => {
            // Hide the loading state and display the attacks
            hideLoadingState();
            displayPreviousAttacks(data);
        })
        .catch(error => {
            // Hide the loading state and display an error message
            hideLoadingState();
            console.error('Error fetching previous attacks:', error);
            displayErrorState();
        });
});

function showLoadingState() {
    const container = document.getElementById('previousAttacksContainer');
    container.innerHTML = '<p class="loading">Loading...</p>';
}

function hideLoadingState() {
    // Clear the loading state
    const container = document.getElementById('previousAttacksContainer');
    container.innerHTML = '';
}

function displayErrorState() {
    const container = document.getElementById('previousAttacksContainer');
    container.innerHTML = '<p class="error">Error fetching previous attacks. Please try again later.</p>';
}

function displayPreviousAttacks(attacks) {
    const container = document.getElementById('previousAttacksContainer');

    // Check if there are any attacks
    if (attacks.length === 0) {
        container.innerHTML = '<p>No previous attacks found.</p>';
        return;
    }

    // Create a list to display attacks
    const list = document.createElement('ul');

    // Iterate through each attack and create list items
    attacks.forEach(attack => {
        const listItem = document.createElement('li');
        listItem.textContent = `Attack Type: ${attack.type}, Result: ${attack.result}`;
        list.appendChild(listItem);
    });

    // Append the list to the container
    container.appendChild(list);
}
