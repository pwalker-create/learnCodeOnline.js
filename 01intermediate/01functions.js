let sayHello = function(name) {
    console.log("functioning?")
    console.log(`Hey ${name}`)
}

//sayHello("john")

let fullname = function (firstname, lastname) {
    console.log('Welcome to LCO');
    console.log(`Hapy to meet you ${firstname} ${lastname}`)
}

//fullname ("john", "doe");


let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

// let result = myAdder (3, 5)
// console.log(result);

let myMultiplyer = function(num1, num2){
    return num1 * num2
}

let guestUser= function(name = 'unName', courseCount = 0 /*these are default parameters*/){
    return 'Hello ' + name + ' and your course count is: ' + courseCount
 }

 console.log(guestUser('John', 1));
