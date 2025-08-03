function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numberChars = '0123456789';
      const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
      
      let allowedChars = '';
      let password = '';
      if (includeLowercase) allowedChars += lowercaseChars;
      if (includeUppercase) allowedChars += uppercaseChars;
      if (includeNumbers) allowedChars += numberChars;
      if (includeSymbols) allowedChars += symbolChars;

      if (length < 1 || allowedChars.length === 0) {
        return 'Invalid parameters';
      }

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
      }

      return password;
    }

    function handleGenerate() {
      const length = parseInt(document.getElementById('length').value);
      const includeLowercase = document.getElementById('lowercase').checked;
      const includeUppercase = document.getElementById('uppercase').checked;
      const includeNumbers = document.getElementById('numbers').checked;
      const includeSymbols = document.getElementById('symbols').checked;

      const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

      document.getElementById('result').textContent = password;
}