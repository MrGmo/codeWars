function switcheroo(x){
  let arr = x.split('')
  let strArr = []
  for(let i = 0; i < arr.length; i++){
  switch(arr[i]){
    case 'a': 
    strArr.push('b');
    break;
    case 'b': 
    strArr.push('a');
    break;
    default: strArr.push('c')
    }
  }
  return strArr.join('')
}