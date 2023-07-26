// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//    let total
//   total = Number(message.split(" ")) * pricePerWord;
//   return  total;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// const number = true;

// 1. Объявляем переменные
// 2. Пишем уловие для задачи

/**
  |============================
  | пример разветления if 
  |============================
*/

// const payment = Number(prompt("Please enter a sum of current item"));
// let totalSpent = 0 + payment;
// let discount

// if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
// } else if (totalSpent > 1000 && totalSpent < 5000) {
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     discount = 0.1;
// }
// else {
//     discount = 0;
// }
// console.log(`Оформляем заказ на сумму ${totalSpent} вы получаете скидку ${discount * 100} %`);

/**
  |============================
  | Пример цикла FOR
  |============================
*/
// 1.Делаем переменные 

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0 

// // Перебираем работников в цикле

// for (let i = 1; i <= 10; i += 1) {

//     // сгенерить случайную зп 
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     // вывести в лог с сотрудниками 
//     console.log(`ЗП работников ${i} - ${salary}`);
//     // добавить к тоталу 
//     totalSalary += salary;  
    
// }
// // Вывести общий результат 
// console.log(`Общая зп сотрудников ${totalSalary}`);

/**
  |============================
  | Цикл for + continue 
  |============================
*/
// // Создаем переменные из условия
// const min = 0;
// const max = 10;
// let total = 0;
// // Перебераем значения в цикле
// for (let i = 0; i < 10; i += 1) {
// // Остаток при делении
//     if (i % 2 !== 0) {
//         // логика от обратно
//         continue;
//     }
//     console.log(i);
//     total += i;
// }

// console.log(total);

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     const result = message.split(' ');
//     const resultOne = Number(result.length);
   
//     return resultOne * pricePerWord
// }



// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// // concole.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// // concole.log(calculateEngravingPrice("Web-development is creative work", 40))
// // concole.log(calculateEngravingPrice("Web-development is creative work", 20))


// function makeStringFromArray(array, delimiter) {
//     let string = '';
    
//   // Change code below this line
//     string = array.join(delimiter)
    

//   // Change code above this line
//   return string;
// }



// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""))
// // console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"))



// function slugify(title) {
//   // Change code below this line
//   let str = '';
//     str = title.split(' ').join('-').toLowerCase();
//   return str
//   // Change code above this line
// }


// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 1);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(1, fruits.length - 3);

// console.log();
// console.log();
// console.log();

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let array = firstArray.concat(secondArray);
//     let arrayLength = [maxLength];
   
//     if (array > arrayLength) {
      
//         return array.splice(0, maxLength)
//   }
//   else {
//   return array}
//     // Change code above this line
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3))
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2))
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0))



// // Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// // Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// // Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// // Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// // Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// // Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []

// const start = 3;
// const end = 7;

// for (let i = 3 ; i <= 7; i += 1) { // Change this line
//     console.log(i);
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
//   for (let i = 0; i < number.length; i += 1) {
//         total += number(i);
//   }
// console.log(total);

//   // Change code above this line
// }


//     function findLongestWord (string = " ") {
//     const stringSplit = string.split(' ');
//     let longestWord = "";

//     for (const word of stringSplit) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }                                                НЕ ПОНЯТНО
//     return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('The quick brown fox jumped over fdsfdsfdsfdsfdsf the lazy dog'));
// console.log(findLongestWord('The quick brown fox jumped fdsfsdfdsf over the lazy dog'));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
// }
//   return numbers;
// }


// //  НЕ ПОНЯТНО () [] СКОБКИ lj
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// // function createArrayOfNumbers(min, max) {
// //   const numbers = [];
//   for(let i = min;  i <= max; i++)
//     numbers.push(i);
//   return numbers;
// }

// console.log(createArrayOfNumbers(1,3));
// console.log(createArrayOfNumbers(14,17));
// // console.log(createArrayOfNumbers(29,34));

// function filterArray(numbers, value) {
//    // Change code below this line
//     const newArray = [];
    
//     for(let i = 0; i < numbers.length; i += 1){
       
