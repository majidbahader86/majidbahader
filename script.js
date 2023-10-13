// script.js

function showMessage() {
    alert("Hello, Are you there!");
}

document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the submit button
    document.querySelector("button[type='submit']").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Get the input values
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("secondname").value;

        // Display a message using the JavaScript function
        showMessage();
    });
});