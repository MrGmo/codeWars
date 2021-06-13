function spinWords(str){
  let newStr = str.split(' ').map(word => word.length >= 5 ? [...word].reverse().join(''):word).join(' ')
  return newStr
  }