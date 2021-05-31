function validateHello(greetings) {
  res = /hello|ciao|salut|hallo|hola|ahoj|czesc/gi.test(greetings) 
  return res
}