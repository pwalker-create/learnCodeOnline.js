let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo, meet = 0){
    todo.neetings = todo.meetings + meet
}

let meetDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone + meet
}

//beware of the above, common error of logical flow is by using a double netagive here

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0 
}

letgetSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone
    return `You have ${meetleft} meetings today!`
}

addMeeting(myTodos, 4) 

addMeeting(myTodos, 2)

meetDone(myTodos, 5);

getSummaryOfDay(myTodos);

console.log(getSummaryOfDay(myTodos))