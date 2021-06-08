let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

// let result = myAdder (3, 5)
// console.log(result);

let myMultiplyer = function(num1, num2){
    return num1 * num2
}

let guestUser= function(name = 'unName', courseCount = 0){
    return 'Hello ' + name + 'and your course count it' + courseCount
 }

 console.log(guestUser('John', 1));