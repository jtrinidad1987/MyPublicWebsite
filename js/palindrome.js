function checkPalindrome() {
    const userInput = document.getElementById('userInput').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedInput = userInput.split('').reverse().join('');
    const resultElement = document.getElementById('result');

    if (userInput === reversedInput) {
        resultElement.innerHTML = `<p>"${userInput}" is a palindrome!</p>`;
    } else {
        resultElement.innerHTML = `<p>"${userInput}" is not a palindrome.</p>`;
    }
}