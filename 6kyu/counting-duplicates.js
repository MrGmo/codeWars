function duplicateCount(text){
  text = text.toLowerCase()
  let obj = {}
  
  for(let i = 0; i < text.length; i++){
    let letter = text[i]
    if(obj[letter] > 0){
      obj[letter]++
    }else{
      obj[letter] = 1
    }
  }
  return Object.values(obj).filter(x => x > 1).length
}