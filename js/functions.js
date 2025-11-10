function checkStringLength(string = '', maxSymbols = 1) {
  return (string.length <= maxSymbols);
}

checkStringLength('проверяемая строка', 20);

function isPalindrome(string = '') {
  string = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for(let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return string === reversed;
}

isPalindrome('Лёша на полке клопа нашёл ');

function extractNumbers(string) {
  let result = '';

  string = string.toString();

  for(let i = 0; i <= string.length - 1; i++) {
    if(Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
}

extractNumbers('2023 год');
