7kyu - Basic Math (Add or Subtract)

function calculate(str){
  const newStr = str.replaceAll('plus', '+').replaceAll('minus', '-')
  return eval(newStr).toString()
}

console.log(calculate('1plus2plus3plus4'))