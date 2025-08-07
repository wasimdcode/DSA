// it's also a easy appraoch to reversing a string without any for loop 
const revString = string => {
    let revString = string.split('').reverse().join(''); // first it will split each character into an array 
    console.log(revString);                             // then for reversing array 
}                                                       // then again convert it itno string
revString("wasim") // Output -> misaw