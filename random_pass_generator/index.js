const passwordLength = document.getElementById("length");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const passwordDisplay = document.getElementById("passwordDisplay");

function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = lowercaseChars;
    if (includeUppercase.checked) {
        characterPool += uppercaseChars;
    }
    if (includeNumbers.checked) {
        characterPool += numberChars;
    }
    if (includeSymbols.checked) {
        characterPool += symbolChars;
    }

    // Validate password length
    const length = parseInt(passwordLength.value, 10);
    if (isNaN(length) || length <= 0) {
        passwordDisplay.textContent = "Invalid password length!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    passwordDisplay.textContent = `Your generated password is: ${password}`;
}

