// DOM elements
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

// Event listeners for sign-in and sign-up buttons
signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    // Call the sign-in function
    signIn();
}

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    // Call the sign-up function
    signUp();
}

// Function to save user data in local storage
function saveUserData(name, email, password) {
    localStorage.setItem('userData', JSON.stringify({ name, email, password }));
}

// Function to get user data from local storage
function getUserData() {
    const userDataString = localStorage.getItem('userData');
    return userDataString ? JSON.parse(userDataString) : null;
}

// Function to handle sign-up
function signUp() {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    saveUserData(name, email, password);

    // Redirect to the Adversarial ML Evaluation Dashboard
    window.location.href = 'Dashboard.html';
}

// Function to handle sign-in
function signIn() {
    const storedUserData = getUserData();

    if (storedUserData) {
        // You should implement proper authentication logic here

        // Redirect to the Adversarial ML Evaluation Dashboard
        window.location.href = 'Dashboard.html';
    } else {
        alert('User data not found. Please sign up first.');
    }
}
