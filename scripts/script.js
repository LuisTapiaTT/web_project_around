let profileEditButton = document.querySelector(".profile__editButton"); // Botón editar perfil.

let profileSaveButton = document.querySelector(".popup__saveButton"); // Botón de guardar editar perfil.

let profileCloseButton = document.querySelector(".popup__closeButton"); // Botón de cerrar popup.

let profileLikeButton = document.querySelector(".feed__post-likeButton"); //Botón de like.

let popupWindow = document.querySelector(".popup"); //Ventana popup.

let inputName = document.querySelector(".popup__inputName");

let inputHobby = document.querySelector(".popup__inputHobby");

let infoName = document.querySelector(".profile__name");

let infoHobby = document.querySelector(".profile__hobby");

// Botón editar perfil/abrir popup.

function openPopupWindow() {
  popupWindow.classList.add("popup_opened");
  inputName.value = infoName.textContent;
  inputHobby.value = infoHobby.textContent;
}
profileEditButton.addEventListener("click", openPopupWindow);

// Botón cerrar popup.

function closePopupWindow() {
  popupWindow.classList.remove("popup_opened");
}
profileCloseButton.addEventListener("click", closePopupWindow);

// Botón de guardado.
function saveProfileInfo(evt) {
  evt.preventDefault();
  infoName.textContent = inputName.value;
  infoHobby.textContent = inputHobby.value;
}

profileSaveButton.addEventListener("submit", saveProfileInfo);

// Botón de Like.
// if (...) {
//     profileLikeButton.classList.toggle(".feed__post-likeButton-active");

// }
