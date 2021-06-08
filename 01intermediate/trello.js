const myTodos = ['Clean Room', 'Pack bags', 'Finish Code', 'Cook dinner', 'check finances']

for (let index = 0; index < myTodos.length; index++) {
    console.log(`Your task number ${index + 1} is: ${myTodos[index + 1]}`);
}

// const myTodos = []

// myTodos.push('Clean Room')
// myTodos.push('Pack bags')
// myTodos.push('finish code')

// myTodos.forEach(function(todo, index){
//     console.log(`Your task no. ${index + 1} is: ${todo}`);
// })












//days.forEach(function (day, index) {
//    console.log(`starts with ${index+1} -- ${day}`);
//})


// short version -
// for (let i = 0; i < days.length; i++) {
//     console.log(day[i]);
// }

//long version - 
//for (let i = 0; i < days.length; i = i + 1) {
//     const element = days[i];
//     console.log(element);
// }

//to reverse, to go from sat to mond
//for (let i = days.length - 1; i >= days.length; i--) {
//    console.log(day[i]);
//}
