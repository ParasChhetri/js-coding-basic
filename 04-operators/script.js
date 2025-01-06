// Arithametic operator
let sum = 10 + 12;
console.log(sum);

let sum2 = 12 * 10 - 12;
console.log(sum2);

let modu = 10 % 3;
console.log(modu);

let expo = 2 ** 3;
console.log(expo);

// Assignment operator
let x = 12;
x += 12; // same goes with subtraction, multiplication, division and all the artimatic operators
console.log(x);

x**= 2;
console.log(x);

// Increment and decrement operator
let z = 12;
console.log(++z);
console.log(z)
console.log(--z);
console.log(z)
console.log(z++);
console.log(z)
console.log(z--);
console.log(z)

// comparision operator
let first = 12;
let second = 34;
let third = 34;
let firstWord = "Zenetsu";
let secondWord = "Tanjiro";
let thirdWord = "wayne";
console.log(first < second); // lesser than
console.log(first > second); // grater than
console.log(first == second == third); // first get compared with second and then results in false then gets comapred wtih third which also results in false
console.log(firstWord < secondWord); // character code are compared
console.log(firstWord > secondWord); // charcter code are compared
console.log("a" < "A");
console.log(12 < "a");
console.log(12 < "A");
console.log(12 > "a");
console.log(second !== third);
console.log(!firstWord);
console.log(!first);

let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);
console.log(a !== b);

// logial operators
console.log(1 && 0);
console.log(0 && 0);
console.log(1 && 0);
console.log("a" && 0);
console.log("a" && 1);
console.log(1 && "a");
console.log(0 || 1);
console.log("a" || 1);
console.log(!0);

// BASIC LEVEL
// Write a function that returns true only if the age is 18 or older and person is a citizen
const isElegibleToVote = (age, citizenship) => {
    if(age >= 18 && citizenship === true){
        return true;
    }
    return false;
}
console.log(isElegibleToVote(19,true));

// Write a function which returns true if the person age is 18 or above and has a explicit permission 
const asscessContent = (age, persmission) => {
    if(age >= 18 || persmission === true){
        return true;
    }
    return false;
}
console.log(asscessContent(16, false));

// write a function that returns true if the person is not adult
const checkIfAdult = (age) => {
    if(!age >= 18){
        return false;
    }
    return true;
}
console.log(checkIfAdult(12));

// write a function that returs true if the weekday is not sunday, saturday and if it is not a holiday so that the person will know when to open their shop
const checkDay = (day,holiday) => {
    if(day !== "Saturday" && day !== "Sunday" && !holiday) {
        return `${true}, yes you can open shop today`;
    }
    return `${false}, no you can not open shop today`;
}
console.log(checkDay("Monday",false));

// INTERMEDIATE LEVEL
// In the modern day world no one needs wall cock so Nandish wants to upgrade the wall clock hanging in his room, he wants to add some upgrades like the clock should reutrn true when it is working hours i.e 9AM to 5PM and also it shouldn't be a weekend any kind of holiday. So solve his problem.
const clockUpgrade = (workingHour, weekend, holiday) => {
    if(workingHour >=9 && workingHour <= 17 && !weekend && !holiday) {
        return `${true}, working time`
    }
    return `${false}, resting time`
}

// Depanshu wants to check if the user exist or not in his game if the user exists then he wants to know the name of the user and if the user dosen't exists then the programme must return playing as a guest
const checkPlayer = (user) => {
    if(!user) {
        user = user || "playing as a guest"
    }
    return user;
}
console.log(checkPlayer("vv"));

// A very famous resturant owner Rajan wants to ease things in his business, in such a manner that his accountant will know every member with premium membership will get 50% discount coupon and the regular contomers will get 20% dicount coupon while the first timers will get 10% dicount coupon. So help him in his business.
const coupon = (memberType) => {
    let result;
    switch(memberType) {
        case "Premium" :
            result = `coupon50`
            break;
        case "Regular" :
            result = `coupon20`;
            break;
        case "First time" :
            result = `coupon10`;
            break;
        case "" :
            result = `no membership recieved due to empty string`;
            break;
        default :
            result = null;
    }
    return result;
}
console.log(coupon(""));
