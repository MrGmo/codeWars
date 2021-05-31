function sumCubes(n){
  let arr = []
  for(let i = 0; i <= n; i++){
    arr.push(i**3)
  }
  return arr.reduce((a, b) => a + b, 0)
}