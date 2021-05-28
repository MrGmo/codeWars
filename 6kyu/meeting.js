function meeting(str){
  let newArr = []
  let newStr = str.toUpperCase().replace(/([\w]+):([\w]+)/g, '$2 $1').split(';').sort((a, b) => { return a > b ? 1 : -1});

  for(let i = 0; i < newStr.length; i++){
    newArr.push('(' + newStr[i].replace(' ', ', ') + ')')
  }
  return newArr.join('')
}