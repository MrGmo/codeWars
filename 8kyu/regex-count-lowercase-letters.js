function lowercaseCount(str){
  let clean = str.replace(/[^a-z]/g, '')
  return clean.length
}