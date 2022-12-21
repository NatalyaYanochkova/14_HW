/*1. isPalindrome(str);
The method should return true if string is polindrome and false if is not.
The method must be case insensitive.

Examples:
    "aba" -> true
"abcd" -> false
"aa aa" -> true
"Abba" -> true
"  Abba  " -> true*/

const inputValue = document.getElementById('palindrome_input');
const span = document.getElementById('palindrome_res');

function checkPalindrome() {
    if (inputValue.value !== '') {
        isPalindrome()
    } else {
        alert('Please, input string')
    }
}

function isPalindrome(str) {
    const arr = inputValue.value.split("");
    let reverseArr = inputValue.value.split("").reverse();
    if (JSON.stringify(arr).toLowerCase() == JSON.stringify(reverseArr).toLowerCase()) {
        span.textContent = "Yes, it is palindrome"
    } else {
        span.textContent = "No, it's not palindrome"
    }
}

/*2. reverseString(str)
The method takes a string and returns a new string,
 which will be the reverse of the incoming string.

    Example:
"mama" -> "amam"
"Hello world" -> "dlrow olleH"*/
const inputReverseValue = document.getElementById('reverse_input');
const spanReverse = document.getElementById('reverse_result');

function reverseString() {
    if (inputReverseValue.value === '') {
        alert('Please, input string')
    } else {
        reverseString()
    }
}

function reverseString(str) {
    let reverseArr = inputReverseValue.value.split("").reverse();
    let joinArr = reverseArr.join("");
    spanReverse.textContent = joinArr;
}


/*3. countChar(str, c)
The method counts and prints to the console how many
 times the transmitted character occurs in the specified string
Example:
    "Hello world", 'l' -> 3*/
const inputStringValue = document.getElementById('string_value');
const inputCharacterValue = document.getElementById('character_value');
const spanCalc = document.getElementById('res_calc');

function getCount() {
    if (inputStringValue.value === '') {
        alert('Please, input string')
    } else if (inputCharacterValue.value === ''){
        alert('Please, input character')
    } else {
        countChar()
    }
}

function countChar(str, c) {
    let counter = 0;
    let arr = inputStringValue.value.split("");
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === inputCharacterValue.value)
            counter++;
        spanCalc.textContent = counter;
    }
}
