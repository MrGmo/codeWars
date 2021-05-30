function splitOddAndEven(n) {
  let arr = []
  let str = n.toString()
  for (let i=0;i<str.length;i++){
    arr.push(str[i])
    if((str[i]%2==0&&str[i+1]%2!==0||str[i]%2!==0&&str[i+1]%2==0)&&i!==str.length-1){
      arr.push(',')
    }
  }
  return arr.join``.split`,`.map(v=>v*1)
}