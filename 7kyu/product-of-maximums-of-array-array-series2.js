function maxProduct(numbers, size){
  numbers.sort((a, b) => a - b)
  return numbers.slice(-size).reduce((a, b) => a*b)
}