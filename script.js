document.getElementById('check-btn').addEventListener('click', function() {
    const phoneNumber = document.getElementById('user-input').value.trim();
    const resultDiv = document.getElementById('results-div');

    // Check if the input is empty
    if (!phoneNumber) {
        alert("Please provide a phone number");
        return;
    }

    // Define the regex pattern for validating a valid US phone number
    const validPhonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/;

    // Check if the number matches the valid phone number pattern
    if (validPhonePattern.test(phoneNumber)) {
        resultDiv.textContent = `Valid US number: ${phoneNumber}`;
        resultDiv.classList.remove('invalid');
        resultDiv.classList.add('valid');
    } else {
        resultDiv.textContent = `Invalid US number: ${phoneNumber}`;
        resultDiv.classList.remove('valid');
        resultDiv.classList.add('invalid');
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});