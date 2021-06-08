String.prototype.toAlternatingCase = function(){
  let alternatedCase = ""
  
  for (i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      alternatedCase += this[i].toUpperCase();
    } else {
      alternatedCase += this[i].toLowerCase();
    }
  }
  
  return alternatedCase;
}