let profilepopupbutton = document.querySelector(".data__edit");
let profilepopup = document.querySelector(".popup");

function handleopenpopup() {
  console.log("test");
  profilepopup.classList.add("popup_opened");
}

profilepopupbutton.addEventListener("click", handleopenpopup);
