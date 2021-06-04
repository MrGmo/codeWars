function letterCount(s){
  let obj = {}
    for(let char of s){
      if(obj[char] > 0){
        obj[char]++
      }else{
        obj[char] = 1
      }
    }
      return obj
  }