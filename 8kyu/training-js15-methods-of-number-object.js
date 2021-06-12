function howManySmaller(arr,n){
  let twoDecimal = arr.map(x => Number(x.toFixed(2)))
  let fil = twoDecimal.filter(x => x < n)
  return fil.length
}