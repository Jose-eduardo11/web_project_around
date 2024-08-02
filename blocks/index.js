let profilepopupbutton = document.querySelector(".data__edit");
let profilebuttonClose = document.querySelector(".popup__close");
let profilepopup = document.querySelector(".popup");

function handleopenpopup() {
  console.log("test");
  profilepopup.classList.add("popup_opened");
}

function handleclosepopup() {
  profilepopup.classList.remove("popup_opened");
}
profilepopupbutton.addEventListener("click", handleopenpopup);
profilebuttonClose.addEventListener("click", handleclosepopup);
