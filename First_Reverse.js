/*Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function FirstReverse(str) { 
var reverse = '';
    for(var i = str.length - 1; i >= 0; i--)
    reverse += str[i];
    return reverse; 
  return str; 
         
}