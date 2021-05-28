function isVow(a){
  const result = []
  for(let i = 0; i < a.length; i++) {
    if (a[i]===97 || a[i]===101 || a[i]===105 || a[i]===111 || a[i]===117) {
      result.push(String.fromCharCode(a[i]));
    } else {
      result.push(a[i]);
    }
  }
    return result;
}