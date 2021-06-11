function contamination(text, char){
  if(text === null || char === null){
    return ''
  }else{
    return char.repeat(text.length)
  }
}