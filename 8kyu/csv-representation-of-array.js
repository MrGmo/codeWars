function toCsvText(array){
  let arr = []
  for(let i = 0; i < array.length; i++){
    arr.push(array[i] + '\n')
  }
  return arr.join('').replace(/\n$/, '')
}