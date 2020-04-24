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

//Creates a stack
var stack = function() {
    this.count = 0;
    this.storage = {};


    //Add a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack

    this.pop = function() {
        if (this.count === 0) {
            return this.undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }


    this.size =
        function() {

            return this.count;

        }

    //Returns the value at the end of the stack
    this.peek = function(value) {
        return this.storage[this.count - 1];
    }
}


var myStack = new stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freecodeCamp")
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


//Sets