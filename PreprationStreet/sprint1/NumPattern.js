let output = "";
let currentNumber = 1;

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        output += currentNumber + " ";
        currentNumber++;
    }
    output += "\n"; // Add a line break after each row
}

console.log(output);