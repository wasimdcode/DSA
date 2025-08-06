const sentenceCapital = sentence => {
    return sentence.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log(sentenceCapital("who is the be"))