//         if (numbers[i]>value){
//             newArray.push(numbers[i])
//             r
//     }
//                return newArray
//     }

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruit.includes(fruits) // Change this line
// }

// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let array3 = [];
//     for (let i = 0; i < array1.includes(array2); i += 1) {
//         array3.push(array1[i])
//     }
//     return array3
// }
    
// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]))


// const intersection = (array1, array2) => {
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }


// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let pareNumber = []
//     for (let i = start; i <= end; i += 1) {
//       console.log(i);
//       if (i % 2 === 0) {
//           pareNumber.push(i)
//       }
      
// }
//      return pareNumber
//   }

// console.log(getEvenNumbers(2, 4));
    

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//     number = i;
//     return number;
//     }
//   }

  
  // Change code above this line



// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
 
// function includes(array, value) {
//   // Change code below this line
//     for (let i = 0; i <= array.length; index += 1) {
//     console.log(i);
//     if (i === value) {
//       return false
//     }
// return true
// }
//   // Change code above this line



// function contains(array, value) {
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }


// console.log(contains([1, 2, 3, 4, 5], 3));
// console.log(contains([1, 2, 3, 4, 5], 17));
// console.log(contains(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(contains(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(contains(["apple", "plum", "pear", "orange"], "plum"));
// console.log(contains(["apple", "plum", "pear", "orange"], "kiwi"));
// console.log(contains(["appfsdfle", "plufdsfm", "pearfsdf", "oranfsdfge"], "kiwi"))


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // "Jamaica"

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// console.log(apartment);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
// }


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// for (const key in apartment) {
//      const elements = [key];
//         console.log(elements);
//     }
// for (const key in apartment) {
//         const element = [apartment[key]];
//         console.log(element);
//     }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = []
// for(const key in apartment){
//     keys.push(key)
//     values.push(apartment[key])
//     console.log(keys);
//     console.log(values);
// }




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(key)
// }

// console.log(values);


// function countProps(object) {
//   // Change code below this line
  
//   const keys = Object.keys(object);
//   for(const key of keys)
//   return propCount;
//     }
    
  
  
//   // Change code above this line


// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const feed = {
// title: "The Last Kingdom",
// author: "Bernard Cornwell",
// genres: ["historical prose", "adventure"],
// rating: 8.38,
// }

// let total = 0
// const keys = Object.keys(feed);
// for (const key of keys)
//     key += 1

// console.log(keys);


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   if (object.hasOwnProperty(key)){
//     propCount += 1;                                            // ДОДАЄ 1 на кожну ВЛАСТІВІСТЬ hasOwnProperty
//   }
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
      
// function countProps(object) {
//   // Change code below this line
//   let count = 0
//   const keys = Object.keys(object);
//        count = keys.length
//     return count;
//     }

  
//   // Change code above this line



// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salary = Object.values(salaries)
//   for (const salar of salary)
//     totalSalary += salar
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for(const color of colors){
// hexColors.push(color.hex)
// rgbColors.push(color.rgb)}

// console.log(hexColors);
// // console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
  
//   // console.log(pricePerWord);
//   for (const product of products)
//     if (product.name === productName) {
//       return product.price
//     }
//     return null

//   // Change code above this line
// }
// console.log(getProductPrice("Radar")) //повертає 1300.
// console.log(getProductPrice("Grip")) // повертає 1200.
// console.log(getProductPrice("Scanner")) //повертає 2700.
// console.log(getProductPrice("Droid")) // повертає 400.
// console.log(getProductPrice("Engine")) // повертає null.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   for (const product of products)
//     if (product.name === propName) {
//       return product.price
//     }
//   return null
  
// }


// console.log(getAllPropValues("name")) // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")) //повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")) // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")) // повертає []

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propArray = [];
//   const keys = Object.keys(products);
//   console.log(keys);
//   for (const key of keys) {
//     console.log(products[key]);}
//       if (key === propName) {
//         propArray.push(product[propName]);
//   }
//     return propArray;
//     }

  
  
  // Change code above this line


// console.log(getAllPropValues("name"));

// console.log(getAllPropValues("quantity"));

// console.log(getAllPropValues("price"));

// console.log(getAllPropValues("category"));



// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today.low, today.high, today.icon: = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" } = forecast;

// console.log(today.low);
// console.log(today.high);
// console.log(today.icon);

// // const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, stats: { followers, views: userViews, likes: userLikes = 0 },} = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308


// // Change code below this line
// function add(...args) {
//   console.log(args);
//   // Change code above this line
// }
// console.log(add(15, 27));// повертає 42
// console.log(add(12, 4, 11, 48));// повертає 75
// console.log(add(32, 6, 13, 19, 8));// повертає 78
// console.log(add(74, 11, 62, 46, 12, 36));// повертає 241

// Change code below this line
// function addOverNum(one,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > one) {
//         total += arg;                  ... КАК    <<<<< <<<< ??
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27))//повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))//повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8))//повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36))//повертає 218



