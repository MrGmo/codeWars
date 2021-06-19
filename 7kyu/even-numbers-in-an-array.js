const evenNumbers = (array, number) => {
  let arr = []
  array.filter(x => x % 2 === 0 ? arr.push(x) : 0)
  return arr.slice(-number)
}