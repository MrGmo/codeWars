function missingValues(arr) {
  let x=0;
  let y=0;
  for (let i=0;i<arr.length;i++){
    if (arr.filter(v=>v===arr[i]).length===2) y=arr[i]
    if (arr.filter(v=>v===arr[i]).length===1) x=arr[i]
  }
  return x*x*y
 }