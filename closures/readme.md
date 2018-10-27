INSTRUCTIONS FOR CLOSURES EXERCICES 

Closures, Scope, and Execution Context
Challenge 1
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
var function1 = createFunction();
// now we'll call the function we just created
function1(); //should console.log('hello');
  
When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
var printSample = createFunctionPrinter('sample');
var printHello = createFunctionPrinter('hello')
// now we'll call the functions we just created
printSample(); //should console.log('sample');
printHello(); //should console.log('hello');
Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing.
Challenge 4
Now we are going to create a function addByX that returns a function that will add an input by x.
var addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

var addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

var addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
Extension: Challenge 5
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
Extension: Challenge 6
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
Extension: Challenge 7
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();


 
//////////////////////////////////////
/////////////////////////////////////

SOLUTIONS FOR CLOSURES EXERCICES

// CHALLENGE 1 //

function createFunction() {
    return function () {
        console.log('hello');
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1();

///////////////////////////////////////////////////////////////////////////

// CHALLENGE 2 //

function createFunctionPrinter(input) {
    return function () {
        console.log(input);
    }

}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();

///////////////////////////////////////////////////////////////////////////

// CHALLENGE 3 //

//follow the instructions to solve this problem. Look back at the video if you are unsure of why this is occurring. 

///////////////////////////////////////////////////////////////////////////

// CHALLENGE 4 //

function addByX(x) {
    return function (y) {
        return x + y;
    }
}

var addByTwo = addByX(2);


// now call addByTwo with an input of 1
console.log(addByTwo(1)) //--> 3

// now call addByTwo with an input of 2
console.log(addByTwo(2)) //--> 4

///////////////////////////////////////////////////////////////////////////

// EXTENSION: CHALLENGE 5 //

function once(func) {
    let called;
    let executed = false;
    return function (num) {
        if (executed === false) {
            called = func(num);
            executed = true;
        }
        return called;
    }
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6

///////////////////////////////////////////////////////////////////////////

// EXTENSION: CHALLENGE 6 //

function after(count, func) {
    let callMe = 1;
    return function () {
        if (callMe < count) {
            callMe++;
            return callMe
        } else {
            func();
        }
    }
}

var called = function () { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


///////////////////////////////////////////////////////////////////////////

// EXTENSION: CHALLENGE 7 //

function delay(func, wait) {
    setTimeout(func, wait);
}

function displayTwo() { console.log(2) };
delay(displayTwo, 3000); //--> displays 2 after 3000 milliseconds (3 seconds)