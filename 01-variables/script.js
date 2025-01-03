var firstName = "Paras";
var firstname = "Andy";

let x = 10; // used to declare block scope variable

if(x>5) {
    let y = 20; // block scope variable, this varible cannot be accesed or print or used outside this block
    console.log(y);
}

const a = 4; // its value cannot be reassigned 
console.log(a);

