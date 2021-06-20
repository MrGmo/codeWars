function DNAtoRNA(dna){
  let split = dna.split('')
  let arr = []
  
  for(let i = 0; i <= split.length; i++){
  switch(dna[i]){
    case 'T':
    arr.push('U');
    break;
    case 'G':
    arr.push('G');
    break;
    case 'C':
    arr.push('C');
    break;
    case 'A':
    arr.push('A');
    break;
    }
  }
  return arr.join('')
}