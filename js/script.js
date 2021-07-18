 //Модальное окно
const writeUs = document.querySelector(".write-us");
const contactsPopup = document.querySelector(".modal-contacts");
const contactsClose = contactsPopup.querySelector(".modal-close");
const modalForm = contactsPopup.querySelector(".modal-form");
const contactsName = contactsPopup.querySelector(".modal-contacts-name");
const contactsEmail = contactsPopup.querySelector(".modal-contacts-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");

  if (storage) {
    contactsEmail.value = storage;
  } else {
    contactsName.focus();
  }
});

//Ошибка
contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");
});

//Валидация формы

modalForm.addEventListener("submit", function (evt) {
  if (!contactsName.value || !contactsEmail.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", contactsEmail.value);
    }
  }
});

//Кнопка Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.remove("modal-error");
    }
  }
});
