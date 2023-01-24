function londonCityHacker(journey) {
  //create sum
  let sum = 0;

  //iterate through journey
  for (let i = 0; i < journey.length; i++) {
    
    //strings add 2.4
    if (typeof journey[i] === "string") sum += 2.40;
    else {
      
      //not a string? add 1.5
      sum += 1.50;
      
      //after adding 1.5, check if it has a number directly after it. if so, lets skip an index therefore making that next bus free.
      if (typeof journey[i + 1] === "number") i++;
    }  
  }
  
  //concatenate and return with fixed decimal
  return `£${sum.toFixed(2)}`;
}
