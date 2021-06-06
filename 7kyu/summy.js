function summy(stringOfInts){
  let count = 0
  let arr = stringOfInts.split(' ')
    for(let num of arr){
      count+=Number(num)
    }
    return count
  }