// see all the questions from control_flow.txt file
// Beginner level questions

// question 1
const checkNumber = (num) => {
    if (num < 0) {
        return "negative number"
    }else if (num > 0) {
        return "positive number"
    }else {
        return "number is zero"
    }
}

// Test case for question 1
const testCases = [
    { input: 10, expected: "positive number" },
    { input: -10, expected: "negative number" },
    { input: 0, expected: "number is zero" },
    { input: 0.5, expected: "positive number" },
    { input: -0.5, expected: "negative number" },
    { input: 1e10, expected: "positive number" },
    { input: -1e10, expected: "negative number" },
    { input: NaN, expected: "number is zero" },
];
// testing the question 1
testCases.forEach(({ input, expected }, index) => {
    const result = checkNumber(input);
    console.log(
        `Test Case ${index + 1}: Input = ${input} | Expected = ${expected} | Result = ${result} | ${
            result === expected ? "Passed ✅" : "Failed ❌"
        }`
    );
});



// question 2
const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return "even number"
    }else {
        return "odd number"
    }
}

// console.log(evenOrOdd(121354672))

// question 3
const checkEligibility = (age) => {
    if (age >= 18 && age <= 80) {
        return "Yes, you are eligible"
    }else {
        return "No, you are not eligible"
    }
}

// console.log(checkEligibility(60))

// question 4
const checkDivisible = (num) => {
    if (num % 5 === 0) {
        return "divisible by 5"
    }
    else {
        return "not divisible by 5"
    }
}

// console.log(checkDivisible(9856890140))

// question 5
const checkLarger = (num1, num2) => {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`
    }else {
        return `${num1} is smaller than ${num2}`
    }
}

console.log(checkLarger(123.716,123.72))