// // Change code below this line
// function findMatches(array, ...args) {
//   console.log(array, args);
//   const matches = [];  // Don't change this line
//   for (const num of args) {
//     console.log(num);
//     if(array.includes(num)){
//       matches.push(num);
//     }
// }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)) // повертає [1, 2]
// // console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)) // повертає [17, 89, 2]
// // console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)) // повертає [24, 9, 41]
// // console.log(findMatches([63, 11, 8, 29], 4, 7, 16)) // повертає []


// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["Останнє королівство", "Страж снів"],
//                                                                       // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//                                                                            // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };
// console.log(bookShelf);

// // Виклики методів
// console.log(bookShelf.addBook("Нова книга"));
// console.log(bookShelf.getBooks("dfsfds"));



// Change code below this line
// function addOverNum(one,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > one) {
//         total += arg;                  ... НЕ ПОНЯТНО     <<<<< <<<< ??
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27))//повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))//повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8))//повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36))//повертає 218

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName)      //// КАК Я ЭТО СДЕЛАЛ ???
//         this.books.splice(bookIndex,1,newName)

//     // Change code above this line
//   },
// };



// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']




//TODO:============================
//Написати стрілочну функцію,яка буде рахувати суму чисел незалежно від кількості аргументів forEach
// і приймає колбек який виводить рядок `Загальна сумма >num>!`

// const sumNumbers = (fosum, ...array) => {
//   let val = 0;
//   array.forEach((ar) => (val += ar))
//   console.log(val);
//   return fosum(val)
// }

// const foosum = valuesum() => return `Загальна сумма ${val}>!`;
  





// console.log(sumNumbers(valuesum, 1,1,2,2,3,4,5,6),);

// console.log(sumNumbers(valuesum,15,17,18,2,92,39,4,50,6),);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//   const renewPotion = this.potions.indexof(oldName);
//     this.potions.splice(renewPotion,1,newName);

//     // Change code above this line
//   },
// };

    
//     console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));  // у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
//     console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));  // у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]

// const fna = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// }


// function fnb (number){
//   console.log("Это тест вызова fnb", number);
// }

// fna('fjhgkjsd', fnb)

// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order (pizzaName, onSuccess , onError) {
//       onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       onSuccess(pizzaName);
// },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (number) {
//     totalPrice += number
//   });
//     return totalPrice
//   };
  

   




// // console.log(calculateTotalPrice([12, 85, 37, 4]))// повертає 138
// // console.log(calculateTotalPrice([164, 48, 291]))// повертає 503
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]))// повертає 1116


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach (function (numbers, values) {
//     if (numbers > value)
//       filteredNumbers.push(numbers);
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// //Оголошена функція filterArray(numbers, value)
// console.log(filterArray([1, 2, 3, 4, 5], 3))// повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4))// повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5))// повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38))// повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20))// повертає [24, 41, 76]

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray))
//       commonElements.push(firstArray)
//   });
    
 
     
       
  

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }



// console.log(getCommonElements([1, 2, 3], [2, 4]));// повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));// повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));// повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));// повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));// повертає []



