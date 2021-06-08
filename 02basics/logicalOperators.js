// && - AND operator - Both sides need to be true
// || - Or operator - One side need to be true 
// ! - NOT operator - reverses boolean value
let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
console.log('Greeting message to use')
console.log('Grant access to paid course')
} else if (isVerified || isGuest) {
    console.log('Allow free previews')
} else{
    console.log('Please contact admin')
}
