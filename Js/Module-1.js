// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {      
//     case "null":
//     message = "Canceled by user!";
//     break;
//     case "ADMIN_PASSWORD":
//     message = "Welcome!";
//     break;
//     default: message = "Access denied, wrong password!"
//     // Change code above this line
//   return message;
// }}
function getShippingCost(country) {
  let message;
  // Change code below this line
  switch(country){
  case country:
  message = `Shipping to ${country === China} will cost ${100} credits`;
  break;
  case Chile:
  message = `Shipping to ${Chile} will cost ${250} credits`;
  break;
  case Australia:
  message = `Shipping to ${Australia} will cost ${170} credits`;
  break;
  case Jamaica:
  message = `Shipping to ${Jamaica} will cost ${120} credits`;
  break;
  default: message = "Sorry, there is no delivery to your country";  
}
  // Change code above this line
  return message;
}

console.log(getShippingCost("Australia"));