// Change code below this line
 
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach(el => {
//     totalPrice += el;
//   });
//   return totalPrice
// }



// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));// повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));// повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));// повертає 1116


// Оголошена змінна `calculateTotalPrice`
// Змінній `calculateTotalPrice` присвоєна стрілочна функція з параметром `(orderedItems)`
// Для перебирання масиву `orderedItems` використаний метод `forEach`
// Колбек для методу `forEach` - це стрілочна функція
// Виклик функції `calculateTotalPrice([12, 85, 37, 4])` повертає `138`
// Виклик функції `calculateTotalPrice([164, 48, 291])` повертає `503`
// Виклик функції `calculateTotalPrice([412, 371, 94, 63, 176])` повертає `1116`
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.Результатом виклику функції calculateTotalPrice([7,12,10,18,23,6,13,15,10,5,18]) буде число 137





// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
  
// };

// numbers.forEach(logMessage);

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });




// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//       // console.log(numbers[i]);
//       newNumbers.push(numbers[i] + value)
//       console.log(numbers[i]);
//     }
//   }
// return newNumbers.push(numbers(i))
//   // Change code above this line
// }

// // const newNumbers = changeEven(numbers, value)



//  function changeEven  (numbers, value) {

//   const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value)
//     } else {
//       newArray.push(number)
//     }


//   });
//   return newArray
// }


// console.log(changeEven([1, 2, 3, 4, 5], 10));// повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));// повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100));// повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));// повертає новий масив [144, 13, 81, 192, 136, 154]


// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value)
//     }
// else { newNumbers.push(numbers[i])
// }
// return newNumbers
//   }
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10))
// console.log(changeEven([17, 24, 68, 31, 42], 100))


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];


// const getUserNames = users => {
// return users.map(users => users.name)
    

// };
  

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(books => books.genres);
// const uniqueGenres = allGenres.filter((el, index, array) => array.indexOf(el) !== index);

// console.table(allGenres);
// console.table(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(books => books.rating >= MIN_RATING);
// const booksByAuthor = books.filter(books => books.author === AUTHOR)

// console.log(topRatedBooks);
// console.log(booksByAuthor);


// Change code below this line


// const getFriends = (users) => {
//   const fiterFriends = users.filter(users => users.friends)
//   console.log(fiterFriends);
  
  
//   return fiterFriends.filter((el, index, fiterFriends) => fiterFriends.indexOf(el) === index);
   
// };

 

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(books => books.genres){
//   return
// }
// const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
// console.table(allGenres);
// console.table(uniqueGenres);



// const getFriends = (users) => {
//   users.flatMap(user => user.friends).filter((el, index) => user.indexOf(el) === index)

// };

// const getFriends = (users) => {
//   users.flatMap(users => users.friends).filter((el, index, users) => users.indexOf(el) === index)

// };


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;



// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, el) => { return acc + el; }, 0)
// console.log(totalPlayTime);

  

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

//Написати функцію,яка буде рахувати середню площу країн

// function getAverageArea(arrayCountries) {
//   const totalArea = arrayCountries.reduce((acc, country) => {
//     return acc + country.area;
//   }, 0)
//   return totalArea / arrayCountries.length;
// }

// console.log(getAverageArea(countries));


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const play = Object.values(players);
// const totalAveragePlaytimePerGame = players.reduce((total, el) => { return total + el.playtime / el.gamesPlayed}, 0);


// console.log(totalAveragePlaytimePerGame);
// // console.log(players);
// // console.log(play);


//const totalPlayTime = playtimes.reduce((acc, el) => {return acc + el}, 0)


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// // const averageScore = totalScore / students.length;

// // Change code below this line



// const getTotalFriendCount = users => users.reduce((acc, el) =>  acc + el.friends.length ,0)
   
// console.log(getTotalFriendCount(users));

// //Написати функцію,яка буде рахувати середню площу країн

// // function getAverageArea(arrayCountries) {
// //   const totalArea = arrayCountries.reduce((acc, country) => {
// //     return acc + country.area;
// //   }, 0)
// //   return totalArea / arrayCountries.length;
// // // }

// const sortByAscendingBalance = users => { [...users].sort((a,b) => a.balance - b.balance)
   
// };


// console.log(sortByAscendingBalance(users));




// // Change code below this line
// const sortByAscendingBalance = users => { return users.sort((a,b) => a.balance - b.balance)
                                                                                                              //     <<<<<< НЕ ЗРОЗУМІЛО 
// };
// // Change code above this line



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(books => books.rating >= MIN_RATING);
// const booksByAuthor = books.filter(books => books.author === AUTHOR)


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));
// console.log(names);

