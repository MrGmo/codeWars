function solve(s){
  let numCap = s.replace(/[^A-Z]/g, '').length
  let numLow = s.replace(/[^a-z]/g, '').length
  if(numCap === numLow){
    return s.toLowerCase()
  }else if(numCap > numLow){
    return s.toUpperCase()
  }else{
    return s.toLowerCase()
  }
}