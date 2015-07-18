// WHAT IS YOUR TYPE?

// loop through the array types, console.logging the type of each element:
// Use the typeof keyword
// typeof 7; => "number"

var types = [5, "hi", true, false, null, undefined, NaN, [2, 3], { a: 1, b: 2 }];

for (var i = 0; i < types.length; i += 1) {
    // code here
}



// WHAT IS YOUR BOOLEAN?

// 1- loop through the falsies array, console.logging the boolean value of each element:
// Use the double bang !!
// !!6; => true
// !!""; => false

var falsies = ["", 0, null, undefined, NaN];

for (var i = 0; i < falsies.length; i += 1) {
    // code here
}



// THE WINDOW OBJECT

// 2- declare a variable x in chrome console and bind it to the number 5
// 3- type window.x; in the console
// x is now a property of the window object!



// STRING METHODS

var myString = "I love Dev Mountain";

// 4- Bind the third character to a variable
// Use brackets or .charAt


// 5- Bind to a variable a substring that goes from the second character to the seventh
// Use .substring or .slice


// 6- Split myString into an array of words and bind the result to a variable
// Use .split


// 7- Split myString into an array of characters and bind the result to a variable


// 8- Replace the 'o' characters in the sring with 'O' and bind the new string to a variable
// Use .replace



// VARIABLES

// 9- To what evaluates b after these three lines of code? 10 or 11? Why?
var a = 10;
var b = a;
a += 1;


//9.1- to what eveluates yy after these three lines of code? {a:1} or {a:1, b:2}? Why?
var xx = { a: 1 };
var yy = xx;
xx.b = 2;


// 10-  To what value evaluates d? 3 or 4? Why?
var c = 3;
var d = c++;


// 11-  To what value evaluates f? 5 or 6? Why?
var e = 5;
var f = ++e;



// EXPRESSIONS

// 12- What is the value of foo? Why?
var foo = function () {
    return "hello!";
};


// 13- What is the value of bar? Why?
var bar = function () {
    return "hello!";
}();


// 14- What is the value of baz, if we pass 'Will'? Why?
var baz = function (name) {
    "hello, " + name;
};


// 15- What is the value of buzz, if we pass 'Luis'? Why?
var buzz = function (name) {
    "hello, " + name;
}();


// 16- Which is the function declaration and which the function expression?
var someFoo = function () {
    return 8;
};

function someOtherFoo() {
    return 7;
}



// LOGICAL EXPRESSIONS, TRUTHY AND FALSY VALUES

// 17- What do the following expressions evaluate to?
1 > 2;
4 || true;
"" || true;
!undefined || !!"";
0 || 2;
7 || NaN;
false || !false;
2 && false;
"" && true;
0 && NaN;
(NaN || true) && (0 || 7);
(null && 8) || (" " && [1, 2]);
(3 > 6) || (NaN === NaN);


// 18- How do you provide the variable myVar with a fallback/default value of "default"?



// OBJECTS


// 19- Loop through the following object console.logging the NAMES of its properties using a for/in loop:
var o = { a: 1, b: "hello", c: [1, 2, 3], d: function () { return "goodbye!"; } };



// 20- Loop through the following object console.logging the VALUES of its properties using a for/in loop:
var p = { a: 1, b: "hello", c: [1, 2, 3], d: function () { return "goodbye!"; } };



// 21- Add a property "email" with a value "myemail@gmail.com" to the following object:
var erik = { name: "Erik", age: 19 };


// 22- Add to erik the property "happy with his code" with a value of true


// 23- Test erik to check whether he HAS OR INHERITS the property 'name'
// For this you use the in operator
// "x" in { x:1, y:2, z:3 } => true


// 24- Test erik to check whether he HAS OR INHERITS the method 'toString'


// 25- Test erik to check whether he HAS AS OWN the property 'email'
// For this you use the hasOwnProperty() method
// { x:1, y:2, z:3 }.hasOwnProperty("x") => true


// 25- Test erik to check whether he HAS AS OWN the method 'toString'


// ARRAYS

// 26- Iterate through the following array console.logging only the falsy values:
var myArray = [" ", 4, true, null, NaN, "0", 2015];


// 27- Concatenate the following arrays using .concatenate()
var aa = [1, 2], bb = [3, 4], cc = [5, 6];


// 28- Join into a string the elements of the following array:
var hi = ["h", "e", "l", "l", "o"];


// 29- Slice [1,2,3,4,5] so that you obtain the new array [2,3,4]


// 30- Splice [1,2,3,4,5] so that you mutate the array into [1,"2","3","4",5]


// 31- Is .pop() destructive or not? What are its side effects? What does it return?
// Is .push() destructive or not? What are its side effects? What does it return?
// Is .shift() destructive or not? What are its side effects? What does it return?
// Is .unshift() destructive or not? What are its side effects? What does it return?



// HIGHER ORDER FUNCTIONS

// 31- Create a function sumSeven, which takes an integer, and RETURNS the sum of the argument and 7


// 32- Pass sumSeven as an argument to the following invocation and see what it returns:
// Does it modify the array in place, or does it return a new array?
[10, 100, 1000, 10000].map();


// 33- Using .map() square all the numbers in [1,2,3,4,5]


// 34- Create a function isEven, which takes an integer, and RETURNS true if the integer is even, false otherwise


// 35- Pass isEven as an argument to the following invocation and see what it returns:
// Does it modify the array in place, or does it return a new array?
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter();


// 36- Using .filter() return a new array with the values in [1, 25, 3, 14, 10] that are greater than 10.


// 37- Create a function mult, which takes two integers, and RETURNS the numbers multiplied by each other


// 38- Pass mult as an argument to the following invocation and see what it returns:
[1, 2, 3, 4, 5].reduce();


// 39- Using .reduce() obtain the sum of all the values in [1,3,5,7,9]