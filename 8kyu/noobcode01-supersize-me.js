8kyu - noobCode01:SUPERSIZE ME

function maxNum(num){
  return num.toString().split('').sort((a, b) => b - a).join('')
}