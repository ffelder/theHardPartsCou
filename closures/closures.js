// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
  return function (){
    console.log('hello')
  }
   
}

 //UNCOMMENT THESE TO TEST YOUR WORK!
 var function1 = createFunction();
 function1();



function createFunctionPrinter(input) {
   return function(){
      console.log(input);
   }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 var printSample = createFunctionPrinter('sample');
 printSample();
 var printHello = createFunctionPrinter('hello');
 printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

 willCounter();
 willCounter();
 willCounter();

 jasCounter();
 willCounter();



function addByX(x) {
    return function (n) {
   
   console.log(x+n);
   
 }
}

var addByTwo = addByX(2);

 //now call addByTwo with an input of 1

addByTwo(1);
// now call addByTwo with an input of 2

addByTwo(2);

var addByThree=addByX(3);
addByThree(1)

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {

}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


function after(count, func) {

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


function delay(func, wait) {

}
