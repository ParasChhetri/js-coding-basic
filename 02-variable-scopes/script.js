// global scope
var x = "My name is paras";
function someExample(){
    console.log(x);
}

console.log(x);

someExample();

// function scope 
function example(){
    var fs = "Paras Chhetri";
    console.log(fs);
}

example();

// console.log(fs); // this will generate errors because the vriable scope is only inside the function block due to its declaration inside the function only, so this variable can only be accessed or used by the function 

// block scope
function anotherExample(){
    if(true){
        let some = 21;
        console.log(some);
    }
    // console.log(some); // this will generate error because we are printing our varible outside the if block, this varibale can only be accessed or used inside the if block only
}

anotherExample();

// this is example of why we should not declare a varibale using var keyword 
function bugs(){
    if(true){
        var genrateBug = "yes i am a bug in your code and i will cause unnessary behaviours! 🤧"
        let perfect = "no i will not generate bugs, as i am perfect way of write a code!";
        console.log(1," => ",genrateBug);
        console.log(1, " => ", perfect);
    }
}

bugs();
// console.log(genrateBug); // this will genrate unnessary bug 😂
