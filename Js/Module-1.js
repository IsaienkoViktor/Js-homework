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
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch(country){
//   case country:
//   message = `Shipping to ${country === China} will cost ${100} credits`;
//   break;
//   case Chile:
//   message = `Shipping to ${Chile} will cost ${250} credits`;
//   break;
//   case Australia:
//   message = `Shipping to ${Australia} will cost ${170} credits`;
//   break;
//   case Jamaica:
//   message = `Shipping to ${Jamaica} will cost ${120} credits`;
//   break;
//   default: message = "Sorry, there is no delivery to your country";
// }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));
//TODO:===================================
//При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));
// function getSubstring(string, length) {
//   const substring = string.slice(0, 4.length); // Change this line

//   return substring;
// }
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length >= maxLength) {
    result = message.slice(0, maxLength);
  } else {
    result = message.slice(0, maxLength) + "...";
  }{
    
  }
  /// Change code above this line
  return result;
}

