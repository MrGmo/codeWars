function past(h, m, s){
  if(23 >= h && 59 >= m && 59 >= s){
  return (h * 60 * 60* 1000) + (m * 60 * 1000) + (s *  1000)
  }else{
  return 'Check Input'
  }
}