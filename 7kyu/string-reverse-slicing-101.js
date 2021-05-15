7kyu - String reverse slicing 101

function reverseSlice(str) {
  let arr = []
  let newStr = str.split('').reverse().join('')
  for(let i = 0; i < newStr.length; i++){
    arr.push(newStr.slice(0+i))
  }
  return arr
}