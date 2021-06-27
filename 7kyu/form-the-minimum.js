function minValue(values){
  let newArr = [...new Set(values)]
  newArr.sort((a, b) => a - b)
  return Number(newArr.join(''))
}