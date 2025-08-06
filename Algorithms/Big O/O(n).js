// O of (n) means the size of data = the time of running code
// Here we have 5 example of names and we need to find one name so it take less time bcz data is less
// but instead of this we have around 500 or larger data so it will take more time to process
// so time of running code depends on the size of data

const allstudent = ["wasim", "rihan", "luffy", "zoro", "sanji"];
const findstudent = (allstudent, studentname) => {
    for (let i = 0; i < allstudent.length; i++) {
        if (allstudent[i] === studentname) {
            console.log(`Student ${studentname} found at index of ${i}`)
        }
    }
}
findstudent(allstudent, "wasim")