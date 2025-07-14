console.log("Esto es una prueba");
console.log(`Esto es una
plantilla literal,
y no deberia haber un problema con ella; verdad, numero ${8 + 1}?`);

let profileEditButton = document.querySelector(".profile__edit-button");

let inputFields = document.querySelector("popupWindow__form__input");

let profileSaveButton = document.querySelector(".popupWindow__saveButton");

let profileCloseButton = document.querySelector(".popupWindow__closeButton");

let profileLikeButton  = document.querySelection(".feed__post-likeButton");

console.log(profileCloseButton.hasAttribute("class"));

// Botón de Like.
if (...) {
    profileLikeButton.classList.toggle(".feed__post-likeButton-active");

}

// Botón de guardado. 
if (...) {
  profileSaveButton.setAttribute("disabled", "token");
  profileSaveButton.classList.add("popupWindow__saveButton-disabled");
} else {
    profileSaveButton.removeAttribute("disabled", "token");
    profileSaveButton.classList.remove("popupWindow__saveButton-disabled");
}
