const rotateToMax = n => {
  let str = String(n).split('').sort((a, b) => b - a).join('')
  return Number(str)
  }