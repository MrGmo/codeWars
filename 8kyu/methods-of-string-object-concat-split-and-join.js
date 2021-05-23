function splitAndMerge(string, separator) {
  let bigStr = string.split(' ')
  let arr = []
  for(let i = 0; i < bigStr.length; i++){
    arr.push(bigStr[i].split(''))
  }
  return arr.join(' ').replace(/,/g, separator)
}