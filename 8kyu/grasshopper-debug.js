function weatherInfo(temp){
  const celsius = (temp - 32) * (5/9)
  
  if(celsius > 0){
    return (celsius + " is above freezing temperature")
  }else{
    return (celsius + " is freezing temperature")
  }
}