/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is '(' if that character appears only once in the original string,
or ')' if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples:
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("
*/

let str = prompt('Введите что-нибудь');
let currentChar = 0;
let newStr = '';

function replaceChar(str, currentChar, newStr) {
    while(currentChar !== str.length) {
        str = str.toLowerCase(str);
        let count = 0;
        let position = str.indexOf(str.charAt(currentChar));

        while(position !== -1) {
            count++;
            position = str.indexOf(str.charAt(currentChar), position+1);
        }

        if(count !== 1) {
            newStr += ')';
            currentChar++;
        } else {
            newStr += '(';
            currentChar++;
        }
    }

    alert(newStr);
}

replaceChar(str, currentChar, newStr);
