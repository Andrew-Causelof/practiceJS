function isPalindrome(string) {
    console.log('Строка на входе функции', string);
    //if (string.length === 0) { return false }
    if (string.length < 2) { return true }

    if (string[0] === string[string.length - 1]) {
        console.log('Строка на входе рекурсии',string);
        return isPalindrome(string.substring(1, string.length - 1));
      }
    return false;
}

console.log(isPalindrome('aa'));




