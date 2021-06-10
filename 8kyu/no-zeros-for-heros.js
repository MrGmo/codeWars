function noBoringZeros(n){
  let str = String(n)
  return Number(str.replace(/0+$/,''))
}