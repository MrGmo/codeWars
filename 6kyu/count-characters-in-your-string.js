function count (string) {  
  let obj = {}
    for(let char of string){
      if(obj[char] > 0){
        obj[char]++
      }else{
        obj[char] = 1
      }
    }
      return obj
  }