function isPalindrome(line){
  let newLine = line.replace(/[^a-z0-9]/gi, '')
  let lower = newLine.toLowerCase()
  let pali = lower.split('').reverse().join('')
  return lower === pali
}