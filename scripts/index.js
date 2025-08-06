const profileEditButton = document.querySelector(".profile__editButton"); // Botón editar perfil.

const profileSaveButton = document.querySelector(".popup__saveButton"); // Botón de guardar editar perfil.

const profileCloseButton = document.querySelector(".popup__closeButton"); // Botón de cerrar popup.

const postCloseButton = document.querySelector(".popup__closeButton-2"); // Botón de cerrar addPostPopup.

const postCreateButton = document.querySelector(".popup__createButton"); // Botón de crear post.

const profileAddButton = document.querySelector(".profile__add-button"); //Botón de agregar post.

const popupWindow = document.querySelector(".popup"); //Ventana popup.

const popupWindow2 = document.querySelector(".popup-2"); //Ventana popup-2

const inputName = document.querySelector(".popup__inputName");

const inputHobby = document.querySelector(".popup__inputHobby");

const inputTitle = document.querySelector(".popup__inputTitle");

const inputLink = document.querySelector("popup__inputLink");

const infoName = document.querySelector(".profile__name");

const infoHobby = document.querySelector(".profile__hobby");

// Botón editar perfil/abrir popup.

function openPopupWindow() {
  popupWindow.classList.add("popup_opened");
  inputName.value = infoName.textContent;
  inputHobby.value = infoHobby.textContent;
}
profileEditButton.addEventListener("click", openPopupWindow);

// Botón add post.

function AddPostPopupWindow() {
  popupWindow2.classList.add("popup_opened-2");
}
profileAddButton.addEventListener("click", AddPostPopupWindow);

// Botón cerrar popup.

function closePopupWindow() {
  popupWindow.classList.remove("popup_opened");
}
profileCloseButton.addEventListener("click", closePopupWindow);

// Botón cerrar popup2.

function closePopupWindow2() {
  popupWindow2.classList.remove("popup_opened-2");
}
postCloseButton.addEventListener("click", closePopupWindow2);

// Botón de guardado.
function saveProfileInfo(evt) {
  evt.preventDefault();
  infoName.textContent = inputName.value;
  infoHobby.textContent = inputHobby.value;
}

profileSaveButton.addEventListener("submit", saveProfileInfo);

// Botón crear post.

let initialCards = [
  {
    name: "Portland, Oregon",
    link: "./images/Portland_Oregon.jpg",
  },
  {
    name: "Seattle, Washington",
    link: "./images/Seattle_Washington.jpg",
  },
  {
    name: "Charleston, South Carolina",
    link: "./images/Charleston_SouthCarolina.jpg",
  },
  {
    name: "Minneapolis, Minnesota",
    link: "./images/Minneapolis_Minnesota.jpg",
  },
  {
    name: "Savannah, Georgia",
    link: "./images/Savannah_Georgia.jpg",
  },
  {
    name: "Telluride, Colorado",
    link: "./images/Telluride_Colorado.jpg",
  },
];

const newPosts = document.querySelector(".feed__posts");

function addPost(titleValue, linkValue) {
  const cardTemplate = document.querySelector("#template").content;
  const cardElement = cardTemplate
    .querySelector(".feed__post-block")
    .cloneNode(true);

  cardElement.querySelector(".feed__post-image").setAttribute("src", linkValue);
  cardElement
    .querySelector(".feed__post-image")
    .setAttribute("alt", titleValue);
  cardElement.querySelector(".feed__post-title").textContent = titleValue;

  const deleteButtons = cardElement.querySelector(".feed__post-deleteButton");
  const likeButtons = cardElement.querySelector(".feed__post-likeButton");

  deleteButtons.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButtons.addEventListener("click", () => {
    likeButtons.classList.toggle("feed__post-likeButton-active");
  });

  newPosts.prepend(cardElement);
}

// Evento de botón Crear.
postCreateButton.addEventListener("click", function () {
  let titlePost = document.querySelector(".popup__inputTitle");
  let linkPost = document.querySelector(".popup__inputLink");

  addPost(titlePost.value, linkPost.value);

  titlePost.value = "";
  linkPost.value = "";

  closePopupWindow2();
});

// Reactividad Botón de Like.
const likeButtons = document.querySelectorAll(".feed__post-likeButton");

function reactiveLike() {
  this.classList.toggle("feed__post-likeButton-active");
}

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", reactiveLike);
}

// Reactividad botón eliminar post.
const deleteButtons = document.querySelectorAll(".feed__post-deleteButton");

function reactiveDelete() {
  this.closest(".feed__post-block").remove();
}

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", reactiveDelete);
}

// Popup Imagen Ampliada

const popupImgContainer = document.querySelector(".popup__ImgContainer");
const popupImg = document.querySelector(".popup__Img");
const popupImgCloseButton = document.querySelector(".popup__ImgCloseButton");
const popupImgText = document.querySelector(".popup__ImgText");
const cardContainer = document.querySelectorAll(".feed__post-block");

function openImgPopup(imageSrc, altText) {
  popupImg.src = imageSrc;
  popupImg.alt = altText;
  popupImgText.textContent = altText;
  popupImgContainer.classList.add(".popup__ImgContainerOpened");
}

// cardContainer.forEach((card) => {
//   card.addEventListener("click", function (event) {
//     if (event.target.classList.contains(".feed__post-image")) {
//       const img = event.target;
//       openImgPopup(img.src, img.alt);
//       console.log("Hola, Mundo");
//     }
//   });
// });

function holaMUNDO() {
  popupImgContainer.classList.add(".popup__ImgContainerOpened");
  console.log("Hola, mundo");
}

for (let i = 0; i < cardContainer.length; i++) {
  cardContainer[i].addEventListener("click", holaMUNDO);
}

// popupImgCloseButton.addEventListener("click", () => {
//   popupWindow3.classList.remove(".popup__ImgContainerOpened");
// });

// function closePopupWindow3() {
//   popupWindow3.classList.remove(".popup__ImgContainerOpened");
// }

// popupImgCloseButton.addEventListener("click", closePopupWindow3);
