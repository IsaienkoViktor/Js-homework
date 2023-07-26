// const bodyElement = document.body;

// const parentNode = bodyElement.parentNode;

// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;
// const childNodes = bodyElement.childNodes;

// const childrenNode = bodyElement.children;
// const firstElementChild = bodyElement.firstElementChild;
// const lastElementChild = bodyElement.lastElementChild;

// const previousSibling = bodyElement.previousSibling;
// const previousElementSibling = bodyElement.previousElementSibling;
// const nextSibling = bodyElement.nextSibling;
// const nextElementSibling = bodyElement.nextElementSibling;



//console.log(lastChildNode); // elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
//console.log(childNodes);  // elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
//console.log(nextSibling); //- вибере елемент «праворуч» від elem (його наступного сусіда)
//console.log(parentNode) // elem.parentNode - вибере батьківський elem.
//console.log(childrenNode); // elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
//console.log(firstElementChild); // elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem. (body >> header)
//console.log(lastElementChild); // - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами. (scrit > /body)
//console.log(previousSibling); // - вибере елемент «зліва» від elem (його попереднього сусіда).
//console.log(firstChildNode); // elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
//console.log(previousElementSibling); //- вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// //console.log(nextElementSibling); // - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).



// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listsOfmenu = document.querySelectorAll('.item');
console.log(`Number of categories: ${listsOfmenu.length}`);


// const category = document.querySelectorAll('.item')
// console.log(category);

const title = listsOfmenu.forEach((value) => {
    console.log(`Category: ${value.firstElementChild.textContent}`);
    console.log(`Elements: ${value.lastElementChild.children.length}`);
});


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


// --Before --
// ul class="lesson"
// --Prepend -- 
// li
// li
// --append -- 
// </ul
// --After -- 








