    // The function correctly identifies a palindrome with all lowercase letters.
    it('should correctly identify a palindrome with all lowercase letters', () => {
        // Arrange
        document.body.innerHTML = `
          <input type="text" id="userInput" value="racecar">
          <div id="result"></div>
        `;
    
        // Act
        checkPalindrome();
    
        // Assert
        expect(document.getElementById('result').innerHTML).toBe('<p>"racecar" is a palindrome!</p>');
      });