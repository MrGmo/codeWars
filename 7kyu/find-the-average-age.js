const getAverageAge = list => {
  let num = list.map(x => x.age).reduce((a,b) => a + b, 0)
  return Math.round(num/list.length)
}