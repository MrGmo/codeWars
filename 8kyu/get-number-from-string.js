function getNumberFromString(s){
  let num = s.replace(/[\D]/g, '')
  return Number(num)
}