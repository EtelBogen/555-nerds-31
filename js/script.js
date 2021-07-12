 //Модальное окно
const writeUs = document.querySelector(".write-us");
const contactsPopup = document.querySelector(".modal-contacts");
const contactsClose = contactsPopup.querySelector(".modal-close");
const contactsName = contactsPopup.querySelector(".modal-contacts-name");


writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
  contactsName.focus();
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
    }
  }
});
