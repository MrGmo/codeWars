function squareDigits(num){
  num = num.toString().split('')
  let arr = []
  for(let numz of num){
    arr.push(numz**2)
  }
    return Number(arr.join(''))
}