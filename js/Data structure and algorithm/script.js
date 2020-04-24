/*Stacks*/

var letters = [];
// var word = "racecar";
var word = "code";
var rword = "";

//put letters of word in stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

//Pop off the stack in reverse
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome");

} else {
    console.log(word + 'is not a palindrome');
}