// let iAmGlobal = 'somevalue'

// if (true) {
//     var iAmLocal = 'someMoreValue'
//     iAmGlobal = 'superman'
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// } 


// //var - bad, makes variables globally accessibly from inside the scope
// //let - good, globally accessible if made global, locally accessible if made locally

//kings terrirtory problem
let king = 'Juan'

if (true) {
    let king = 'Miguel'

    if (true) {
        king = 'Ram'
        console.log(king);
    }
} 
if (true) {
    console.log(" I am second part: " + king);
}