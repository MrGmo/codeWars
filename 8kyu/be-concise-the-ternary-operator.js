let describeAge = a => {
  let p = "You're a(n)"
  return a < 13 ? p + " kid": 
  a < 18 ? p + " teenager":
  a < 65 ? p + " adult": p + " elderly"
  }