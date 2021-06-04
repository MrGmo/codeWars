function charFreq(message) {
  let obj = {}
    for(let char of message){
      if(obj[char] > 0){
        obj[char]++
      }else{
        obj[char] = 1
      }
    }
      return obj
  }