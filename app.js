// app.js
document.addEventListener('DOMContentLoaded', function () {
  // Add event listener to the form submission
  const form = document.querySelector('.form-signin');
  form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();

  // Check if all fields are filled
  const fName = document.querySelector('input[name="fName"]').value;
  const lName = document.querySelector('input[name="lName"]').value;
  const email = document.querySelector('input[name="email"]').value;

  // Email validation using a simple regular expression pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(email);

  if (fName.trim() === '' || lName.trim() === '' || !isEmailValid) {
    // If any of the fields are empty or email is invalid, do nothing
    return;
  } else {
    // If all fields are filled and email is valid, redirect to success.html
    window.location.href = 'success.html';
  }
}
