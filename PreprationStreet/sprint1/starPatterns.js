// Printing star patterns with the nexted loops 
const printStars = name => {
    switch (name) { // using switch case for printing different patterns in same file
        case "rightTriangle": // name of the patterns
            for (let i = 1; i <= 5; i++) { // i is the rows of our pattern or matrix
                let stars = ""; // Variable for adding the next line 
                for (let j = 1; j <= i; j++) { // j is the columns to fill 
                    stars += "*" // it will insert all the stars in var 
                }
                console.log(stars); // Print the stars after loop ends
            }
            break; // Breaks the case
        case "reverseTriangle":
            for (let i = 5; i >= 1; i--) {
                let stars = "";
                for (let j = 1; j <= i; j++) {
                    stars += "*"
                };
                console.log(stars);
            };
            break;
        case "rightside":
            for (let i = 5; i >= 1; i--) {
                let stars = "";
                for (let j = 1; j <= 5; j++) {
                    if (j > i) {
                        stars += "*"
                    } else {
                        stars += " "
                    }
                }
                console.log(stars)
            }
            break;
        case "leftside":
            for (let i = 5; i >= 1; i--) {
                let stars = "";
                for (let j = 0; j < 5; j++) {
                    if (j < i) {
                        stars += "*"
                    }
                    else {
                        stars += " ";
                    }
                }
                console.log(stars)
            }
            break;
        case "pyramid":
            for (let i = 5; i >= 1; i--) {
                let stars = "";
                for (let j = 1; j <= 9; j++) {
                    if (j < i || j > 10 - i) {
                        stars += " ";
                    }
                    else {
                        stars += "*";
                    }
                }
                console.log(stars);
            }
            break;
    }
}
// printStars("rightTriangle");
// printStars("reverseTriangle");
// printStars("rightside");
// printStars("leftside");
// printStars("pyramid");
// printStars("diamond");