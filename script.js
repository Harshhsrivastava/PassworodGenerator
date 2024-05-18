const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const toggleBtn = document.getElementById('toggle-btn');
const generateBtn = document.getElementById('generate-btn');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
    let charset = '';
    if (uppercaseCheckbox.checked) charset += uppercase;
    if (lowercaseCheckbox.checked) charset += lowercase;
    if (numbersCheckbox.checked) charset += numbers;
    if (symbolsCheckbox.checked) charset += symbols;

    let password = '';
    for (let i = 0; i < lengthInput.value; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    passwordInput.value = password;
}

function copyPassword() {
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const currentType = passwordField.type;
    passwordField.type = currentType === 'password' ? 'text' : 'password';
    toggleBtn.textContent = currentType === 'password' ? 'Show' : 'Hide';
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
toggleBtn.addEventListener('click', togglePasswordVisibility);