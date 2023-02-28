function scuberGreetingForFeet(rideNumber){
  let response 
  if (rideNumber <= 400) {
    response = 'This one is on me!';
  }
  else if (rideNumber <=2000) {
    response = 'That will be twenty bucks.';
  }
  else if (rideNumber>2000) {
    if (rideNumber > 2500) {
        response = 'No can do.';
    }
    else {
      response = 'I will gladly take your thirty bucks.';
    }
  }
  return response;
}

function ternaryCheckCity(cityName){
  let cityResponse

  cityName == "NYC" ? (cityResponse = 'Ok, sounds good.') : (cityResponse = 'No go.');

  return cityResponse
  
}

function switchOnCharmFromTip(guest){
  let charming
  guest == 'generous'  ? (charming = 'Thank you so much.') : (
    guest == 'not as generous' ? (charming = 'Thank you.') : (charming = 'Bye.')
  );
  
  return charming;
}

/*First function as ternary

function scuberGreetingForFeet(rideNumber){
  let response
  
  rideNumber <= 400 ? (response = 'This one is on me!') : (
    rideNumber <= 2000 ? (response = 'That will be twenty bucks.') : (
      rideNumber > 2000 ? (
        rideNumber > 2500 ? (response = 'No can do.') : (response = 'I will gladly take your thirty bucks.')
      ) : (response = 'This situation is impossible.')
    )
  );
  return response;

}*/
