const profileEditButton = document.querySelector(".profile__editButton"); // Botón editar perfil.

const profileSaveButton = document.querySelector(".popup__saveButton"); // Botón de guardar editar perfil.

const profileCloseButton = document.querySelector(".popup__closeButton"); // Botón de cerrar popup.

const postCloseButton = document.querySelector(".popup__closeButton-2"); // Botón de cerrar addPostPopup.

const postCreateButton = document.querySelector(".popup__createButton"); // Botón de crear post.

let profileLikeButton = document.querySelector(".feed__post-likeButton"); //Botón de like.

const profileAddButton = document.querySelector(".profile__add-button"); //Botón de agregar post.

let popupWindow = document.querySelector(".popup"); //Ventana popup.

const popupWindow2 = document.querySelector(".popup-2"); //Ventana popup-2

const inputName = document.querySelector(".popup__inputName");

const inputHobby = document.querySelector(".popup__inputHobby");

const inputTitle = document.querySelector(".popup__inputTitle");

const inputLink = document.querySelector("popup__inputLink");

const infoName = document.querySelector(".profile__name");

const infoHobby = document.querySelector(".profile__hobby");

let newPosts = document.querySelector(".feed__posts");

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

let addedCards = [];

function addPost(titleValue, linkValue) {
  const newCardContainer = document.createElement("div");
  newCardContainer.classList.add("feed__post-block");
  const newImageElement = document.createElement("img");
  newImageElement.classList.add("feed__post-image");
  const postInfoContainer = document.createElement("div");
  postInfoContainer.classList.add("feed__post-info");
  const titleElement = document.createElement("h2");
  titleElement.classList.add("feed__post-title");
  titleElement.textContent = titleValue;
  const likeButtonElement = document.createElement("button");
  likeButtonElement.classList.add("feed__post-likeButton");

  newPosts.insertAdjacentHTML(
    "afterbegin",
    `
   <div class="feed__post-block">
               <img
                 class="feed__post-image"
                 src="${linkValue}"
               />
               <div class="feed__post-info">
                 <h2 class="feed__post-title">${titleValue}</h2>
                 <button class="feed__post-likeButton">
                  <img src="images/like_button.png" alt="botón de like" />
                </button>
               </div>
             </div>`
  );
}

postCreateButton.addEventListener("click", function () {
  let titlePost = document.querySelector(".popup__inputTitle");
  let linkPost = document.querySelector(".popup__inputLink");

  addPost(titlePost.value, linkPost.value);

  titlePost.value = "";
  linkPost.value = "";

  closePopupWindow2();
});
