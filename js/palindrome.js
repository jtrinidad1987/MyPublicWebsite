/**
 * Checks if the input string is a palindrome.
 *
 * @function checkPalindrome
 * @returns {void}
 *
 * @description
 * This function takes the value from an input field with the id 'userInput',
 * removes any non-alphanumeric characters, converts it to lowercase, and checks
 * if it's a palindrome. The result is then displayed in an element with the id 'result'.
 *
 * @example
 * checkPalindrome();
 */
/**
 * Checks if the input string is a palindrome.
 *
 * @function checkPalindrome
 * @returns {void}
 *
 * @description
 * This function takes the value from an input field with the id 'userInput',
 * removes any non-alphanumeric characters, converts it to lowercase, and checks
 * if it's a palindrome. The result is then displayed in an element with the id 'result',
 * after sanitizing the input to prevent XSS attacks.
 *
 * @example
 * checkPalindrome();
 */
function checkPalindrome() {
    const userInput = document.getElementById('userInput').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedInput = userInput.split('').reverse().join('');
    const resultElement = document.getElementById('result');

    // Sanitize the user input to prevent XSS attacks
    const sanitizedInput = escapeHTML(userInput);

    if (userInput === reversedInput) {
        resultElement.innerHTML = `<p>"${sanitizedInput}" is a palindrome!</p>`;
    } else {
        resultElement.innerHTML = `<p>"${sanitizedInput}" is not a palindrome.</p>`;
    }
}

/**
 * Escapes special characters in a string to prevent XSS attacks.
 *
 * @function escapeHTML
 * @param {string} str - The input string to sanitize.
 * @returns {string} - The sanitized string.
 */
function escapeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}