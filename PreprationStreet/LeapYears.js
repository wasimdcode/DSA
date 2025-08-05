const isLeapYear = year => {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `Yess It is a leap Year ${year}`
    }else{
        return `No It's Not a leap Year ${year}`
    }
}
console.log(isLeapYear(2020))
console.log(isLeapYear(2021))