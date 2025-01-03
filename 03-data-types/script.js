// String Data type 
let myName = "Paras";
let lastName = 'Chhetri'

// Number Data type
let rollNum = 21;
let floatNum = 21.7;
console.log(floatNum)
let floatNum2 = 21.0;
console.log(floatNum2)
let myNumStr = '10';
console.log(myNumStr);

// type checking
console.log(typeof myNumStr);

// Boolean Data type
let boy = true;
let hungary = false;
let x = 14>80
console.log(x);
let z = 12 == 14;
console.log(z)

// Undefined Data type
let age;
console.log(age);
console.log(age ?? "i will not print undefined, as i am best way to add some content or optional data")

// Null Data type
let number = null;
console.log(number);
console.log(typeof number); // this is a unknown bug in js as its result is object but the data type is null

// Js says null is equal to undefined :=> 
console.log(null == undefined)

// Object Data type
let friends = {
    first : "Dipanshu",
    second : "Nandish",
    thrid : "Anchal",
    fourth : "Diksha",
    fifth : "Rajan",
    sixth : "Deepi",
    seventh : "Tanisha",
    total : 7,
    real : true,
    range : 19.6
};
console.log(friends);
console.log(typeof friends);

// Array Data type
let arrOfNums = [1,3,5,6,8];
console.log(arrOfNums);
console.log(typeof arrOfNums);

// Function Data type
function myMsg() {
    console.log("gelo");
}
myMsg();
console.log(typeof myMsg); // type will be function but it is also a object

// Poof that fucntions are also objects but special type of objects
function toProof() {
    console.log("helo i am function");
}
// now let us call this function
// toProof(); // see the output

// now add some new property to our function
toProof.mySelf = "Paras Chhetri";

// time to see the output
console.log(toProof.mySelf);

// now let's check the length of this function;
console.log(toProof.length);

function greet() {
    console.log("Hello!");
}

// Adding a property to the function
greet.language = "English";

// Accessing the property
console.log(greet.language); // Output: English
