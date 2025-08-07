// Mutliplication Table it is very easy it just need formatted printing 
// it's is possible in javascript by using backticks (` `)
const printTable = number => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}
printTable(5); // print all formatted table 