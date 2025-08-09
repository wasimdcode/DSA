const findMissNumber = sequence => {
    let seq = sequence.sort((a,b)=> a - b);
    for(let i = 0; i < sequence.length; i++){
        for(let j = i; j < sequence.length + 1; j++){
            if(seq[i] === j){
                break;
            }
            else{
                return j;
            }
        }
    }
    return seq[seq.length - 1]+1
}
console.log(findMissNumber([0,1,2]))