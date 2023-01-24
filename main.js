//first attempt
//doesnt bundle up pairs... treats 3 in a row as just one fare
//figure out how to reset after a pair and begin new count for doubles

function londonCityHacker(journey) {
  //strings === 2.4
  //bus === 1.5
  // bus,bus === 1.5
  
  //create total
  let total = 0;
  
  //create variables for buses
  let buses = 0;
  let backToBacks = 0;
  
  //add up all strings
  journey.forEach((x, i) => {
    if(typeof x === 'string'){
      total += 2.40
    }
    })
  
          
  //use for loop to find total buses
  for(let i = 0; i < journey.length; i++){
    if(typeof journey[i] === 'number'){
      buses += 1;
    }
  };
  
  //use for loop to find double up on buses
  for(let i = 0; i < journey.length; i++){
    if(typeof journey[i] === 'number' && typeof journey[i+1] === 'number'){
      backToBacks += 1;
    }
  };  
    
  //convert buses to fare
  buses = buses*1.5;
  backToBacks = backToBacks*1.5;
  
  //something like this?
  /*
    if(backToBacks < 1){
    backToBacks = 0
  }else if(backToBacks <= 2){
    backToBacks = 1.5
  }else if(backToBacks <= 4){
    backToBacks = 3
  }else if(backToBacks <= 6){
    backToBacks = 4.5
  }
  */
  
  
  //subtract doubles from total buses. add to total
  total = (total + buses - backToBacks);
  
  //return total with sterling and 2 decimals
  return "£" + total.toFixed(2)
}

/*
function londonCityHacker(journey) {
  let sum = 0;
  
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === "string") sum += 2.40;
    else {
      sum += 1.50;
      if (typeof journey[i + 1] === "number") i++;
    }  
  }
  
  return `£${sum.toFixed(2)}`;
}
*/
