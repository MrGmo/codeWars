function multiplyAll(arr){
  const fun = function(n){
    return arr.map(x => x * n)
  }
  return fun
}