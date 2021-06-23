function reverseNumber(n){
  let str = String(n)
    if(n < 0){
      let num = str.split('').reverse()
      let midStep = num.slice(0, num.length-1).join('')
      return Number(midStep) *-1
    }else{
      let num1 = str.split('').reverse().join('')
      return Number(num1)
    }
  }