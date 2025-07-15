console.log("Esto es una prueba");
console.log(`Esto es una
plantilla literal,
y no deberia haber un problema con ella; verdad, numero ${8 + 1}?`);

let profileEditButton = document.querySelector(".profile__editButton"); // Botón editar perfil.

let profileSaveButton = document.querySelector(".popupWindow__saveButton"); // Botón de guardar editar perfil.

let profileCloseButton = document.querySelector(".popupWindow__closeButton"); // Botón de cerrar popup.

let profileLikeButton = document.querySelector(".feed__post-likeButton"); //Botón de like.

let popupWindow = document.querySelector(".popupWindow"); //Ventana popup.

let inputName = document.querySelector(".popupWindow__inputName");

let inputHobby = document.querySelector(".popupWindow__inputHobby");

let infoName = document.querySelector(".profile__name");

let infoHobby = document.querySelector(".profile__hobby");

// Botón editar perfil/abrir popup.

function openPopupWindow() {
  popupWindow.classList.add("popupWindow-display");
  inputName.value = infoName.textContent;
  inputHobby.value = infoHobby.textContent;
}
profileEditButton.addEventListener("click", openPopupWindow);

// Botón cerrar popup.

function closePopupWindow() {
  popupWindow.classList.remove("popupWindow-display");
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
