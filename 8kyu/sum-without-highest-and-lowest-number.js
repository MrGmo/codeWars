function sumArray(array){
  if(!array){
      return 0
  }else{
      let sorted = array.sort((a, b) => a - b)
      let minusTwo = sorted.slice(1, sorted.length-1)
      return minusTwo.reduce((a, b) => a + b, 0)
    }
  }