// const users = [

//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users => {return [...users].sort((a,b) => a - b)flatMap(users => users.name)
   
// };
// const getSortedFriends = users => { return users.flatMap(users => users.friends).sort((a, b) => a.localeCompare(b)).filter((el, index, users) => users.indexOf(el) === index) }

// console.log(getSortedFriends(users));

// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// const getTotalBalanceByGender = (users, gender) => {return users.filter(users => users.gender === gender)}
// console.log(getTotalBalanceByGender(users)); //

// // Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс
// // користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

 
//   // Change code above this line
// }


// console.log(Car);

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// // console.log(User);
// class Storage {
// constructor(items) { 
// this.items = items;
// }

// getItems(){
// return this.items;
// }
// addItem(newItem){
// this.items.push(newItem);
// }
// removeItem(itemToRemove){
// this.items = this.items.filter(item => item !== itemToRemove);
// }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//   constructor(value) { 
//     this.value  = value;
// }
// getValue(){
// return this.value
// }
// padStart(str){
//   this.value = (str) + this.value;
// }

// padEnd(str){
//   this.value = this.value + (str);
// }
// padBoth(str){
//   this.value = (str) + this.value + (str);
// }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//   // Change code below this line

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getBrand(){
// return this.#brand;
// }
// changeBrand(newBrand) {
// this.#brand = newBrand;
// }
  
//   // Change code above this line
// }


// new Car({ brand: "Audi", model: "Q3", price: 36000 }); //утвориться об'єкт { model: "Q3", price: 36000 }
// new Car({ brand: "bmw", model: "X5", price: 58900 }); //утвориться об'єкт { model: "X5", price: 58900 }
// new Car({ brand: "Nissan", model: "Murano", price: 31700 }); //утвориться об'єкт { model: "Murano", price: 31700 }

// class Car {
//   // Change code below this line
//   static MAX_PRICE = {
//     price: 50000
// }
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice
//     }      
    
//   }
//   // Change code above this line
// }

// // const audi = new Car({ price: 35000 });
// // console.log(audi.price); // 35000

// // audi.price = 49000;
// // console.log(audi.price); // 49000

// // audi.price = 51000;
// // console.log(audi.price); // 49000


// class Car {

//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum"
//     }
//     return "Success! Price is within acceptable limits"
//   }
    

 


 





//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }

// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
     
//   };

//   constructor({ email, accessLevel}) {
//     super(email);
//     this.accessLevel = accessLevel; 
//     this.blackListedEmails = [];
//   }
//   blacklist(email){
//   this.blackListedEmails.push(email);
// }
//   isBlacklisted(email) {
    
//     return this.blackListedEmails.includes(email)
    
  


// }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// Напиши функцію для гри в Бінго. Гравцю даються рандомні числа,які він збирає(в масив).
//Для цього треба записати число в змінну.
//Якщо гравець отримав число,яке в нього є,то він його не може взяти другий раз і функція викликає сама себе знову.
//Коли гравець збирає числа від 1 до 5,то він перемагає і функція повертає рядок 'БІНГО' , масив очищається і фунція більше себе не викликає.
// Рандомні числа исла отримуються за допомогою допоміжної функції RandomNumber.

// let playerDesk = [];
// function randomNumber(){
// return (Math.random() * (5 - 1) + 1).toFixed(0)
// }
// function randomnum() {
//   let random = randomNumber(); 
//   if (random.filter((el) => random.undexOf(el) === index)) {
//     console.log(random);
//     randomnum()
//   }
//       return []
// }


// filter((el, index, users) => users.indexOf(el) === index)  
// const names = "Djoh"
// let admin = names;


// console.log(admin);

// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
//   Создайте переменную для хранения имени текущего посетителя сайта.Как бы вы назвали такую переменную ?
// const ourPlanetNAme 
// const currentUserName
    
