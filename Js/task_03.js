// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const gallery = document.querySelector(".gallery");

// const makeGallery = ({ url, alt}) => {
// const galleryItem = document.createElement('li');
// const galleryImg = document.createElement('img');
// galleryItem.classList.add('item')
// galleryItem.append(galleryImg)

// galleryImg.src = url;
// galleryImg.alt = alt; 
// galleryImg.width = 1260;

    

// // console.log(galleryItem);
// // console.log(galleryImg);


//     return galleryItem
// };

// // console.log(makeGallery(...images));

// const cardsArr = images.map((img) => { return makeGallery(img); }); 
// console.log(cardsArr);


// gallery.append(...cardsArr)



const galleryMarkup = images.map(({ url, alt }) =>`<li><img src="${url}" alt="${alt}" width = "1260"></li>`).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

