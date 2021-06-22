function parseF(s) {
  return /[a-z]/gi.test(s) ? null : parseFloat(s);
  }