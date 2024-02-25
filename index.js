// Code your solution in this file!
  function distanceFromHqInBlocks (location) {
    if (location<42){
      return(42-location);
    } else {
    return(location-42);
    }
  }
  console.log(distanceFromHqInBlocks (43));
  console.log(distanceFromHqInBlocks (50));
  console.log(distanceFromHqInBlocks (34));

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
    if(destination>start){
        return((destination-start)*264);
    }else{
        return((start-destination)*264);
    }
    
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, destination) {
        //the first four hundred feet are free
        //distance between 400 and 2000 feet, the price is 2 cents per food
        //no ride over 2500 feet
        let travelledDistance=distanceTravelledInFeet(start,destination);
        let freeFare=400;
        let flatRate=25;
        let fareDiscounted=travelledDistance-freeFare;
        let farePrice=0;
        if(travelledDistance<400){
            farePrice=0;
            return farePrice;
        }else if(travelledDistance>400 && travelledDistance<2500){
            if(travelledDistance>2000 && travelledDistance<2500){
                return flatRate;
            }else{
                return (fareDiscounted*2)/100;
            }
        }else{
            return ("cannot travel that far");
        }
}

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));



