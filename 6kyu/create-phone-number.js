function createPhoneNumber(numbers){
  let str = numbers.join('')
  let area = str.slice(0, 3)
  return '(' + area + ')' + ' ' + str.slice(3, 6) + '-' + str.slice(6, 10)
}